import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles';

const products = [
	{
		id: 1,
		name: 'Shoes',
		description: 'Running shoes.',
		price: '$4',
		image: 'https://nb.scene7.com/is/image/NB/mroavck_nb_02_i?$pdpflexf2$&wid=440&hei=440'
	},
	{
		id: 2,
		name: 'Macbook',
		description: 'Apple macbook.',
		price: '$10',
		image:
			'https://media.wired.com/photos/5fb2cc575c9914713ead03de/1:1/w_1800,h_1800,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg'
	}
];

const Products = () => {
	const classes = useStyles();
	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Grid container justify="center" spacing={4}>
				{products.map((product) => (
					<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
						<Product product={product} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Products;
