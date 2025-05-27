import React from "react";

const ServiceCard = ({ title, description, price, imgUrl  }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
      {/* 🖼️ 이미지 추가 */}
      <img
        src={imgUrl}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <h3 className="text-xl font-bold text-pink-600 mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-sm text-gray-500 font-medium">{price}</p>
    </div>
  );
};

export default ServiceCard;
