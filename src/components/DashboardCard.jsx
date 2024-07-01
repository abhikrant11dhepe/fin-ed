import React from 'react';
import Image from 'next/image'; 

const DashboardCard = ({ title, imageSrc, imageAlt, children, className }) => {
  return (
    <div className={`bg-sky-200 rounded-2xl shadow-lg overflow-hidden max-h-[600px] ${className}`}>
      {imageSrc && (
        <div className="relative h-64"> 
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill" 
            objectFit="contain" 
          />
        </div>
      )}

      {title && (
        <div className="px-4 py-3 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
        </div>
      )}

      <div className="px-4 py-5 sm:p-6">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;
