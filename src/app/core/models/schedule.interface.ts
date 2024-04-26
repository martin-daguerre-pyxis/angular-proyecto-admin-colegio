export interface ISchedule {
    id: number;
    title?: string;
    start: string;
    end: string;
    color?: string;
    allDay?: boolean;
    description?: string;
}
