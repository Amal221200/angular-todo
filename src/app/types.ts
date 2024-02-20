export interface TodoItem {
    id: string,
    task: string,
    action: "complete" | "pending" | "incomplete"
}