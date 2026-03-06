import { useState } from "react"
import { createTicket } from "../services/ticketService"
import type { Priority } from "../types/ticket"

export default function TicketForm({ onCreated }: { onCreated: () => void }) {

  const [title, setTitle] = useState("")
  const [client, setClient] = useState("")
  const [description, setDescription] = useState("")
  const [priority, setPriority] = useState<Priority>("medium")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    await createTicket({
      title,
      client,
      description,
      priority
    })

    setTitle("")
    setClient("")
    setDescription("")
    setPriority("medium")

    onCreated()
  }

  return (
    <div>

      <h2 style={{ marginBottom: "20px" }}>Novo Chamado</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "400px"
        }}
      >

        <input
          placeholder="Título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        />

        <textarea
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        />

        <input
          placeholder="Cliente"
          value={client}
          onChange={(e) => setClient(e.target.value)}
          style={{ padding: "8px", width: "100%" }}
        />

        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value as Priority)}
          style={{ padding: "8px" }}
        >
          <option value="low">Baixa</option>
          <option value="medium">Média</option>
          <option value="high">Alta</option>
        </select>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#1677ff",
            border: "none",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Criar Chamado
        </button>

      </form>

    </div>
  )
}