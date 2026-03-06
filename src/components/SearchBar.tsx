interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <input
      placeholder="Buscar por título ou cliente..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        padding: "8px",
        width: "100%",
        marginBottom: "10px"
      }}
    />
  )
}