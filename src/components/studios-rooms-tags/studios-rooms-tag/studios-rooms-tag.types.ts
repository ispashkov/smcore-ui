export interface StudiosRoomsTagI {
  id: string
  title: string
  color: string
}

export interface StudiosRoomsTagActions {
  onSelect: (id: string) => void
  onReset: () => void
}
