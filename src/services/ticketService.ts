import type { Ticket, Priority } from "../types/ticket"

let tickets: Ticket[] = JSON.parse(
  localStorage.getItem("tickets") || "[]"
)

function saveTickets() {
  localStorage.setItem("tickets", JSON.stringify(tickets))
}

export async function getTickets(): Promise<Ticket[]> {
  return tickets
}

export async function createTicket(data: {
  title: string
  client: string
  description: string
  priority: Priority
}): Promise<Ticket> {

  const newTicket: Ticket = {
    id: Date.now(),
    status: "open",
    createdAt: new Date().toISOString(),
    ...data
  }

  tickets.push(newTicket)

  saveTickets()

  return newTicket
}

export async function updateTicketStatus(
  id: number,
  status: Ticket["status"]
) {

  tickets = tickets.map(ticket =>
    ticket.id === id ? { ...ticket, status } : ticket
  )

  saveTickets()
}