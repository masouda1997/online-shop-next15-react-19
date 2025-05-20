import React from 'react';
import { DATA } from '../mock/products';
import ProductItem from './ProductItem';

const ProductList = () => {
	return <div>
        {DATA.map(item => (
            <ProductItem key={item.id} product={item}/>
        ))}
    </div>;
};

export default ProductList;
