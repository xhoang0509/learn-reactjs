import { Container, createTheme, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { useParams } from 'react-router-dom';
import AddToCartForm from '../components/AddToCartForm';
import ProductInfo from '../components/ProductInfo';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';

const theme = createTheme();
const useStyles = makeStyles(() => {
    return {
        root: {},
        left: {
            width: '400px',
            padding: theme.spacing(1.5),
            borderRight: `1px solid ${theme.palette.grey[300]}`,
        },
        right: {
            flex: '1 1 0',
            padding: theme.spacing(1.5),
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
        return <Box>Loading...</Box>;
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
            </Container>
        </Box>
    );
}

export default DetailPage;
