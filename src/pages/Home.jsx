import React from "react";
import { Link } from "react-router-dom";
import ReviewSlider from "../components/ReviewSlider";
import ContactButton from "../components/ContactButton";

const Home = () => {
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
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-pink-600 font-bold text-lg mb-1">내추럴 펌</h3>
            <p className="text-gray-600 text-sm">자연스러운 C컬 연출 / ₩40,000</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-pink-600 font-bold text-lg mb-1">볼륨 펌</h3>
            <p className="text-gray-600 text-sm">D컬로 강한 인상 연출 / ₩45,000</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-4">
            <h3 className="text-pink-600 font-bold text-lg mb-1">속눈썹 연장</h3>
            <p className="text-gray-600 text-sm">맞춤 디자인 연장 / ₩60,000~₩80,000</p>
          </div>
        </div>
      </section>

      {/* 📞 예약 유도 섹션 */}
      <section className="bg-pink-50 text-center py-20 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">지금 바로 예약하고 예뻐지세요 💕</h2>
        <p className="text-gray-600 mb-6">네이버 예약 또는 톡톡으로 간편하게 문의하세요!</p>
        {/* <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://m.booking.naver.com/booking/13/bizes/534394/items/3951042?theme=place&service-target=map-pc&lang=ko&area=bmp"  // 실제 네이버 예약 링크로 교체 
            target="_blank"
             className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded" rel="noreferrer">
            💚 네이버 예약하기
          </a>
          <a href="https://talk.naver.com/ct/w4kvle?frm=mnmb&frm=nmb_detail#nafullscreen"  target="_blank"
             className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded" rel="noreferrer">
            💬 톡톡 문의하기
          </a>
        </div> */}
        <ContactButton />

        
      </section>



    </main>
  );
};

export default Home;
