const experiences = [
  {
    id: 'ongyeol', title: 'ONGYEOL — Skincare Brand Website', type: 'Team Project', year: '2026', ongoing: true,
    description: '브랜드 웹사이트 UI/UX 디자인 및 React 기반 반응형 웹 구현 프로젝트를 진행하고 있습니다.',
    detail: '메인 홈페이지, 주문·결제 화면, 브랜드 소개 페이지 등 담당 영역을 제작하고 AI 이미지·영상 콘텐츠 제작과 Git 협업에 참여하고 있습니다.',
  },
  {
    id: 'tree-interview', title: '나무의 구직 인터뷰 — AI Short Film', type: 'Individual Project', year: '2026', ongoing: false,
    description: 'AI 영상 공모전 출품작으로 기획, 장면별 프롬프트 설계, AI 영상 생성 및 편집을 진행했습니다.',
  },
]

export default function Experience() {
  return (
    <section className="experience container section-space" aria-labelledby="experience-title" data-reveal>
      <div><p className="eyebrow">04 / EXPERIENCE</p><h2 id="experience-title">Journey &<br /><em>Experience.</em></h2></div>
      <ol className="experience-list">
        {experiences.map(experience => (
          <li className="experience-entry" key={experience.id}>
            <span className="experience-marker" aria-hidden="true" />
            <p className="eyebrow">{experience.type} · <time dateTime={experience.year}>{experience.year}</time></p>
            <h3>{experience.title}</h3>
            {experience.ongoing && <span className="status-label">진행 중</span>}
            <p>{experience.description}</p>
            {experience.detail && <p>{experience.detail}</p>}
          </li>
        ))}
      </ol>
    </section>
  )
}
