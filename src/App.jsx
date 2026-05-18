import './App.css'

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>Website React đầu tiên</h1>
        <p>Hello world</p>
      </header>

      <section className="card">
        <h2>Thông tin</h2>

        <p>
          Đây là website React + Vite đơn giản.
        </p>

        <button
          onClick={() => alert('Hello React!')}
        >
          Click Me
        </button>
      </section>
    </div>
  )
}

export default App