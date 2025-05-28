import ProductForm from "../components/ProductForm";
import { getProductById } from "../services";


const ProductDetailView = async (props : {id:string}) => {
    const {id} = props
    const product = await getProductById(id)
	return (
		<>
			<ProductForm product={product} />
		</>
	);
};

export default ProductDetailView;
