import React from "react";
import { Grid } from "@mui/material";
import Product from "./product/Product";
import { useTheme } from '@mui/material/styles';



function Products({products, onAddToCart}) {

    const theme = useTheme();
    return (
        <main className="content" style={{
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3)
        }}>
            <div className='toolbar' />
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    //sm small devices
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        {/* saljem product do Product */}
                        <Product product={product} onAddToCart = {onAddToCart}/>
                    </Grid>
                ))}

            </Grid>
        </main>);

}

export default Products
