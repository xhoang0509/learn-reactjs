import { Container, Grid, Pagination, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductFilters from '../components/ProductFilters';
import ProductList from '../components/ProductList';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductSort from '../components/ProductSort';

ListPage.propTypes = {};
const useStyle = makeStyles(() => {
    return {
        root: {},
        left: {
            width: '250px',
        },
        right: {
            flex: '1 1 0',
        },
        pagination: {
            display: 'flex',
            flexFlow: 'row nowrap',
            justifyContent: 'center',
            marginTop: '30px',
            paddingBottom: '20px',
        },
    };
});
function ListPage(props) {
    const classes = useStyle();

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 10,
        page: 1,
        total: 120,
    });
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({ _page: 1, _limit: 9, _sort: 'salePrice:ASC' });

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(filters);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, [filters]);

    const handlePageChange = (e, page) => {
        setFilters((prevFilters) => ({ ...prevFilters, _page: page }));
    };

    const handleSortChange = (newSortValue) => {
        setFilters((prevFilters) => ({ ...prevFilters, _sort: newSortValue }));
    };
    const handleFiltersChange = (newFiltersValue) => {
        setFilters((prevFilters) => ({ ...prevFilters, ...newFiltersValue }));
    };

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters filters={filters} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
                            {loading ? (
                                <ProductSkeleton length={9} />
                            ) : (
                                <ProductList data={productList} />
                            )}
                            <Box className={classes.pagination}>
                                <Pagination
                                    count={Math.ceil(pagination.total / pagination.limit)}
                                    page={pagination.page}
                                    onChange={handlePageChange}
                                    color="primary"
                                />
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
