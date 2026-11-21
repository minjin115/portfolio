// 배열 순서가 갤러리 순서입니다. 실제 영상 확인 후 항목을 추가합니다.
// { id, title, description, roles, src, poster, featured, captions, transcript }
// src/poster/captions: public/projects/jewelry-shorts/ 기준 상대 경로.
// featured: true인 첫 번째 영상을 HERO에도 표시합니다.
export const roles = ['Video Shooting', 'Cut Editing', 'Subtitle Editing', 'Background Music']
export const videos = [
  { id: 'ootd-zip', title: 'OOTD 모음 ZIP', description: '제품 클로즈업과 착용 장면을 교차 구성한 스타일링 중심 숏폼 콘텐츠', roles, src: 'ootd-zip.mp4', poster: 'ootd-zip.jpg', featured: true },
  { id: 'cubic-comparison', title: '아직도 큐빅하고 다니닝', description: '주얼리의 소재별 특징을 비교하며 정보를 전달하는 숏폼 콘텐츠', roles, src: 'cubic-comparison.mp4', poster: 'cubic-comparison.jpg', featured: false },
  { id: 'diamond-set', title: '다이아 세트로 하면 3배 더 예뻐', description: '목걸이와 귀걸이의 세트 착용을 강조한 제품 프로모션 영상', roles, src: 'diamond-set.mp4', poster: 'diamond-set.jpg', featured: false },
  { id: 'moissanite', title: '모이사나이트', description: '제품의 특징과 착용 모습을 다양한 구도로 소개하는 숏폼 광고', roles, src: 'moissanite.mp4', poster: 'moissanite.jpg', featured: false },
  { id: 'travel-jewelry', title: '여행템', description: '여행과 여름 스타일링 상황에 맞춰 주얼리의 활용도를 강조한 콘텐츠', roles, src: 'travel-jewelry.mp4', poster: 'travel-jewelry.jpg', featured: false },
]

export const jewelryAssetUrl = path => path ? `${import.meta.env.BASE_URL}projects/jewelry-shorts/${path}` : undefined

export const productionSteps = [
  ['Shooting', '제품 디테일과 실제 착용 모습을 보여주는 세로형 숏폼 영상을 촬영했습니다.'],
  ['Cut Editing', 'Adobe Premiere Pro를 활용해 촬영한 장면을 연결하고 약 20~30초 분량의 숏폼 콘텐츠로 편집했습니다.'],
  ['Subtitle', '제품 특징과 영상 내용을 전달하기 위한 자막을 삽입했습니다.'],
  ['Background Music', '콘텐츠의 분위기를 고려해 배경음악을 삽입했습니다.'],
]

// 완성 영상으로 확인할 수 있는 편집 작업만 설명합니다.
export const editingDetails = [
  { id: 'cut', title: 'Cut Editing', text: '촬영한 제품 디테일과 착용 장면을 연결해 짧은 영상으로 구성했습니다.' },
  { id: 'subtitle', title: 'Subtitle', text: '제품 특징과 영상 내용을 전달하는 자막을 삽입했습니다. 아래 실제 프레임에서 자막을 확인할 수 있습니다.' },
  { id: 'music', title: 'Background Music', text: '콘텐츠의 분위기를 고려해 배경음악을 삽입했습니다. 음악은 위 Selected Videos의 완성 영상에서 확인할 수 있습니다.' },
]

// timeline.src에 실제 캡처의 상대 경로를 입력하면 이미지가 표시됩니다.
// 파일 위치: public/projects/jewelry-shorts/. 등록 전에는 짧은 안내만 표시합니다.
export const editingCases = [
  {
    id: 'ootd-zip', title: 'OOTD 모음 ZIP',
    text: '제품 클로즈업과 착용 장면을 교차 구성한 스타일링 중심 사례입니다. 아래는 완성 영상의 서로 다른 시점에서 추출한 프레임입니다.',
    frames: [
      { label: '완성 영상 · 00:03', src: 'ootd-zip-frame-3.jpg', alt: 'OOTD 모음 ZIP 영상 3초 지점의 실제 장면과 자막' },
      { label: '완성 영상 · 00:14', src: 'ootd-zip-frame-14.jpg', alt: 'OOTD 모음 ZIP 영상 14초 지점의 주얼리 제품 클로즈업과 자막' },
    ],
    timeline: { label: 'OOTD 모음 ZIP · Premiere Pro 타임라인', src: null, alt: '' },
  },
  {
    id: 'cubic-comparison', title: '아직도 큐빅하고 다니닝',
    text: '주얼리의 소재별 특징을 비교하며 정보를 전달하는 사례입니다. 제품 장면과 설명 자막을 완성 영상의 실제 프레임으로 소개합니다.',
    frames: [
      { label: '완성 영상 · 00:07', src: 'cubic-comparison-frame-7.jpg', alt: '아직도 큐빅하고 다니닝 영상 7초 지점의 제품과 소재 설명 자막' },
      { label: '완성 영상 · 00:21', src: 'cubic-comparison-frame-21.jpg', alt: '아직도 큐빅하고 다니닝 영상 21초 지점의 주얼리와 설명 자막' },
    ],
    timeline: { label: '아직도 큐빅하고 다니닝 · Premiere Pro 타임라인', src: null, alt: '' },
  },
]
