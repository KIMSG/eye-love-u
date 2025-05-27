import React from "react";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  const services = [
    {
        title: "내추럴 펌",
        description: "자연스럽고 깔끔한 C컬 연출",
        price: "₩40,000",
        imgUrl: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_20%2F1644713108784dSzTo_JPEG%2F83227FE4-4A43-42D8-B984-C2D86455935B.jpeg",
    },
    {
        title: "볼륨 펌",
        description: "눈매를 또렷하게! 강한 컬감의 D컬",
        price: "₩45,000",
        imgUrl: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_20%2F1644713108784dSzTo_JPEG%2F83227FE4-4A43-42D8-B984-C2D86455935B.jpeg",
    },
    {
        title: "속눈썹 연장",
        description: "1:1 맞춤 연장, 자연스러운 볼륨감",
        price: "₩60,000 ~ ₩80,000",
        imgUrl: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_20%2F1644713108784dSzTo_JPEG%2F83227FE4-4A43-42D8-B984-C2D86455935B.jpeg",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">
        시술 안내
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                price={service.price}
                imgUrl={service.imgUrl}
          />
        ))}
      </div>
    </main>
  );
};

export default Services;



//  이미지 포트폴리오 갤러리 만들기


// ◽ 문의 전용 구글폼 삽입

// ◽ 고객 후기 자동 스크롤 연결