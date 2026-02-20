import { Link, Navigate, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

function LandingPage() {
  return (
    <main className="app-container">
      <header className="hero">
        <span className="hero-badge">Colección 2026</span>
        <h1>Tienda de Camisetas</h1>
        <p>
          Camisetas premium con diseños exclusivos para tu día a día. Encuentra estilo,
          calidad y comodidad en una sola tienda.
        </p>
        <Link className="button-primary" to="/login">
          Iniciar sesión
        </Link>
      </header>
    </main>
  )
}

function LoginPage() {
  return (
    <main className="app-container">
      <section className="auth-card" aria-label="Inicio de sesión">
        <h1>Iniciar sesión</h1>
        <form className="auth-form">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="tu@email.com" required />

          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" placeholder="••••••••" required />

          <button type="submit" className="button-primary">
            Entrar
          </button>
        </form>
        <Link className="back-link" to="/">
          Volver al inicio
        </Link>
      </section>
    </main>
  )
}

export default App
