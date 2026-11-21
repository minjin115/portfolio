// 확인된 작업만 등록합니다. 교육 결과물과 향후 팀 프로젝트는 완성 후 같은 필드로 추가합니다.
// image는 실제 자료 확인 후 BASE_URL을 반영한 경로로 지정합니다.
export const projects = [
 {id:'jewelry-shorts',href:'#/work/jewelry-shorts',number:'01',title:'Jewelry Short-form Contents',subtitle:'주얼리 숏폼 콘텐츠 제작 · Shooting & Editing',description:'주얼리 숏폼 제작 아르바이트 · 약 20~30초 영상 촬영, 컷 편집, 자막 및 배경음악 삽입',category:'JEWELRY SHORT-FORM',status:'대표 영상 5편',year:null,technologies:['Adobe Premiere Pro'],image:`${import.meta.env.BASE_URL}projects/jewelry-shorts/ootd-zip.jpg`,imageWidth:1080,imageHeight:1920,imageLayout:'portrait',imageAlt:'OOTD 모음 ZIP 실제 영상 포스터 — 주얼리 목걸이 클로즈업과 영상 제목',placeholder:'Jewelry shorts',tone:'film'},
 {id:'ai-film',href:'#/work/tree-interview',number:'02',title:'나무의 구직 인터뷰',subtitle:'AI Short Film · Planning & Editing',description:'AI 영상 공모전 제출 완료 · 포트폴리오용 최종 수정본 준비 중',category:'AI SHORT FILM',status:'포트폴리오용 수정 진행 중',year:null,technologies:[],image:null,imageAlt:'나무의 구직 인터뷰 실제 영상 스틸',placeholder:'Film still',tone:'film'},
 {id:'ongyeol',href:'#/work/ongyeol',number:'03',title:'ONGYEOL',subtitle:'Brand Film & Team Project',description:'브랜드 영상 및 AI 콘텐츠 제작을 진행 중인 팀 프로젝트',category:'BRAND FILM',status:'팀 프로젝트 진행 중',year:null,technologies:[],image:null,imageAlt:'ONGYEOL 실제 프로젝트 이미지',placeholder:'Brand film · In progress',tone:'film'},
]
