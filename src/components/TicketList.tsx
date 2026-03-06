import { useState } from "react"
import TicketCard from "./TicketCard"
import TicketForm from "./TicketForm"
import SearchBar from "./SearchBar"
import StatusFilter from "./StatusFilter"
import { useTickets } from "../hooks/useTickets"

export default function TicketList() {

  const { tickets, loading, error, loadTickets } = useTickets()

  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("all")

  if (loading) return <p>Carregando chamados...</p>

  if (error) return <p>Erro ao carregar chamados.</p>

  const filteredTickets = tickets
    .filter(ticket =>
      status === "all" || ticket.status === status
    )
    .filter(ticket =>
      ticket.title.toLowerCase().includes(search.toLowerCase()) ||
      ticket.client.toLowerCase().includes(search.toLowerCase())
    )

  return (
    <div>

      <TicketForm onCreated={loadTickets} />

      <SearchBar value={search} onChange={setSearch} />

      <StatusFilter value={status} onChange={setStatus} />

      <h2 style={{ marginTop: "30px" }}>Chamados</h2>

      {filteredTickets.length === 0 && (
        <p>Nenhum chamado encontrado.</p>
      )}

      {filteredTickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onStatusChange={loadTickets}
        />
      ))}

    </div>
  )
}