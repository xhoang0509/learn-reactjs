import { Container, Grid, Paper } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import productApi from 'api/productApi';
import React, { useEffect } from 'react';

ListPage.propTypes = {};
const useStyle = makeStyles(() => {
    const theme = createTheme();
    return {
        root: {},
        left: {
            width: '250px',
        },
        right: {
            flex: '1 1 auto',
        },
    };
});
function ListPage(props) {
    const classes = useStyle();

    useEffect(() => {
        (async () => {
            const respone = await productApi.getAll({ _page: 1, _limit: 10 });
            console.log({ respone });
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
                        <Paper elevation={0}>right</Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ListPage;
