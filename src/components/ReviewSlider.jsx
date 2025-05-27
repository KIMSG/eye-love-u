import React, { useState, useEffect } from "react";

const reviews = [
  {
    profile: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_108%2F1644713210156zuYiP_JPEG%2F240D0836-858C-42A8-9433-2B044006C8A2.jpeg",  // 프로필
    username: "princess_peace",
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_108%2F1644713210156zuYiP_JPEG%2F240D0836-858C-42A8-9433-2B044006C8A2.jpeg",    // 후기 이미지
    text: "자연스럽고 오래가요! 다음 달에 또 예약할게요 💕",
    hashtags: ["아이럽유", "속눈썹펌", "마곡뷰티"],
    likedBy: "beauty_luna",
  },
  {
    profile: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_20%2F1644713108784dSzTo_JPEG%2F83227FE4-4A43-42D8-B984-C2D86455935B.jpeg",
    username: "glow_hana",
    img: "https://search.pstatic.net/common/?src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_20%2F1644713108784dSzTo_JPEG%2F83227FE4-4A43-42D8-B984-C2D86455935B.jpeg",
    text: "친절하고 섬세한 시술! 강추입니다~",
    hashtags: ["속눈썹연장", "자연펌", "마곡1인샵"],
    likedBy: "user_yeji",
  },
];

const ReviewSlider = () => {
  const [index, setIndex] = useState(0);
  const review = reviews[index];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white max-w-sm mx-auto border rounded-xl overflow-hidden shadow-md">
      {/* 상단: 프로필 영역 */}
      <div className="flex items-center px-4 py-3">
        <img src={review.profile} alt="profile"
             className="w-8 h-8 rounded-full mr-3 object-cover" />
        <span className="font-semibold text-sm">{review.username}</span>
      </div>

      {/* 메인 이미지 */}
      <img src={review.img} alt="후기 이미지"
           className="w-full h-80 object-cover" />

      {/* 텍스트 후기 */}
      <div className="px-4 py-3 text-sm text-left">
        <p className="mb-2">
          <span className="font-semibold">{review.username}</span> {review.text}
        </p>
        <p className="text-pink-500 mb-2">
          {review.hashtags.map((tag, i) => (
            <span key={i} className="mr-2">#{tag}</span>
          ))}
        </p>
        <p className="text-xs text-gray-500">
          Liked by <span className="font-semibold">{review.likedBy}</span> and others
        </p>
      </div>
    </div>
  );
};

export default ReviewSlider;
