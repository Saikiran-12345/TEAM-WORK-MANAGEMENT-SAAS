export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
export const truncate = (s: string, len: number) => s.length > len ? s.substring(0, len) + '...' : s;
