import { Button } from "@/components/ui";
import { List } from "lucide-react";
import Link from "next/link";

const Catalog = () => {
	return <div>
        <List/>
        <Button asChild><Link href={"products"}>back to product list</Link></Button>
    </div>;
};

export default Catalog;
