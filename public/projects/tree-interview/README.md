# 나무의 구직 인터뷰 — 자료 등록

상세 경로: `/portfolio/#/work/tree-interview`
현재 실제 파일은 연결하지 않았습니다. 자료는 이 폴더에 추가한 뒤 `src/data/treeInterview.js`만 수정합니다.

| 위치 | 데이터 필드 | 권장 파일명 | 비율 / 권장 해상도 |
|---|---|---|---|
| 대표 썸네일 | `hero.src` | `hero.webp` | 16:9 / 2560×1440 |
| 이야기 장면 | `scenes[n].media.src` | `scene-01.webp` 등 | 원본 유지, 권장 16:9 / 1920×1080 |
| 스토리보드 | `storyboard[n].media.src` | `storyboard-01.webp` 등 | 원본 유지 / 가로 1600px 이상 권장 |
| 초기 생성 결과 | `comparisons[n].before.src` | `before-01.webp` 등 | 원본 유지, 권장 16:9 / 1920×1080 |
| 수정 생성 결과 | `comparisons[n].after.src` | `after-01.webp` 등 | 비교할 이미지와 동일 비율 권장 |
| 편집 작업 화면 | `editing.src` | `editing-timeline.webp` | 원본 유지 / 가로 1920px 이상 권장 |
| 최종 영상 | `film.src` | `final-film.mp4` | 16:9 / 1920×1080 |
| 영상 포스터 | `film.poster` | `final-film-poster.webp` | 16:9 / 1920×1080 |
| 한국어 자막 | `film.captions` | `final-film.ko.vtt` | WebVTT 텍스트 |

- 모든 파일명은 이 폴더 기준입니다. `src: 'hero.webp'`처럼 입력하며 `/public/`이나 `/portfolio/`를 붙이지 않습니다.
- 자료가 없으면 `src: null`을 유지합니다. 실제로 없는 파일명은 연결하지 않습니다. 이미지·영상 로딩 실패 시에도 플레이스홀더를 표시합니다.
- 이미지는 `{ src, alt, label, caption }` 형태입니다. `alt`는 실제 이미지 설명, `caption`은 화면에 표시할 설명입니다.
- `scenes`와 `storyboard` 배열의 개수와 순서가 화면의 개수와 순서입니다. 현재 1개씩 있는 슬롯은 실제 장면 수를 뜻하지 않습니다. 각 항목에 고유한 `id`를 사용합니다.
- 장면의 `title`, `description`, 스토리보드의 `title`, `description`도 같은 데이터 파일에서 수정합니다.
- 프롬프트는 `comparisons[n].promptBefore`, `promptAfter`에 문자열로 입력합니다. 비교 결과 설명은 `note`에 입력합니다. 새 비교 항목에는 고유한 `id`를 사용합니다.
- 제작 과정과 편집 작업 목록은 `productionSteps`, `postProduction`에서 수정합니다.
- 문제·수정 방법·결과는 `challenges`의 `problem`, `method`, `result`에서 관리합니다. 확인되지 않은 결과를 성공으로 기재하지 않습니다.
- 영상은 MP4(H.264, 음성이 있으면 AAC)를 권장합니다. 자동 재생하지 않으며 네이티브 재생·일시정지 컨트롤을 사용합니다.
- `film.transcript`는 파일 경로가 아닌 실제 영상 대본·화면 정보의 대체 설명 문자열입니다. 음성 및 의미 있는 사운드는 자막에도 반영합니다.
- `film.label`은 비디오의 접근성 이름입니다. 포스터만 준비되어도 `film.src`가 없으면 기존 플레이스홀더를 유지합니다.
- 스토리보드는 실제 이미지가 등록되면 확대 버튼이 활성화됩니다. Escape 또는 닫기 버튼으로 닫을 수 있습니다.
- 도구는 `overview`의 Tools 항목에서 수정합니다. 공모전명·기간·영상 길이·수상 내역은 확인 전 추가하지 않습니다.
- 메인 카드 썸네일은 `src/data/projects.js`에서 별도로 관리하며, 이번에는 이미지나 기존 디자인을 변경하지 않았습니다.

등록 후 `npm.cmd run dev`로 직접 접속·새로고침·복귀와 미디어 재생·자막을 확인하고 `npm.cmd run build`를 실행하세요.
