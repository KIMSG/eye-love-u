import React from "react";

const images = [
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_20%2F1644713108784dSzTo_JPEG%2F83227FE4-4A43-42D8-B984-C2D86455935B.jpeg",
    label: "내추럴 펌",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_67%2F16447132104066ylRf_JPEG%2F5AAD4DF2-C528-42DB-9756-A767ED1726C6.jpeg",
    label: "볼륨 펌",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_108%2F1644713210156zuYiP_JPEG%2F240D0836-858C-42A8-9433-2B044006C8A2.jpeg",
    label: "속눈썹 연장",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_112%2F1644713210274wg52w_JPEG%2F3F662E79-1248-4F89-8C6E-4E50A18B71A5.jpeg",
    label: "언더펌",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_132%2F16447132103528owUP_JPEG%2F92A64525-D708-495D-812F-958567A734FF.jpeg",
    label: "혼합펌",
  },
  {
    src: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_257%2F1644713210699POUPS_JPEG%2FBA25AC70-D9CE-4043-8558-74877F5C4BCD.jpeg",
    label: "웨딩 펌",
  },
];

const Portfolio = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-pink-600 text-center mb-10">시술 포트폴리오 ✨</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-md"
          >
            <img
              src={img.src}
              alt={img.label}
              className="w-full h-[400px] object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white py-2 text-center text-sm font-medium">
              {img.label}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Portfolio;
