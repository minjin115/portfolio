const areas = [
  ['01', 'Video Editing', '컷 편집, 자막, 배경음악 구성'],
  ['02', 'Video Production', '촬영, 현장 제작 경험'],
  ['03', 'Content Planning', '콘텐츠 기획 및 협업'],
]

export default function About() {
  return (
    <section id="about" className="container section-space about" data-reveal>
      <p className="eyebrow">01 / ABOUT ME</p>
      <div className="about-intro">
        <h2>From Shooting<br /><em>to Editing.</em></h2>
        <div className="about-copy">
          <p>동아방송예술대학교 방송기술계열 제작전공에서 영상 제작 과정을 경험했습니다.</p>
          <p>학교 프로젝트에서는 촬영과 소품 관련 작업을 담당하며 현장 제작 과정을 익혔고, 학생회 활동을 통해 행사 및 프로젝트 기획과 협업 경험을 쌓았습니다.</p>
          <p>이후 쥬얼리 숏폼 콘텐츠를 직접 촬영하고 Premiere Pro를 활용해 컷 편집, 자막, 배경음악 작업을 진행했습니다.</p>
          <p>현재는 영상편집 역량을 발전시키기 위해 교육 과정을 수강하고 있으며, AI 영상 콘텐츠 제작에도 도전하고 있습니다.</p>
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
