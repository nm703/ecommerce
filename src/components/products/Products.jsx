import React from "react";
import { Grid } from "@mui/material";
import Product from "./product/Product";
import { useTheme } from '@mui/material/styles';

const products = [
    { id: 1, name: "shoes", description: "Running shoes", price: '100$', image: 'https://static.nike.com/a/images/t_default/0e7455dd-c1e4-4148-b4c7-9897304f0508/invincible-run-2-mens-road-running-shoes-gxNJpn.png' },
    { id: 2, name: "Macbook", description: 'Apple macbook', price: '150$', image: 'https://www.apple.com/v/macbook-pro-14-and-16/c/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large.jpg' },
];

function Products() {

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
                        <Product product={product} />
                    </Grid>
                ))}

            </Grid>
        </main>);

}

export default Products
