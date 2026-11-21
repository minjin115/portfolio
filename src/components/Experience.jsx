const groups = [
  { id: 'work-experience', title: '근무 경험 · 아르바이트', entries: [
    {"title":"쥬얼리 숏폼 제작 아르바이트","description":"20~30초 영상 촬영 및 편집","detail":"Adobe Premiere Pro를 사용해 컷 편집, 자막, 음악 삽입 작업을 진행했습니다."},
  ] },
  { id: 'project-experience', title: '프로젝트 활동', entries: [
    {"title":"ONGYEOL","ongoing":true,"description":"브랜드 영상 및 AI 콘텐츠 제작을 진행 중인 팀 프로젝트입니다.","detail":"웹사이트 디자인과 React 구현에도 참여하고 있습니다."},
    {"title":"나무의 구직 인터뷰","description":"AI 영상 공모전 출품작입니다."},
  ] },
  { id: 'school-experience', title: '교내 활동 · 전공 경험', entries: [
    {"title":"동아방송예술대학교","description":"방송기술계열 제작전공","detail":"학교 프로젝트에서 영상 촬영 및 소품 관련 제작을 경험했습니다."},
    {"title":"학생회 활동","description":"행사 및 프로젝트 기획과 협업 경험","detail":"총무 및 대의원 경험을 쌓았습니다."},
  ] },
]
export default function Experience() {
  return <section className="experience container section-space" aria-labelledby="experience-title" data-reveal>
    <div><p className="eyebrow">04 / EXPERIENCE</p><h2 id="experience-title">Journey &<br /><em>Experience.</em></h2></div>
    <div className="experience-groups">{groups.map(group => <section className="experience-group" key={group.id} aria-labelledby={group.id}>
      <h3 id={group.id} className="experience-group-title">{group.title}</h3>
      <ul className="experience-list">{group.entries.map(entry => <li className="experience-entry" key={entry.title}>
        <span className="experience-marker" aria-hidden="true" /><h4>{entry.title}</h4>
        {entry.ongoing && <span className="status-label">진행 중</span>}
        <p>{entry.description}</p>{entry.detail && <p>{entry.detail}</p>}
      </li>)}</ul>
    </section>)}</div>
  </section>
}
