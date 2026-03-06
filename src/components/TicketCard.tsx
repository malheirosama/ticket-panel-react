import type { Ticket } from "../types/ticket"
import { updateTicketStatus } from "../services/ticketService"

interface Props {
  ticket: Ticket
  onStatusChange: () => void
}

export default function TicketCard({ ticket, onStatusChange }: Props) {

  async function handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {

    const newStatus = e.target.value as Ticket["status"]

    await updateTicketStatus(ticket.id, newStatus)

    onStatusChange()
  }

  function getStatusColor(status: string) {
    switch (status) {
      case "open":
        return "#ff4d4f"
      case "in_progress":
        return "#faad14"
      case "resolved":
        return "#52c41a"
      default:
        return "#999"
    }
  }

  function getPriorityLabel(priority: string) {
    switch (priority) {
      case "high":
        return "🔴 Alta"
      case "medium":
        return "🟡 Média"
      case "low":
        return "🟢 Baixa"
      default:
        return priority
    }
  }

  return (
    <div
      style={{
        border: "1px solid #444",
        padding: "16px",
        marginBottom: "12px",
        borderRadius: "8px",
        backgroundColor: "#1f1f1f"
      }}
    >

      <h3 style={{ marginTop: 0 }}>{ticket.title}</h3>

      <p>
        <strong>Cliente:</strong> {ticket.client}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <select
          value={ticket.status}
          onChange={handleStatusChange}
          style={{
            backgroundColor: getStatusColor(ticket.status),
            color: "white",
            border: "none",
            padding: "4px 8px",
            borderRadius: "4px",
            marginLeft: "6px"
          }}
        >
          <option value="open">Aberto</option>
          <option value="in_progress">Em andamento</option>
          <option value="resolved">Resolvido</option>
        </select>
      </p>

      <p>
        <strong>Prioridade:</strong> {getPriorityLabel(ticket.priority)}
      </p>

      <p>
        <strong>Data:</strong>{" "}
        {new Date(ticket.createdAt).toLocaleDateString()}
      </p>

    </div>
  )
}