export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url('/ctf-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.75)",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
          color: "#fff",
          width: "90%",
          maxWidth: "400px",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "20px" }}>🔐 CTF Challenge Login</h2>
        <form>
          <input
            type="text"
            placeholder="Username"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "15px",
              border: "none",
              borderRadius: "6px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "20px",
              border: "none",
              borderRadius: "6px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#00ffcc",
              border: "none",
              borderRadius: "6px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Enter
          </button>
        </form>
      </div>
    </main>
  );
}
