import React from "react";
import { Link } from "react-router-dom";
import ReviewSlider from "../components/ReviewSlider";
import ContactButton from "../components/ContactButton";
import ServiceCard from "../components/ServiceCard";

const Home = () => {
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
        imgUrl: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_108%2F1644713210156zuYiP_JPEG%2F240D0836-858C-42A8-9433-2B044006C8A2.jpeg",
    },
    {
        title: "속눈썹 연장",
        description: "1:1 맞춤 연장, 자연스러운 볼륨감",
        price: "₩60,000 ~ ₩80,000",
        imgUrl: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_132%2F16447132103528owUP_JPEG%2F92A64525-D708-495D-812F-958567A734FF.jpeg",
    },
  ];

  return (
    <main>

      {/* 🌸 Hero Section */}
      <section className="bg-pink-100 text-center py-20 px-4">
        <h1 className="text-4xl font-bold text-pink-600 mb-4">
          아이럽유 속눈썹샵에 오신 걸 환영합니다 💖
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          자연스럽고 눈 시림 없이 오래가는 속눈썹 펌.  
          재방문률 90%, 4년차 원장이 정성껏 시술합니다.
        </p>
        <Link
          to="/services"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded shadow">
          시술 안내 보기
        </Link>
      </section>

      <ReviewSlider />

      {/* 🧴 서비스 요약 섹션 */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">인기 시술</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* 간단한 카드 예시 */}

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
      </section>

      {/* 📞 예약 유도 섹션 */}
      <section className="bg-pink-50 text-center py-20 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">지금 바로 예약하고 예뻐지세요 💕</h2>
        <p className="text-gray-600 mb-6">네이버 예약 또는 톡톡으로 간편하게 문의하세요!</p>
        
        <ContactButton />

        
      </section>



    </main>
  );
};

export default Home;
