//tipo centralizado criado para garantir consistência de dados entre componentes e serviço

export type Status = "open" | "in_progress" | "resolved"

export type Priority = "low" | "medium" | "high"

export interface Ticket {
  id: number
  title: string
  client: string
  description: string
  status: Status
  priority: Priority
  createdAt: string
}