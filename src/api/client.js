const BASE_URL = 'https://perenual.com/api';
const API_KEY = process.env.EXPO_PUBLIC_PERENUAL_KEY;

export async function api(path, params = {}) {
  const query = new URLSearchParams({ key: API_KEY, ...params });
  const res = await fetch(`${BASE_URL}${path}?${query}`);
  if (!res.ok) throw new Error(`API ${res.status}`);
  return res.json();
}
