// public/projects/ongyeol/에 실제 자료를 넣고 아래 파일명을 지정합니다.
// 예: hero: { src: 'hero.webp', alt: '온결 메인 홈페이지 데스크톱 화면' }
// 모든 src, poster, captions 경로는 해당 폴더 기준입니다. 없으면 null을 유지합니다.
// 전체 슬롯별 권장 파일명·해상도: public/projects/ongyeol/README.md
// 파일을 실제로 추가한 뒤 연결하세요. 존재하지 않는 경로의 자동 복구는 없습니다.
// process[0..5]: 리서치 / 사용자 흐름 / 와이어프레임 / UI / 반응형 / 개발
// visuals[0..5]: 메인 / 제품 상세 / 브랜드 소개 / 스킨가이드 / 이벤트 / 주문·결제
// aiImages[0..2]: 원료 / 제품·제형 / 영상 스틸
// video.transcript는 파일 경로가 아닌 대체 설명 문자열입니다.
export const assetUrl = file => file ? `${import.meta.env.BASE_URL}projects/ongyeol/${file}` : undefined
const image = (label, alt = label) => ({ label, alt, src: null })
export const ongyeol = {
  hero: image('Project cover', 'ONGYEOL 프로젝트 대표 이미지'),
  brand: image('Brand mood & identity', '온결 브랜드 콘셉트 이미지'),
  roles: [
    ['01', 'Homepage', '메인 홈페이지 UI 및 반응형 구현'],
    ['02', 'Event & Promotion', '이벤트 및 세일 페이지 작업'],
    ['03', 'Checkout & Payment', '주문서, 결제, 주문 완료 화면 구현'],
    ['04', 'Brand Introduction', '브랜드 소개 페이지 반응형 및 영상 콘텐츠 적용'],
    ['05', 'Skin Guide', '스킨가이드 화면과 인터랙션 수정'],
    ['06', 'Product Design', '오디 제품 라인 상세페이지 디자인'],
    ['07', 'AI Contents', 'AI 이미지 및 브랜드 영상 콘텐츠 제작·편집'],
    ['08', 'Collaboration', '공통 페이지 연결 및 Git 협업'],
  ],
  process: [
    { title: 'Research & Planning', text: '자연과 과학을 연결하는 브랜드 방향과 웹사이트 기획을 소개할 공간입니다.', media: image('Research & planning') },
    { title: 'Sitemap & User Flow', text: '사이트 구조와 주요 사용자 흐름 자료를 배치할 공간입니다.', media: image('Sitemap & user flow') },
    { title: 'Wireframe', text: '화면의 정보 위계와 배치를 살펴볼 와이어프레임 자료를 연결합니다.', media: image('Wireframe') },
    { title: 'UI Design', text: '브랜드 콘셉트가 반영된 UI 디자인 자료를 연결합니다.', media: image('UI design') },
    { title: 'Responsive Design', text: '화면 너비에 따른 레이아웃과 주요 요소의 변화를 보여줍니다.', media: image('Responsive design') },
    { title: 'Development', text: 'React 기반 구현 과정과 디자인을 화면으로 연결한 자료를 배치합니다.', media: image('Development') },
  ],
  visuals: ['Main Homepage', 'Product Detail Page', 'Brand Introduction', 'Skin Guide', 'Event & Promotion', 'Checkout & Payment'].map(title => ({
    title,
    desktop: image(`${title} / Desktop`),
    tablet: image(`${title} / Tablet`),
    mobile: image(`${title} / Mobile`),
  })),
  development: [
    ['Responsive Web', '데스크톱·태블릿·모바일에 대응하는 반응형 웹 구현'],
    ['Form Validation', '결제 페이지 입력값 검증'],
    ['Quantity & Total', '수량 변경에 따른 가격 합계 계산'],
    ['Shipping Rules', '배송비 조건 처리'],
    ['Order Flow', '주문서 → 결제 → 주문 완료 화면 흐름'],
    ['Mobile Navigation', '모바일 햄버거 메뉴'],
    ['Motion & Interaction', '스크롤 애니메이션 및 Hover 효과'],
    ['Media Integration', '브랜드 영상 및 콘텐츠 연결'],
  ],
  video: { src: null, poster: null, captions: null, transcript: null, label: '브랜드 대표 영상', alt: '온결 브랜드 영상 포스터' },
  aiImages: [image('브랜드 원료 이미지'), image('제품 이미지 및 제형 이미지'), image('웹사이트 활용 영상 스틸')],
  outcomes: [
    ['Connecting the process', '브랜드 기획부터 웹 구현까지 이어지는 제작 과정을 경험했습니다.'],
    ['Design & development', '디자인과 개발의 과정을 함께 이해하고 구현을 고려하며 작업했습니다.'],
    ['Responsive thinking', '여러 화면 크기에 대응하는 UI 구현 경험을 쌓았습니다.'],
    ['Working together', '팀 프로젝트에서 공통 페이지를 연결하고 Git을 활용해 협업했습니다.'],
    ['AI in context', 'AI로 제작·편집한 콘텐츠를 웹사이트의 브랜드 표현에 활용했습니다.'],
  ],
}
