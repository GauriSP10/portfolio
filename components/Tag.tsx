type TagColor = 'teal' | 'blue' | 'amber'

interface TagProps {
  label: string
  color: TagColor
}

export default function Tag({ label, color }: TagProps) {
  return (
    <span
      className={`font-mono text-[10px] px-2.5 py-1 rounded-full tag-${color}`}
    >
      {label}
    </span>
  )
}
