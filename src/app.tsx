import { Header } from './components/Header'
import { DevicesIllustration } from './components/DevicesIllustration'
import { Hero } from './components/Hero'
import { Attribution } from './components/Attribution'

export function App() {
  return (
    <div class="page">
      <Header />

      <main>
        <DevicesIllustration />
        <Hero />
      </main>

      <Attribution />
    </div>
  )
}
