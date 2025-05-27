import React from "react";
import InstaCard from "../components/InstaCard";


const portpolios = [
  {
    profile: "https://ldb-phinf.pstatic.net/20220301_15/1646100100000ZxcvB_PNG/review2.png",
    username: "natural_lash",
    img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_20%2F1644713108784dSzTo_JPEG%2F83227FE4-4A43-42D8-B984-C2D86455935B.jpeg",
    text: "자연스럽고 부담 없는 컬링이라 일상 메이크업이 훨씬 쉬워졌어요 💕",
    hashtags: ["내추럴펌", "속눈썹케어", "마곡1인샵"],
    likedBy: "lash_love",
  },
  {
    profile: "https://ldb-phinf.pstatic.net/20220301_15/1646100100000ZxcvB_PNG/review2.png",
    username: "volume_dream",
    img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_67%2F16447132104066ylRf_JPEG%2F5AAD4DF2-C528-42DB-9756-A767ED1726C6.jpeg",
    text: "강한 컬감 덕분에 눈매가 또렷해 보여요! 시술도 편했어요 😊",
    hashtags: ["볼륨펌", "D컬", "선명한눈매"],
    likedBy: "beauty_holic",
  },
  {
    profile: "https://ldb-phinf.pstatic.net/20220301_15/1646100100000ZxcvB_PNG/review2.png",
    username: "lash_queen",
    img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_108%2F1644713210156zuYiP_JPEG%2F240D0836-858C-42A8-9433-2B044006C8A2.jpeg",
    text: "연장인데도 너무 자연스럽고 가벼워요! 친구가 어디서 했냐고 물어봤어요 😍",
    hashtags: ["속눈썹연장", "자연스타일", "마곡뷰티"],
    likedBy: "glow_lash",
  },
  {
    profile: "https://ldb-phinf.pstatic.net/20220301_15/1646100100000ZxcvB_PNG/review2.png",
    username: "undergirl",
    img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_112%2F1644713210274wg52w_JPEG%2F3F662E79-1248-4F89-8C6E-4E50A18B71A5.jpeg",
    text: "언더펌 처음 해봤는데 인형눈매 같아요 👀 만족 200%",
    hashtags: ["언더펌", "귀여운눈매", "속눈썹디자인"],
    likedBy: "eyelove_you",
  },
  {
    profile: "https://ldb-phinf.pstatic.net/20220301_15/1646100100000ZxcvB_PNG/review2.png",
    username: "mix_match",
    img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_132%2F16447132103528owUP_JPEG%2F92A64525-D708-495D-812F-958567A734FF.jpeg",
    text: "혼합펌으로 양쪽 눈 밸런스가 딱 맞아졌어요! 센스 최고에요 😆",
    hashtags: ["혼합펌", "눈밸런스", "1:1디자인"],
    likedBy: "matcha_lash",
  },
  {
    profile: "https://ldb-phinf.pstatic.net/20220301_15/1646100100000ZxcvB_PNG/review2.png",
    username: "wedding_bride",
    img: "https://search.pstatic.net/common/?autoRotate=true&type=w560_sharpen&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220213_257%2F1644713210699POUPS_JPEG%2FBA25AC70-D9CE-4043-8558-74877F5C4BCD.jpeg",
    text: "웨딩촬영용으로 했는데 너무 예뻐서 평소에도 유지하고 싶어요 💍",
    hashtags: ["웨딩펌", "특별한날", "신부전용"],
    likedBy: "happy_marry",
  },
];

const Portfolio = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {portpolios.map((item, index) => (
            <InstaCard 
            key={index}
            profile={item.profile}
            username={item.username}
            img={item.img}
            text={item.text}
            hashtags={item.hashtags}
            likedBy={item.likedBy}
            />
        ))} 
        </div>
    )
}


export default Portfolio;