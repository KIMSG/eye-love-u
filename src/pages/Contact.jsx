import React from "react";
import ContactButton from "../components/ContactButton";

const Contact = () => {
  return (
    <main className="max-w-xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-6">
        예약 및 문의 💌
      </h2>

    {/* 매장 정보 */}
      <div className="bg-white shadow-md rounded-lg p-6 text-gray-800 space-y-4 text-sm sm:text-base">
        <p>📍 <strong>주소</strong>: 강서구 마곡동, 마곡역 도보 5분 거리</p>
        <p>🕒 <strong>운영 시간</strong>: 월~토 11:00 ~ 21:00 (일요일 휴무)</p>
        <p>✅ 100% 예약제 / 1인 시술 / 당일 예약 가능</p>
        <p>💬 예약 후 방문 부탁드립니다. 시술 중엔 전화를 받지 못할 수 있어요.</p>
      </div>
        <ContactButton />
        {/* 예약 버튼
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://m.booking.naver.com/booking/13/bizes/534394/items/3951042?theme=place&service-target=map-pc&lang=ko&area=bmp"  // 실제 네이버 예약 링크로 교체
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded text-center"
        >
          💚 네이버 예약하기
        </a>
        <a
          href="https://talk.naver.com/ct/w4kvle?frm=mnmb&frm=nmb_detail#nafullscreen"  // 실제 톡톡 링크로 교체
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded text-center"
        >
          💬 톡톡 문의하기
        </a>
      </div> */}
        {/* 지도 */}
        <div className="mt-10">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">🗺️ 오시는 길</h3>
            <div className="border rounded-lg overflow-hidden">
            <iframe
                src="https://map.naver.com/v5/entry/place/1541913271?c=13.00,0,0,0,dh&placePath=/home"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="아이럽유 위치"
            ></iframe>
            </div>
        </div>
    </main>
  );
};

export default Contact;
