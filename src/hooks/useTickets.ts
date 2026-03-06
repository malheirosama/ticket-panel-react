//encapsulei a lógica de estado em um custom hook para evitar lógica de dados dentro dos componentes

import { useEffect, useState } from "react"
import { getTickets } from "../services/ticketService"
import type { Ticket } from "../types/ticket"

export function useTickets() {

  const [tickets, setTickets] = useState<Ticket[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  async function loadTickets() {
    try {
      setLoading(true)
      const data = await getTickets()
      setTickets(data)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTickets()
  }, [])

  return { tickets, loading, error, loadTickets }
}