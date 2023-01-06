import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Product({ product }) {
    return (
        <Card sx={{
            maxWidth: '100%',
            
        }} className='root'>
            <CardMedia sx={{
                height: 0,
                paddingTop: '56.25%',
            }} className='media' image={product.image} title={product.name} />
            <CardContent>
                <div sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                }} className='cardContent'>
                    {/* used for text in material ui */}
                    <Typography variant='h5' gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant='h5'>
                        {product.price}
                    </Typography>

                </div>
                <Typography variant='body2' color="textSecondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className='cardActions' sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}>
                <IconButton aria-label='Add to Cart'>
                    <ShoppingCartIcon />

                </IconButton>

            </CardActions>
        </Card>
    )
}

export default Product
