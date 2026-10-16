const areas = [
  ['01', 'UI/UX Design', '브랜드의 방향과 사용자 흐름을 고려한 화면 디자인'],
  ['02', 'Web Development', '반응형 퍼블리싱부터 React 기반 화면 구현까지'],
  ['03', 'AI Creative', 'AI 이미지·영상 제작과 편집, 웹 콘텐츠 활용'],
]

export default function About() {
  return (
    <section id="about" className="container section-space about" data-reveal>
      <p className="eyebrow">01 / ABOUT ME</p>
      <div className="about-intro">
        <h2>Design meets<br /><em>Development.</em></h2>
        <div className="about-copy">
          <p className="lead">보기 좋은 화면을 넘어,<br />사용하기 좋은 경험을 생각합니다.</p>
          <p>UI/UX 디자인부터 반응형 웹 퍼블리싱, React 기반 화면 구현까지 디자인과 개발의 과정을 연결합니다.</p>
          <p>온결 팀 프로젝트에서는 메인 홈페이지, 주문·결제 화면, 브랜드 소개 페이지 등 다양한 화면을 제작하며 사용자 흐름과 반응형 환경을 고려한 구현 경험을 쌓았습니다.</p>
          <p>또한 AI 이미지와 영상 콘텐츠를 제작하고 편집하며 웹디자인에 활용할 수 있는 새로운 표현 방식을 탐색하고 있습니다.</p>
        </div>
      </div>
      <div className="capabilities">
        {areas.map(([number, title, text]) => (
          <div key={number}>
            <span className="small-index">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
