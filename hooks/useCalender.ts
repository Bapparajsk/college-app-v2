import { useCallback, useMemo, useState } from 'react';
import { CalendarDay, CalendarEvent, ViewMode } from '../types/calender';

export const useCalendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewMode, setViewMode] = useState<ViewMode>('month');
    const [events, setEvents] = useState<CalendarEvent[]>([]);

    // Safe date creation helper
    const createSafeDate = useCallback((year: number, month: number, day: number) => {
        return new Date(year, month, day);
    }, []);

    const getDaysInMonth = useCallback((year: number, month: number): Date[] => {
        const lastDay = new Date(year, month + 1, 0);
        const daysCount = lastDay.getDate();

        return Array.from({ length: daysCount }, (_, i) =>
            createSafeDate(year, month, i + 1)
        );
    }, [createSafeDate]);

    const navigateMonth = useCallback((direction: 'prev' | 'next') => {
        setCurrentDate(prev => {
            const currentYear = prev.getFullYear();
            const currentMonth = prev.getMonth();

            let newYear = currentYear;
            let newMonth = currentMonth;

            if (direction === 'next') {
                newMonth = currentMonth + 1;
                if (newMonth > 11) {
                    newMonth = 0;
                    newYear = currentYear + 1;
                }
            } else {
                newMonth = currentMonth - 1;
                if (newMonth < 0) {
                    newMonth = 11;
                    newYear = currentYear - 1;
                }
            }

            // Always set to the first day of the month to avoid invalid dates
            return createSafeDate(newYear, newMonth, 1);
        });
    }, [createSafeDate]);

    const navigateWeek = useCallback((direction: 'prev' | 'next') => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            const weekAdjustment = direction === 'next' ? 7 : -7;

            // Use getTime() for safe date manipulation
            const newTimestamp = newDate.getTime() + (weekAdjustment * 24 * 60 * 60 * 1000);
            return new Date(newTimestamp);
        });
    }, []);

    const navigateDay = useCallback((direction: 'prev' | 'next') => {
        setCurrentDate(prev => {
            const newDate = new Date(prev);
            const dayAdjustment = direction === 'next' ? 1 : -1;

            // Use getTime() for safe date manipulation
            const newTimestamp = newDate.getTime() + (dayAdjustment * 24 * 60 * 60 * 1000);
            return new Date(newTimestamp);
        });
    }, []);

    // Improved calendar generation with safe date handling
    const generateCalendarDays = useCallback((): CalendarDay[] => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = new Date(year, month, 1);
        const lastDayOfMonth = new Date(year, month + 1, 0);

        const startDayOfWeek = firstDayOfMonth.getDay(); // 0 = Sunday, 1 = Monday, etc.
        const endDayOfWeek = lastDayOfMonth.getDay();

        // Get previous month days
        const prevMonthDays: Date[] = [];
        const prevMonthLastDay = new Date(year, month, 0).getDate();

        for (let i = startDayOfWeek - 1; i >= 0; i--) {
            const day = prevMonthLastDay - i;
            prevMonthDays.push(createSafeDate(year, month - 1, day));
        }

        // Get next month days
        const nextMonthDays: Date[] = [];
        const daysNeeded = 6 - endDayOfWeek;

        for (let i = 1; i <= daysNeeded; i++) {
            nextMonthDays.push(createSafeDate(year, month + 1, i));
        }

        // Combine all days
        const allDays: CalendarDay[] = [
            ...prevMonthDays.map(date => ({
                date,
                isCurrentMonth: false,
                isToday: isToday(date),
                isSelected: selectedDate.toDateString() === date.toDateString(),
                events: getEventsForDate(date),
            })),
            ...daysInMonth.map(date => ({
                date,
                isCurrentMonth: true,
                isToday: isToday(date),
                isSelected: selectedDate.toDateString() === date.toDateString(),
                events: getEventsForDate(date),
            })),
            ...nextMonthDays.map(date => ({
                date,
                isCurrentMonth: false,
                isToday: isToday(date),
                isSelected: selectedDate.toDateString() === date.toDateString(),
                events: getEventsForDate(date),
            })),
        ];

        return allDays;
    }, [currentDate, selectedDate, events, getDaysInMonth, createSafeDate]);

    // Helper functions
    const isToday = useCallback((date: Date): boolean => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    }, []);

    const getEventsForDate = useCallback((date: Date): CalendarEvent[] => {
        return events.filter(event =>
            event.date.toDateString() === date.toDateString()
        );
    }, [events]);

    const selectDate = useCallback((date: Date) => {
        setSelectedDate(date);
        // Only update currentDate if the selected date is in a different month
        if (date.getMonth() !== currentDate.getMonth() ||
            date.getFullYear() !== currentDate.getFullYear()) {
            setCurrentDate(new Date(date.getFullYear(), date.getMonth(), 1));
        }
    }, [currentDate]);

    const addEvent = useCallback((event: Omit<CalendarEvent, 'id'>) => {
        const newEvent: CalendarEvent = {
            ...event,
            id: Math.random().toString(36).substr(2, 9),
        };
        setEvents(prev => [...prev, newEvent]);
    }, []);

    const calendarDays = useMemo(() => generateCalendarDays(), [generateCalendarDays]);

    return {
        currentDate,
        selectedDate,
        viewMode,
        setViewMode,
        calendarDays,
        navigateMonth,
        navigateWeek,
        navigateDay,
        selectDate,
        addEvent,
        events,
    };
};