const groups = [
  {
    number: '01', title: 'Video Editing',
    text: '장면의 흐름과 리듬을 고려한 영상 편집',
    items: ['Adobe Premiere Pro', '컷 편집', '자막', '배경음악 편집'],
  },
  {
    number: '02', title: 'Video Production',
    text: '촬영부터 현장 제작, 콘텐츠 기획과 협업까지',
    items: ['카메라 촬영', '영상 제작 현장 경험', '콘텐츠 기획'],
  },
  {
    number: '03', title: 'Creative & Technical',
    text: '콘텐츠 표현의 폭을 넓히는 AI 제작 경험과 보조 역량인 웹디자인·개발',
    items: ['AI 이미지·영상 제작 경험', 'Figma', 'HTML / CSS / JavaScript / React', 'Git / GitHub'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container section-space" data-reveal>
      <div className="section-heading">
        <div><p className="eyebrow">03 / SKILLS & TOOLS</p><h2>A thoughtful<br /><em>toolkit.</em></h2></div>
        <p className="section-note">촬영과 편집으로 이야기를 구성하고,<br />콘텐츠의 표현을 넓히는 도구들.</p>
      </div>
      <div className="skill-groups">
        {groups.map(group => (
          <div className="skill-group" key={group.number}>
            <span className="small-index">{group.number}</span>
            <h3>{group.title}</h3>
            <p>{group.text}</p>
            <ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}
