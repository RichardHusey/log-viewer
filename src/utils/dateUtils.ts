//   Formats hours and minutes into a 24-hour time string (HH:MM).

export const formatTime = (hours: number, minutes: number = 0): string => {
  const paddedHours = String(hours).padStart(2, "0");
  const paddedMinutes = String(minutes).padStart(2, "0");
  return `${paddedHours}:${paddedMinutes}`;
};

//  Formats a timestamp into a date string (YYYY-MM-DD).

export const formatDate = (timestamp: number): string => {
  const date = new Date(timestamp);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Returns the timestamp for the start of the day (midnight) for the given timestamp.

export const getDayStart = (timestamp: number): number => {
  const date = new Date(timestamp);
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate()
  ).getTime();
};
