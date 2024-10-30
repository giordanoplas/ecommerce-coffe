import { ProductType } from "@/types/product";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductImageMiniatureProps {
    product: ProductType
}

const ProductImageMiniature = (props: ProductImageMiniatureProps) => {
    const { product } = props;
    const router = useRouter();

    return (
        <div onClick={() => router.push(`/product/${product.slug}`)} className="cursor-pointer">
            <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                alt="Product"
                className="w-24 h-24 overflow-hidden rounded-md sm:w-auto sm:h-32"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
            />
        </div>
    )
}

export default ProductImageMiniature;