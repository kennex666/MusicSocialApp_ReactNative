export const formatYearMonthDay = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

// format date to Y-m-d H:i:s
export const formatDateTimeServer = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


export function isAtLeastXYearsOld(dateOfBirth: any, x: number): boolean{
    const currentDate = new Date();
    const birthDate = new Date(dateOfBirth);

    // Set the date 13 years ago from today
    const minDate = new Date();
    minDate.setFullYear(currentDate.getFullYear() - x);

    // Compare the birth date with the date 13 years ago
    return birthDate <= minDate;
}

export function timeInteractFormat(time: string|Date, isShowRecenly = true): string|null {
    const date = typeof(time) == "string" ? new Date(time) : time;
    const currentDate = new Date();

    const diff = currentDate.getTime() - date.getTime();
    const diffSeconds = diff / 1000;

    if (diffSeconds < 60) {
        return isShowRecenly ? "Vừa xong" : null;
    }

    const diffMinutes = diffSeconds / 60;
    if (diffMinutes < 60) {
        return `${Math.floor(diffMinutes)}m`;
    }

    const diffHours = diffMinutes / 60;

    if (diffHours < 24) {
        return `${Math.floor(diffHours)}h`;
    }

    const diffDays = diffHours / 24;
    if (diffDays < 7) {
        return `${Math.floor(diffDays)}d`;
    }

    const diffWeeks = diffDays / 7;
    if (diffWeeks < 4) {
        return `${Math.floor(diffWeeks)}w`;
    }

    const diffMonths = diffDays / 30;
    if (diffMonths < 12) {
        return `${Math.floor(diffMonths)}m`;
    }

    const diffYears = diffMonths / 12;
    return `${Math.floor(diffYears)}y`;

}