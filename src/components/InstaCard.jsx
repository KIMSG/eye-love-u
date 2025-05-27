import React from "react";

const InstaCard = ({ profile, username, img, text, hashtags, likedBy }) => {
  return (
    <div className="bg-white max-w-sm mx-auto border rounded-xl overflow-hidden shadow-md">
      {/* 상단: 프로필 영역 */}
      <div className="flex items-center px-4 py-3">
        <img
          src={profile}
          alt="profile"
          className="w-8 h-8 rounded-full mr-3 object-cover"
        />
        <span className="font-semibold text-sm">{username}</span>
      </div>

      {/* 메인 이미지 */}
      <img src={img} alt="후기 이미지" className="w-full h-80 object-cover" />

      {/* 텍스트 후기 */}
      <div className="px-4 py-3 text-sm text-left">
        <p className="mb-2">
          <span className="font-semibold">{username}</span> {text}
        </p>
        <p className="text-pink-500 mb-2">
          {hashtags.map((tag, i) => (
            <span key={i} className="mr-2">#{tag}</span>
          ))}
        </p>
        <p className="text-xs text-gray-500">
          Liked by <span className="font-semibold">{likedBy}</span> and others
        </p>
      </div>
    </div>
  );
};

export default InstaCard;
