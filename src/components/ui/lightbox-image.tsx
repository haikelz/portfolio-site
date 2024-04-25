import { cn } from "@/lib/utils/cn";
import { DetailedHTMLProps, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/styles.css";

type ImageProps = DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
>;

export default function LightboxImage({
  src,
  alt,
  className,
  ...props
}: ImageProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [imgSource, setImgSource] = useState<string>(src as string);

  return (
    <>
      <img
        className={cn(className)}
        src={imgSource}
        alt={alt}
        onError={() => setImgSource("/images/placeholder.svg")}
        draggable={false}
        {...props}
        onClick={() => setIsOpen(true)}
      />
      <Lightbox
        plugins={[Captions]}
        open={isOpen}
        close={() => setIsOpen(false)}
        render={{
          slide: () => {
            return (
              <img
                className="aspect-auto"
                alt={alt}
                src={src}
                loading="eager"
                fetchPriority="high"
                draggable={false}
                width={700}
                height={700}
              />
            );
          },
        }}
        slides={[
          {
            src: src as string,
            alt: alt,
            title: alt,
          },
        ]}
      />
    </>
  );
}
