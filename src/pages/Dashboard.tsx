import TicketList from "../components/TicketList"

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "900px",
          padding: "40px 20px",
        }}
      >
        <h1 style={{ marginBottom: "30px" }}>Painel de Chamados</h1>

        <TicketList />
      </div>
    </div>
  )
}