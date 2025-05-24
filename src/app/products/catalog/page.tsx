import CatalogList from '@/components/catalog/List';
import { Button } from '@/components/ui';

import Link from 'next/link';

const Catalog = () => {
	return (
		<div className='flex flex-col items-center mx-auto my-4'>
			<CatalogList/>
			<Button asChild>
				<Link href={'/products'}>back to product list</Link>
			</Button>
		</div>
	);
};

export default Catalog;
