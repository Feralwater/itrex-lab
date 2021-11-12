import {DAYS_IN_MONTH, DAYS_IN_WEEK, Month, WEEK_DAYS_FROM_MONDAY} from "../constants";

export function areEqual(date: Date, comparableDate: Date | null): boolean {
    if (!date || !comparableDate) return false;
    return (
        date.getFullYear() === comparableDate.getFullYear() &&
        date.getMonth() === comparableDate.getMonth() &&
        date.getDate() === comparableDate.getDate()
    );
}

export function isLeapYear(year: number): boolean {
    return !((year % 4) || (!(year % 100) && (year % 400)));
}

export function getDaysInMonth(date: Date) {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = DAYS_IN_MONTH[month];

    if (isLeapYear(year) && month === Month.February) {
        return daysInMonth + 1;
    } else {
        return daysInMonth;
    }
}

export function getDayOfWeek(date: Date) {
    const dayOfWeek = date.getDay();

    return WEEK_DAYS_FROM_MONDAY[dayOfWeek];
}

export function getMonthData(year: number, month: number) {
    const result: Array<Array<Date >> = [];
    const date = new Date(year, month);
    const daysInMonth = 35;
    const monthStartsOn = getDayOfWeek(date);
    let day = 1;
    let prevMonth = new Date(year, month - 1)
    let DaysInMonth = getDaysInMonth(prevMonth)

    for (let i = 0; i < (daysInMonth) / DAYS_IN_WEEK; i++) {
        result[i] = [];
        for (let j = 0; j < DAYS_IN_WEEK; j++) {
            if (i === 0 && j < monthStartsOn) {
                result[i][monthStartsOn - 1 - j] = new Date(year, month - 1, DaysInMonth--);
            } else {
                result[i][j] = new Date(year, month, day++);
            }
        }
    }

    return result;
}