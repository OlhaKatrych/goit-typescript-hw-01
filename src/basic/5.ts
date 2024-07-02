export enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

export const isWeekend = (day: DayOfWeek): string => {
  if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
};
