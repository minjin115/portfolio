import { useEffect, useState } from 'react'
const links = [['about', 'About'], ['work', 'Work'], ['skills', 'Skills'], ['contact', 'Contact']]
export default function Header() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const key = e => { if (e.key === 'Escape' && open) { setOpen(false); document.getElementById('menu-toggle').focus() } }
    const outside = e => { if (!e.target.closest('.site-header')) setOpen(false) }
    const media = matchMedia('(min-width: 769px)')
    const resize = () => { if (media.matches) setOpen(false) }
    document.addEventListener('keydown', key)
    document.addEventListener('pointerdown', outside)
    media.addEventListener('change', resize)
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('pointerdown', outside); media.removeEventListener('change', resize) }
  }, [open])
  return <header className="site-header"><div className="container header-inner"><a className="logo" href="#home" onClick={() => setOpen(false)}>MINJIN.</a><button id="menu-toggle" type="button" className={`menu-toggle ${open ? 'is-open' : ''}`} aria-expanded={open} aria-controls="navigation" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setOpen(!open)}><span /><span /></button><nav id="navigation" className={`navigation ${open ? 'is-open' : ''}`} aria-label="주요 메뉴">{links.map(([id,label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}<span aria-hidden="true">↗</span></a>)}</nav></div></header>
}
