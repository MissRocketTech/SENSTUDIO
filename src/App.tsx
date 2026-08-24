import { Navbar } from "./components/layout/Navbar";

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main style={{ padding: "4rem 1.5rem", textAlign: "center" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Cada web nace en un diseño.
        </h1>
        <p style={{ color: "var(--text-secondary)", maxWidth: "600px", margin: "0 auto" }}>
          Desarrollo web a medida, SaaS y materialización textil bajo una misma dirección creativa.
        </p>
      </main>
    </div>
  );
}