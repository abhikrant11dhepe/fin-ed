'use client';

import Image from 'next/image';

const ProfilePhoto = ({ src, alt, size = 75 }) => {
  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-full overflow-hidden relative"
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={`${size}px`}
        style={{ objectFit: 'cover' }}
        className="rounded-full border-green-500 border-2"

      />
    </div>
  );
};

export default ProfilePhoto;
