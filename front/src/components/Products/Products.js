import React from 'react';
import { Grid } from '@material-ui/core'
import Product from '../Product/Product';
import useStyles from './styles'

const products = [
  { id: 1, name: 'shoes', description: 'Running shoes', price: '$5', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/47da3f6e-9d88-4bf0-a010-384140f43163/%D0%BA%D1%80%D0%BE%D1%81%D1%81%D0%BE%D0%B2%D0%BA%D0%B8-air-max-270-9KTdg8qw.png' },
  { id: 1, name: 'mac', description: 'laptop', price: '$17', image: 'https://mac77.ru/wp-content/uploads/11_6.jpg'}
]

function Products(props) {
  const classes = useStyles();

  return (
    <main className={classes.content}>
      <div className={classes.tooldbar} />
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>
  );
}

export default Products;

