# MINJIN. — Soft Blue, Bold Ideas.

React와 Vite로 만든 UI/UX 디자인·웹 퍼블리싱·프론트엔드·AI 콘텐츠 포트폴리오입니다.

## 실행 방법

```bash
npm install
npm run dev
```

개발 서버는 `npm run dev`, 프로덕션 빌드는 `npm run build`, 빌드 미리보기는 `npm run preview`로 실행합니다. PowerShell 실행 정책에 걸리면 `npm.cmd`를 사용합니다.

화면 조합은 `src/App.jsx`, 섹션은 `src/components/`, 스타일은 `src/App.css`와 `src/index.css`에서 관리합니다.

## 실제 콘텐츠 업데이트

- `src/data/projects.js`의 `image`, `imageAlt`, `year`, `technologies`를 실제 작업 자료로 교체합니다.
- 이미지는 `public/`에 넣고 `${import.meta.env.BASE_URL}파일명.webp` 형식으로 연결하면 GitHub Pages 하위 경로를 유지할 수 있습니다.
- 현재 이미지는 명시적인 플레이스홀더입니다. 프로젝트 연도와 사용 도구는 미등록 상태이며 상세 페이지는 구현하지 않았습니다.
- `Experience.jsx`는 확인된 교육·활동 이력과 기간으로 업데이트합니다.
- AI 제작 도구는 확인 후 `Skills.jsx`에 추가합니다.
- Inter와 Pretendard는 외부 폰트 CDN을 사용하며 로딩 실패 시 시스템 sans-serif로 표시됩니다.

기존 `/portfolio/` 기본 경로와 GitHub Actions 배포 설정을 유지합니다.

## ONGYEOL 상세페이지

- 경로: `/portfolio/#/work/ongyeol`. 해시 기반 화면 분기로 GitHub Pages의 별도 서버 라우팅 없이 직접 접속·새로고침을 지원합니다.
- Selected Works의 ONGYEOL 카드 전체가 상세 링크입니다. `Back to Works`는 `#work`로 복귀하며 브라우저 기본 방문 기록을 사용합니다.
- 페이지: `src/pages/Ongyeol.jsx`, 전용 스타일: `src/pages/Ongyeol.css`.
- 콘텐츠와 미디어 경로: `src/data/ongyeol.js`.
- 실제 파일 위치와 교체 안내: `public/projects/ongyeol/README.md`.
- 브랜드 팔레트는 상세페이지 표현용이며, 원본 색상 확인 후 교체합니다. 제작 기간·인원·기여율은 미확인 정보로 기재하지 않았습니다.
