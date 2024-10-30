import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Image from "next/image";

interface CarouselProductProps {
    images: [{
        id: number;
        url: string;
    }]
}

const CarouselProduct = (props: CarouselProductProps) => {
    const { images } = props;

    return (
        <div className="sm:px-16">
            <Carousel>
                <CarouselContent>
                    {images.map((image) => (
                        <CarouselItem key={image.id} className="flex justify-center">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                                alt="Image product"
                                className="rounded-lg"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
}

export default CarouselProduct;