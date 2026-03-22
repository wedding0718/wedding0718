/**
 * Nature Green Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/gallery/1.jpg, 2.jpg, ... - 갤러리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "전지승",
    nameEn: "Groom",
    father: "전진용",
    mother: "박명순",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "김수진",
    nameEn: "Bride",
    father: "김명섭",
    mother: "이정원",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2026-07-18",
    time: "14:30",
    venue: "수원 파티웨딩유",
    hall: "아모르홀",
    address: "수원시 권선구 세화로 218(서둔동 9-16번지)",
    tel: "031-297-1000",
    mapLinks: {
      kakao: "https://kko.to/8aDPM6L4de",
      naver: "https://naver.me/GkR3XjYm"
    }
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로에게 행복을 주는 사람을 만났습니다.\n평생 서로 귀하게 여기며\n지금 마음 그대로 존중하고 배려하며 살겠습니다.\n저희 두 사람의 새로운 시작을 함께하시어\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "함께 있을 때 가장 나다운 모습이 되고\n미래를 꿈꾸게 하는 사람을 만나\n함께 맞는 3번째 여름, 결혼합니다."
  },

  // ── 오시는 길 ──
  // (mapLinks와 캘린더는 location 섹션 내에 포함)

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "전지승", bank: "카카오뱅크", number: "3333-02-1612027" },
      { role: "아버지", name: "전진용", bank: "신한은행", number: "110-493-174546" },
      { role: "어머니", name: "박명순", bank: "농협은행", number: "352-1056-1760-73" }
    ],
    bride: [
      { role: "신부", name: "김수진", bank: "우리은행", number: "1002-563-517453" },
      { role: "아버지", name: "김명섭", bank: "우리은행", number: "072-087846-12-201" },
      { role: "어머니", name: "이정원", bank: "우리은행", number: "747-185105-02-004" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "신랑 ♥ 신부 결혼합니다",
    description: "2026년 7월 18일, 소중한 분들을 초대합니다."
  }
};
