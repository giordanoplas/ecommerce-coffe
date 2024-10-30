import { ProductType } from "@/types/product";

interface ProductTasteOrigin {
    product: ProductType,
    textSize: string
}

const ProductTasteOrigin = (props: ProductTasteOrigin) => {
    const { product, textSize } = props;

    return (
        <div className="flex items-center justify-between gap-3">
            <p className={`px-2 py-1 ${textSize} text-white bg-black rounded-full dark:bg-white dark:text-black w-fit`}>
                {product.taste}
            </p>
            <p className={`px-2 py-1 ${textSize} text-white bg-yellow-900 rounded-full w-fit`}>
                {product.origin}
            </p>
        </div>
    )
}

export default ProductTasteOrigin;