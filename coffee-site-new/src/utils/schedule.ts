// Example: weeklySchedule = [{ day: 'Monday', open: '8:00', close: '16:00' }, ...]
export function isOpenNow(weeklySchedule: Array<{ day: string; open: string; close: string }>): boolean {
  const now = new Date();
  const dayName = now.toLocaleDateString('en-US', { weekday: 'long' });
  const today = weeklySchedule.find(d => d.day === dayName);
  if (!today || today.open === 'Closed' || today.close === 'Closed') return false;
  const [openHour, openMin] = today.open.split(":").map(Number);
  const [closeHour, closeMin] = today.close.split(":").map(Number);
  const openDate = new Date(now);
  openDate.setHours(openHour, openMin, 0, 0);
  const closeDate = new Date(now);
  closeDate.setHours(closeHour, closeMin, 0, 0);
  return now >= openDate && now < closeDate;
}

export function nextOpenLabel(weeklySchedule: Array<{ day: string; open: string; close: string }>): string {
  const now = new Date();
  const dayOrder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let idx = dayOrder.indexOf(now.toLocaleDateString('en-US', { weekday: 'long' }));
  for (let i = 0; i < 7; i++) {
    const d = weeklySchedule[(idx + i) % 7];
    if (d.open !== 'Closed') {
      if (i === 0) return `Opens ${d.open}`;
      return `Opens ${d.day} ${d.open}`;
    }
  }
  return "Closed";
}
