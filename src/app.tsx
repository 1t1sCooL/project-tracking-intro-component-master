import { useState } from 'preact/hooks'

const base = import.meta.env.BASE_URL

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header class="site-header">
      <div class="container header-inner">
        <a class="logo" href="#" aria-label="Monograph — home">
          <img src={`${base}images/logo.svg`} alt="" width="32" height="32" />
        </a>

        <nav class="site-nav" aria-label="Main">
          <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
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
            <li><a href="#">Product</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li class="divider" aria-hidden="true"></li>
            <li><a class="muted" href="#">Login</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export function App() {
  return (
    <div class="page">
      <Header />

      <main>
        <div class="illustration">
          <img
            src={`${base}images/illustration-devices.svg`}
            alt="Preview of the Monograph dashboard on a laptop and a phone"
            width="960"
            height="464"
          />
        </div>

        <section class="hero container">
          <p class="eyebrow">
            <span class="tag">New</span>
            <span class="tracking">Monograph Dashboard</span>
          </p>
          <h1>Powerful insights into your team</h1>
          <p class="lead">Project planning and time tracking for agile teams</p>
          <p class="cta">
            <a class="button" href="#">Schedule a demo</a>
            <span class="tracking">to see a preview</span>
          </p>
        </section>
      </main>

      <footer class="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by{' '}
        <a href="https://www.frontendmentor.io/profile/1t1sCooL" target="_blank" rel="noreferrer">1t1sCooL</a>.
      </footer>
    </div>
  )
}
