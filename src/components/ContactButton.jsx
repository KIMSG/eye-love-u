import react from "react";

const ContactButton = () => {
  return (
      
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
      </div>
  );

}

export default ContactButton;
