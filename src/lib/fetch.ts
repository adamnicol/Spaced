export async function get<T>(url: string, init?: RequestInit) {
  const res = await fetch(url, init);
  const data = (await res.json()) as T;
  return data;
}
