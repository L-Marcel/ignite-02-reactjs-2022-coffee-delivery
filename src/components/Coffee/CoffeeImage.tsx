import Image, { ImageProps } from "next/image";

interface CoffeeImage extends Partial<ImageProps> {
  src: string;
}

export function CoffeeImage({ src, ...props }: CoffeeImage) {
  return (
    <Image
      alt="Uma xícara de café"
      src={src}
      width={100}
      height={100}
      {...props}
    />
  );
}