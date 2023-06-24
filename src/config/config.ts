export const BASE_URL =
  import.meta.env.MODE === 'development'
    ? 'http://localhost:3002'
    : import.meta.env.API_BASE_URL || '';
