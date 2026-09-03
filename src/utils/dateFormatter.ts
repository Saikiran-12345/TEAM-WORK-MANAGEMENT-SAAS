export const formatRelativeTime = (date: Date) => {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const daysDifference = Math.round((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  return rtf.format(daysDifference, 'day');
};
