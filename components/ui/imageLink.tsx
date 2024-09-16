"use client";

const ImageLink = ({
  src,
  href,
  alt,
  width,
  height,
  className,
}: {
  src: string;
  href: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) => {
  return (
    <a href={href} className={className}>
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
};

export default ImageLink;
