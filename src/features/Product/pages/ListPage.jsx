import { Container, Grid, Pagination, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import productApi from 'api/productApi';
import queryString from 'query-string';
import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterViewer from '../components/FilterViewer';
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
    let navigate = useNavigate();
    const location = useLocation();
    const queryParams = useMemo(() => {
        const params = queryString.parse(location.search);
        return {
            ...params,
            _page: Number.parseInt(params._page) || 1,
            _limit: Number.parseInt(params._limit) || 9,
            _sort: params._sort || 'salePrice:ASC',
            isPromotion: params.isPromotion ? 'true' : null,
            isFreeShip: params.isFreeShip ? 'true' : null,
        };
    }, [location.search]);

    const [productList, setProductList] = useState([]);
    const [pagination, setPagination] = useState({
        limit: 10,
        page: 1,
        total: 120,
    });
    const [loading, setLoading] = useState(true);
    // const [filters, setFilters] = useState(() => ({
    //     ...queryParams,
    //     _page: Number.parseInt(queryParams._page) || 1,
    //     _limit: Number.parseInt(queryParams._limit) || 9,
    //     _sort: queryParams._sort || 'salePrice:ASC',
    // }));

    // useEffect(() => {
    //     navigate({
    //         search: queryString.stringify(filters),
    //     });
    // }, [filters]);

    useEffect(() => {
        (async () => {
            try {
                const { data, pagination } = await productApi.getAll(queryParams);
                setProductList(data);
                setPagination(pagination);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, [queryParams]);

    const handlePageChange = (e, page) => {
        // setFilters((prevFilters) => ({ ...prevFilters, _page: page }));
        const filters = { ...queryParams, _page: page };
        navigate({
            search: queryString.stringify(filters),
        });
    };

    const handleSortChange = (newSortValue) => {
        // setFilters((prevFilters) => ({ ...prevFilters, _sort: newSortValue }));
        const filters = { ...queryParams, _sort: newSortValue };
        navigate({
            search: queryString.stringify(filters),
        });
    };
    const handleFiltersChange = (newFiltersValue) => {
        // setFilters((prevFilters) => ({ ...prevFilters, ...newFiltersValue }));
        const filters = { ...queryParams, ...newFiltersValue };
        navigate({
            search: queryString.stringify(filters),
        });
    };

    const setNewFilter = (newFilters) => {
        navigate({
            search: queryString.stringify(newFilters),
        });
    };

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilters filters={queryParams} onChange={handleFiltersChange} />
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            <ProductSort
                                currentSort={queryParams._sort}
                                onChange={handleSortChange}
                            />
                            <FilterViewer filters={queryParams} onChange={setNewFilter} />
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
