const groups = [
  {
    number: '01', title: 'Design',
    text: '브랜드 웹사이트 화면 디자인 및 사용자 흐름 설계',
    items: ['Figma', 'UI/UX Design'],
  },
  {
    number: '02', title: 'Development',
    text: '반응형 퍼블리싱, 인터랙션, 화면 전환 및 상태 관리',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite', 'Git', 'GitHub'],
  },
  {
    number: '03', title: 'AI Creative',
    text: '프롬프트 설계부터 AI 이미지·영상 제작, 편집 및 웹 콘텐츠 활용',
    items: ['AI 이미지 제작', 'AI 영상 제작', '프롬프트 설계', '영상 편집 및 웹 콘텐츠 활용'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container section-space" data-reveal>
      <div className="section-heading">
        <div><p className="eyebrow">03 / SKILLS & TOOLS</p><h2>A thoughtful<br /><em>toolkit.</em></h2></div>
        <p className="section-note">생각을 구체화하고, 화면을 만들고,<br />새로운 가능성을 탐색하는 도구들.</p>
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
