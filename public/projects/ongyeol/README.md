# ONGYEOL 미디어 등록 가이드

현재 이 폴더에는 안내 문서만 있습니다. 실제 이미지·영상은 연결하지 않았으며, 모든 미디어 경로는 `null` 상태입니다.
아래 파일명은 등록을 위한 권장 이름입니다. 파일명이 같아도 자동으로 연결되지 않으며 실제 파일을 추가한 뒤 `src/data/ongyeol.js`의 해당 필드를 변경합니다.

## 등록 위치와 파일 규격

해상도는 가로×세로 픽셀 기준 권장값이며 강제 규격이 아닙니다. 현재 실제 이미지는 `width:100%; height:auto`로 원본 비율을 유지합니다.
플레이스홀더 비율과 실제 화면 캡처 비율이 달라도 이미지를 자르거나 왜곡할 필요는 없습니다. 긴 페이지 캡처는 원본 비율을 유지하고 읽을 수 있는 해상도로 저장합니다.

| 섹션 / 자료 | 데이터 필드 | 권장 파일명 | 권장 비율 | 권장 해상도 |
|---|---|---|---|---|
| 01 대표 이미지 | `hero.src` | `hero.webp` | 21:9 | 2520×1080 |
| 03 브랜드 이미지 | `brand.src` | `brand-concept.webp` | 16:10 | 1920×1200 |
| 05 리서치·기획 | `process[0].media.src` | `process-01-research.webp` | 16:10 | 1600×1000 |
| 05 사이트맵·사용자 흐름 | `process[1].media.src` | `process-02-user-flow.webp` | 16:10 | 1600×1000 |
| 05 와이어프레임 | `process[2].media.src` | `process-03-wireframe.webp` | 16:10 | 1600×1000 |
| 05 UI 디자인 | `process[3].media.src` | `process-04-ui-design.webp` | 16:10 | 1600×1000 |
| 05 반응형 디자인 | `process[4].media.src` | `process-05-responsive.webp` | 16:10 | 1600×1000 |
| 05 개발 과정 | `process[5].media.src` | `process-06-development.webp` | 16:10 | 1600×1000 |
| 06 메인 / 데스크톱 | `visuals[0].desktop.src` | `main-desktop.webp` | 16:10 또는 원본 | 2560×1600 |
| 06 메인 / 태블릿 | `visuals[0].tablet.src` | `main-tablet.webp` | 4:5 또는 원본 | 1200×1500 |
| 06 메인 / 모바일 | `visuals[0].mobile.src` | `main-mobile.webp` | 9:16 또는 원본 | 900×1600 |
| 06 제품 상세 / 데스크톱 | `visuals[1].desktop.src` | `product-detail-desktop.webp` | 16:10 또는 원본 | 2560×1600 |
| 06 제품 상세 / 태블릿 | `visuals[1].tablet.src` | `product-detail-tablet.webp` | 4:5 또는 원본 | 1200×1500 |
| 06 제품 상세 / 모바일 | `visuals[1].mobile.src` | `product-detail-mobile.webp` | 9:16 또는 원본 | 900×1600 |
| 06 브랜드 소개 / 데스크톱 | `visuals[2].desktop.src` | `brand-intro-desktop.webp` | 16:10 또는 원본 | 2560×1600 |
| 06 브랜드 소개 / 태블릿 | `visuals[2].tablet.src` | `brand-intro-tablet.webp` | 4:5 또는 원본 | 1200×1500 |
| 06 브랜드 소개 / 모바일 | `visuals[2].mobile.src` | `brand-intro-mobile.webp` | 9:16 또는 원본 | 900×1600 |
| 06 스킨가이드 / 데스크톱 | `visuals[3].desktop.src` | `skin-guide-desktop.webp` | 16:10 또는 원본 | 2560×1600 |
| 06 스킨가이드 / 태블릿 | `visuals[3].tablet.src` | `skin-guide-tablet.webp` | 4:5 또는 원본 | 1200×1500 |
| 06 스킨가이드 / 모바일 | `visuals[3].mobile.src` | `skin-guide-mobile.webp` | 9:16 또는 원본 | 900×1600 |
| 06 이벤트 / 데스크톱 | `visuals[4].desktop.src` | `event-desktop.webp` | 16:10 또는 원본 | 2560×1600 |
| 06 이벤트 / 태블릿 | `visuals[4].tablet.src` | `event-tablet.webp` | 4:5 또는 원본 | 1200×1500 |
| 06 이벤트 / 모바일 | `visuals[4].mobile.src` | `event-mobile.webp` | 9:16 또는 원본 | 900×1600 |
| 06 주문·결제 / 데스크톱 | `visuals[5].desktop.src` | `checkout-desktop.webp` | 16:10 또는 원본 | 2560×1600 |
| 06 주문·결제 / 태블릿 | `visuals[5].tablet.src` | `checkout-tablet.webp` | 4:5 또는 원본 | 1200×1500 |
| 06 주문·결제 / 모바일 | `visuals[5].mobile.src` | `checkout-mobile.webp` | 9:16 또는 원본 | 900×1600 |
| 08 브랜드 영상 | `video.src` | `brand-film.mp4` | 16:9 | 1920×1080 |
| 08 영상 포스터 | `video.poster` | `brand-film-poster.webp` | 영상과 동일 | 1920×1080 |
| 08 한국어 자막 | `video.captions` | `brand-film.ko.vtt` | 해당 없음 | WebVTT 텍스트 |
| 08 원료 이미지 | `aiImages[0].src` | `ai-ingredients.webp` | 1:1 | 1200×1200 |
| 08 제품·제형 이미지 | `aiImages[1].src` | `ai-product-texture.webp` | 1:1 | 1200×1200 |
| 08 웹사이트 영상 스틸 | `aiImages[2].src` | `ai-web-film-still.webp` | 1:1 또는 원본 16:9 | 1200×1200 또는 1600×900 |

이미지 29개, 영상 포스터 1개, 영상 1개, 자막 파일 1개를 등록할 수 있습니다. 전부 한 번에 준비할 필요는 없습니다.
02 Overview, 04 My Role, 07 Development, 09 Outcome에는 현재 별도의 미디어 슬롯이 없습니다.
브랜드 컬러는 CSS 색상으로 표시하므로 별도 이미지가 필요하지 않습니다.
08 AI Contents의 영상 슬롯은 1개입니다. 여러 영상을 개별 등록하는 구조는 이번 작업에서 추가하지 않았습니다.

## 데이터 구조 점검 결과

- 이미지: `{ label, alt, src }`. `label`은 플레이스홀더 제목, `alt`는 실제 이미지의 대체 텍스트입니다.
- 영상: `{ src, poster, captions, transcript, label, alt }`.
- `video.transcript`는 파일 경로가 아니라 영상 설명·대본 문자열입니다.
- `video.label`은 비디오의 접근성 이름입니다. 현재 `video.alt`는 화면 렌더링에 사용되지 않습니다. 포스터 설명이 필요하면 `label` 및 `transcript`에 실제 내용으로 반영합니다.
- `process`는 0~5, `visuals`는 0~5, `aiImages`는 0~2 배열입니다. 필드 위치를 위 표와 대조해 수정하며, 순서를 바꾸면 표도 업데이트합니다.
- `assetUrl()`이 GitHub Pages의 `/portfolio/` 기본 경로를 자동 적용합니다.
- 경로는 이 폴더 기준 상대 파일명입니다. `/public/`, `/portfolio/` 접두사나 외부 URL을 넣지 않습니다. 대소문자와 확장자가 실제 파일과 같아야 합니다.
- `src: null`이면 현재 플레이스홀더를 유지합니다. `poster`만 등록해도 `video.src`가 없으면 영상 플레이스홀더가 유지됩니다.
- 현재 구조는 존재하지 않는 경로를 지정하면 자동 플레이스홀더로 복구하지 않습니다. 실제 파일을 먼저 추가한 뒤 연결합니다.
- 메인 Selected Works 썸네일은 `src/data/projects.js`의 별도 `image` 필드입니다. 상세페이지 대표 이미지를 변경해도 자동으로 바뀌지 않습니다. 이번에는 변경하지 않았습니다.

## 등록 예시 — 실제 파일 준비 후 적용

아래는 문서 예시이며 현재 코드에는 연결하지 않았습니다.

```js
// public/projects/ongyeol/hero.webp를 실제로 추가한 다음:
hero: {
  label: 'Project cover',
  alt: '실제 대표 이미지에 맞는 구체적인 설명',
  src: 'hero.webp',
}

// 영상과 자막이 준비되면 해당 필드에만 경로를 입력합니다.
video: {
  src: 'brand-film.mp4',
  poster: 'brand-film-poster.webp',
  captions: 'brand-film.ko.vtt',
  transcript: '실제 영상의 화면 내용과 음성 정보를 설명하는 텍스트',
  label: '온결 브랜드 대표 영상',
  alt: '온결 브랜드 영상 포스터',
}
```

실제 자료가 없는 필드는 계속 `null`로 둡니다. 영상에는 네이티브 재생 컨트롤이 있으며 자동 재생하지 않습니다.
WebP를 기본 권장하되 PNG·JPEG도 실제 확장자로 연결할 수 있습니다. 영상은 호환성을 고려해 MP4(H.264, 음성이 있으면 AAC)로 준비할 수 있습니다.
영상 포스터·스틸은 원본 영상에서 추출하고, 임의 생성 이미지로 대체하지 않습니다.

## 등록 후 확인 순서

1. 실제 파일을 이 폴더에 추가합니다.
2. 해당 데이터 필드와 이미지 `alt`, 필요 시 영상 자막·설명을 수정합니다.
3. `npm.cmd run dev`로 상세페이지를 열어 이미지, 디바이스 화면, 영상 수동 재생과 자막을 확인합니다.
4. 개발자 도구 Network에서 미디어 404가 없는지 확인합니다.
5. `npm.cmd run build` 후 GitHub Pages에서도 경로와 파일명 대소문자를 확인합니다.

이번 준비 작업은 이 문서와 데이터 파일의 안내 주석만 수정했습니다. 화면, 스타일, 섹션, 라우팅 및 실제 경로 값은 변경하지 않았습니다.
