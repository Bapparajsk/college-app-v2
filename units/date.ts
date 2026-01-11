// Define the return type
export type DayTypes = 'Monday' | 'Tuesday'| 'Wednesday'| 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type DayDateInfo = {
    day: DayTypes;
    date: {
        day: string;
        month: string;
        year: string;
    };
};

// Helper function to pad single digits
const padZero = (num: number): string => num.toString().padStart(2, '0');

// Array of days for reference
const daysOfWeek:DayTypes[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Even more concise version
export function getCurrentWeekDays(): DayDateInfo[] {
    const daysOfWeek: DayTypes[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    
    // Calculate the date for Monday
    const monday = new Date(today);
    const daysSinceMonday = dayOfWeek === 0 ? 6 : dayOfWeek - 1;
    monday.setDate(today.getDate() - daysSinceMonday);
    
    // Generate the week
    return Array.from({ length: 7 }, (_, i) => {
        const currentDate = new Date(monday);
        currentDate.setDate(monday.getDate() + i);
        
        return {
            day: daysOfWeek[i],
            date: {
                day: padZero(currentDate.getDate()),
                month: padZero(currentDate.getMonth() + 1),
                year: currentDate.getFullYear().toString()
            }
        };
    });
}


// Function to get today's DayDateInfo
export function getTodayInfo(): DayDateInfo {
    const today = new Date();
    
    return {
        day: daysOfWeek[today.getDay()],
        date: {
            day: padZero(today.getDate()),
            month: padZero(today.getMonth() + 1),
            year: today.getFullYear().toString()
        }
    };
}

export function isToday(dateToCheck: DayDateInfo['date']): boolean {
    const today = new Date();
    const todayStr = `${padZero(today.getDate())}-${padZero(today.getMonth() + 1)}-${today.getFullYear()}`;
    const checkDateStr = `${dateToCheck.day}-${dateToCheck.month}-${dateToCheck.year}`;
    
    return todayStr === checkDateStr;
}


export function formatDay(day: DayTypes, length = 3) {
    return day.substring(0, length);
}

// Function to check if a specific date is in the current week
export function isDateInCurrentWeek(dateToCheck: Date): boolean {
    const weekDays = getCurrentWeekDays();
    const checkDateStr = `${padZero(dateToCheck.getDate())}-${padZero(dateToCheck.getMonth() + 1)}-${dateToCheck.getFullYear()}`;
    
    return weekDays.some(day => 
        `${day.date.day}-${day.date.month}-${day.date.year}` === checkDateStr
    );
}

export function getDayAndYear() {
    const today = new Date();
    const day = daysOfWeek[today.getDay()];
    const year = today.getFullYear().toString();
    
    return { day, year };
}

export function formatHourTo12(hour: number): string {
    if (hour < 0 || hour > 24) {
        throw new Error("Hour must be between 0 and 24");
    }

    // Separate hours and minutes
    const baseHour = Math.floor(hour);
    const minutes = Math.round((hour - baseHour) * 60);

    // Convert to 12-hour format
    const h = baseHour % 12 === 0 ? 12 : baseHour % 12;
    const suffix = baseHour >= 12 && baseHour < 24 ? "PM" : "AM";

    // Format minutes properly
    const m = minutes.toString().padStart(2, "0");

    return `${h}:${m} ${suffix}`;
}
