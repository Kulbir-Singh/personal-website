import React from "react";
import classNames from "../utils/twClassNames";

interface Props {
  alt: string;
  src: string;
  className?: string;
  animate?: boolean;
  webPSrc?: string;
}

export default function Picture({
  alt,
  src,
  className,
  animate,
  webPSrc,
}: Props) {
  return (
    <div className={className}>
      <picture>
        <source srcSet={webPSrc} type="image/webp" />
        <img
          src={src}
          alt={alt}
          className={classNames(
            animate ? " hover:scale-[1.03]" : "scale-[1]",
            "object-cover w-full h-full duration-500"
          )}
        />
      </picture>
    </div>
  );
}
