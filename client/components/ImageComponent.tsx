// ImageComponent.tsx
import { useGetDataUrl } from '@hooks/useGetDataUrl';
import Image, { ImageProps } from 'next/image';
import React, { memo, useEffect, useState } from 'react';

const mediaURL = 'http://127.0.0.1:5000/media';

interface Props extends ImageProps {
  customPlaceholder: string;
  src: string;
}

const ImageComponent = ({ src, customPlaceholder, ...props }: Props) => {
  // Store image path
  const [srcImage, setSrc] = useState(() => src);

  // Convert Placeholder image url to base 64
  const Base64Placeholder = useGetDataUrl(customPlaceholder);

  useEffect(() => {
    if (src) {
      setSrc(src);
    }
  }, [src]);

  return (
    <Image
      blurDataURL={Base64Placeholder}
      placeholder="blur"
      alt={props.alt}
      // In case there is an error we use a dummy image placeholder
      onError={() => setSrc('/no-image.svg')}
      src={`${mediaURL}/${srcImage}`}
      {...props}
    />
  );
};

export default memo(ImageComponent);
