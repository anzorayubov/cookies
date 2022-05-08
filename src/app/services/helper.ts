export function debounce(fn: any, wait: number) {
    let timeout: any;
    return function (...args: any[]) {
        const later = () => {
            clearTimeout(timeout);
            // @ts-ignore
            fn.apply(this, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

export function setToSessionStorage(day: string) {
    sessionStorage.setItem('selectedDay', day);
}

export const initialWeek = [
    {
        name: 'Monday',
        tasks: []
    },
    {
        name: 'Tuesday',
        tasks: []
    },
    {
        name: 'Wednesday',
        tasks: []
    }
    ,
    {
        name: 'Thursday',
        tasks: []
    },
    {
        name: 'Friday',
        tasks: []
    },
    {
        name: 'Saturday',
        tasks: []
    }
    ,
    {
        name: 'Sunday',
        tasks: []
    }
];
