import { useEffect, useRef, useState } from 'preact/hooks'

const base = import.meta.env.BASE_URL

const NAV_ITEMS = ['Product', 'Features', 'Pricing'] as const

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    const onPointerDown = (e: PointerEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header class="site-header" ref={headerRef}>
      <div class="container header-inner">
        <a class="logo" href="#" aria-label="Monograph — home">
          <img src={`${base}images/logo.svg`} alt="" width="32" height="32" />
        </a>

        <nav class="site-nav" aria-label="Main">
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
            <li class="dot" aria-hidden="true"></li>
            <li><a class="muted" href="#">Login</a></li>
          </ul>
        </nav>

        <button
          class="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <img
            src={`${base}images/${menuOpen ? 'icon-close' : 'icon-hamburger'}.svg`}
            alt=""
            width={menuOpen ? 20 : 24}
            height={menuOpen ? 20 : 16}
          />
        </button>

        <nav id="mobile-menu" class="mobile-menu" aria-label="Main" hidden={!menuOpen}>
          <ul>
            {NAV_ITEMS.map((item) => (
              <li key={item}><a href="#" onClick={closeMenu}>{item}</a></li>
            ))}
            <li class="divider" aria-hidden="true"></li>
            <li><a class="muted" href="#" onClick={closeMenu}>Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
