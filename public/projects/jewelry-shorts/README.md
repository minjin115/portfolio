# 주얼리 숏폼 자료 등록

웹용 H.264 MP4 5개와 각 영상 1초 지점에서 추출한 JPG 포스터가 등록되어 있습니다. 원본은 이 폴더에 넣지 않습니다.

등록 순서: `ootd-zip`, `cubic-comparison`, `diamond-set`, `moissanite`, `travel-jewelry`.
각 파일은 같은 이름의 `.mp4`와 `.jpg`로 구성됩니다. 영상은 1080×1920, 30fps이며, AAC 오디오 및 빠른 재생 시작을 위한 faststart를 적용했습니다. 색감 조정 필터는 사용하지 않았습니다.

`src/data/jewelryShorts.js`의 `videos` 배열에 아래 형태의 항목을 추가합니다. 아래 파일명은 설명용이며 실제 파일을 등록한 뒤에만 사용하세요.

```js
{
  id: 'unique-video-id',
  title: '실제 영상 제목',
  description: '영상 한 줄 소개',
  roles: ['Video Shooting', 'Cut Editing', 'Subtitle Editing', 'Background Music'],
  src: 'actual-video.mp4',
  poster: 'actual-cover.webp', // 선택 사항
  featured: true, // 첫 번째 true 항목이 대표 영상
  captions: 'actual-captions.vtt', // 선택 사항
  transcript: '실제 영상 내용에 대한 대체 설명', // 선택 사항
}
```

배열 순서로 정렬하며, 항목 삭제로 갤러리에서 제거합니다. 대표 영상은 갤러리에도 표시됩니다. 모든 영상은 클릭 재생이며 다른 영상 재생 시 기존 영상은 일시정지됩니다. 커버가 없으면 poster 필드를 생략합니다. 음성·자막이 있는 영상은 접근성을 위해 자막 파일과 대체 설명도 함께 준비하세요.

`editingDetails`의 각 `media` 항목에는 실제 이미지 상대 경로를 `src`, 이미지 설명을 `alt`에 입력합니다. `src: null`인 항목은 플레이스홀더로 남습니다. 경로는 GitHub Pages의 `/portfolio/` 기본 경로를 자동 반영합니다.
