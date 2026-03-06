interface Props {
  value: string
  onChange: (value: string) => void
}

export default function StatusFilter({ value, onChange }: Props) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{ marginBottom: "10px" }}
    >
      <option value="all">Todos</option>
      <option value="open">Aberto</option>
      <option value="in_progress">Em andamento</option>
      <option value="resolved">Resolvido</option>
    </select>
  )
}