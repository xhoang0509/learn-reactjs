import { Container, Grid, Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import productApi from 'api/productApi';
import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import ProductSkeleton from '../components/ProductSkeleton';

ListPage.propTypes = {};
const useStyle = makeStyles(() => {
    const theme = createTheme();
    return {
        root: {},
        left: {
            width: '250px',
        },
        right: {
            flex: '1 1 0',
        },
    };
});
function ListPage(props) {
    const classes = useStyle();

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await productApi.getAll({ _page: 8, _limit: 12 });
                setProductList(data);
            } catch (error) {
                console.log('Failed to fetch product list: ', error);
            }
            setLoading(false);
        })();
    }, []);

    return (
        <Box>
            <Container>
                <Grid container spacing={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>left</Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading ? <ProductSkeleton /> : <ProductList data={productList} />}
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
