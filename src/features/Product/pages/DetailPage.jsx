import { Container, createTheme, Grid, Paper } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const theme = createTheme();
const useStyles = makeStyles(() => {
    return {
        root: {
            paddingBottom: theme.spacing(5),
        },
        left: {
            width: '400px',
            padding: theme.spacing(1.5),
            borderRight: `1px solid ${theme.palette.grey[300]}`,
        },
        right: {
            flex: '1 1 0',
            padding: theme.spacing(1.5),
        },
        loading: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
        },
    };
});

function DetailPage() {
    const classes = useStyles();
    let urlParams = useParams();
    const productId = urlParams.id;

    const { product, loading } = useProductDetail(productId);

    const handleAddToCartSubmit = (formValues) => {
        console.log('form values: ', formValues);
    };

    if (loading) {
        return (
            <Box className={classes.loading}>
                <LinearProgress />
            </Box>
        );
    }

    return (
        <Box className={classes.root}>
            <Container>
                <Paper elevation={0}>
                    <Grid container>
                        <Grid item className={classes.left}>
                            <ProductThumbnail product={product} />
                        </Grid>
                        <Grid item className={classes.right}>
                            <ProductInfo product={product} />
                            <AddToCartForm onSubmit={handleAddToCartSubmit} />
                        </Grid>
                    </Grid>
                </Paper>

                <ProductMenu />
                <Routes>
                    <Route index element={<ProductDescription product={product} />} />
                    <Route path="additional" element={<ProductAdditional />} />
                    <Route path="reviews" element={<ProductReviews />} />
                </Routes>
            </Container>
        </Box>
    );
}

export default DetailPage;
