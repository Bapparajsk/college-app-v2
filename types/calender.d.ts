export interface CalendarEvent {
    id: string;
    title: string;
    description?: string;
    date: Date;
    startTime: string;
    endTime: string;
    color?: string;
}

export interface CalendarDay {
    date: Date;
    isCurrentMonth: boolean;
    isToday: boolean;
    isSelected: boolean;
    events: CalendarEvent[];
}

export type ViewMode = 'month' | 'week' | 'day';