import { getProducts } from '../services';
import ProductTable from '../components/ProductTable';

// this view is a server component
const ProductDashboardView = async () => {
	const products = await getProducts();
	return (
		<div>
			<ProductTable products={products} />
		</div>
	);
};

export default ProductDashboardView;
