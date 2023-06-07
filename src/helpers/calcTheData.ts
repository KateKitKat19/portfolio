export function getTimePassed() {
  const now = new Date();
  const start = new Date('2022-04-13');

  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const startDay = start.getDate();

  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth();
  const currentDay = now.getDate();

  let years = currentYear - startYear;
  let months = currentMonth - startMonth;
  let days = currentDay - startDay;

  if (days < 0) {
    months -= 1;
    const prevMonthDays = new Date(currentYear, currentMonth, 0).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years,
    months,
    days,
  };
}

