export interface task {
    id: string;
    title: string;
    description: string;
    status: tASK
}

export enum TaskStatus {
    OPEN = 'OPEN',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}
