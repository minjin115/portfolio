// 모든 미디어 경로는 public/projects/tree-interview/ 기준입니다.
// 실제 파일 등록 전 src는 null로 유지합니다. 예: src: 'hero.webp'
export const treeAssetUrl = file => file ? `${import.meta.env.BASE_URL}projects/tree-interview/${file}` : undefined
const image = (label) => ({ src: null, alt: label, label, caption: '실제 작업 자료 등록 예정' })
export const treeInterview = {
  title: '나무의 구직 인터뷰',
  englishTitle: "The Tree's Job Interview",
  hero: image('Film cover / 영상 대표 썸네일'),
  overview: [
    ['Project', '나무의 구직 인터뷰'], ['Category', 'AI Short Film'],
    ['Type', 'AI 영상 공모전 출품작'],
    ['Role', 'Planning, AI Prompt Design, Video Production, Editing'],
    ['Tools', '실제 사용 도구 확인 후 입력'], ['Year', '2026'],
  ],
  concept: [
    { title: 'The idea', text: '나무를 주인공으로 설정한 구직 인터뷰라는 아이디어를 바탕으로 한 AI 영상 프로젝트입니다.' },
    { title: 'Intention & message', text: '기획 의도와 작품의 핵심 메시지를 실제 기획안에 맞춰 작성할 공간입니다.' },
    { title: 'Visual language', text: '장면 구성, 분위기, 주요 표현 방식은 실제 제작 자료를 기준으로 추가할 예정입니다.' },
  ],
  // 배열의 항목 수와 순서가 화면의 장면 수와 순서입니다. 아래는 편집용 슬롯이며 실제 장면을 뜻하지 않습니다.
  scenes: [{ id: 'scene-slot-01', title: '장면 등록 예정', description: '실제 영상의 장면과 전개 순서를 등록해 주세요.', media: image('주요 장면 이미지') }],
  storyboard: [{ id: 'board-slot-01', title: '스토리보드 등록 예정', description: '실제 장면 번호와 설명을 등록해 주세요.', media: image('스토리보드 이미지') }],
  productionSteps: ['아이디어 구체화', '장면별 프롬프트 작성', 'AI 영상 생성', '결과 확인 및 수정', '장면 간 일관성 개선'],
  comparisons: [{
    id: 'prompt-slot-01', title: 'Prompt to frame',
    promptBefore: null, promptAfter: null,
    before: image('Before / 초기 생성 결과'), after: image('After / 수정 후 생성 결과'),
    note: '실제 프롬프트와 생성 결과를 등록하면 수정 전후를 비교할 수 있습니다. 현재는 자료 등록 전입니다.',
  }],
  postProduction: ['생성한 장면 연결', '장면별 타이밍 및 전환 조정', '자막 작업', '사운드 및 배경음악 편집', '최종 영상 완성'],
  editing: image('편집 타임라인 / 작업 화면'),
  challenges: [
    { id: 'anthropomorphism', problem: '원하지 않은 눈·입 등 의인화 요소 생성', method: '실제 프롬프트 변경 내용과 재생성 과정을 등록할 예정입니다.', result: '수정 전후 결과 확인 후 작성' },
    { id: 'consistency', problem: '장면 간 캐릭터 외형의 일관성', method: '외형 조건과 장면별 프롬프트 조정 내용을 실제 자료로 정리할 예정입니다.', result: '수정 전후 결과 확인 후 작성' },
  ],
  film: { src: null, poster: null, captions: null, transcript: null, label: '나무의 구직 인터뷰 완성 영상', placeholder: 'Final film / 완성 영상 등록 예정' },
  reflection: [
    { title: 'Specific prompts', text: '대상과 표현 조건을 구체적으로 설명하는 프롬프트의 중요성을 돌아보고, 실제 수정 사례를 추가할 예정입니다.' },
    { title: 'Consistent scenes', text: '장면 간 캐릭터와 분위기의 일관성을 살펴보고, 다음 제작에서 유지할 기준을 정리할 공간입니다.' },
    { title: 'Iteration matters', text: '생성 결과를 확인하고 반복 수정하는 과정을 기록하며, 실제 결과를 바탕으로 향후 개선 방향을 정리할 예정입니다.' },
  ],
}
