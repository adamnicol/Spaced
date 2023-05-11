import { API_URL } from "@/config";

export async function get<T>(url: string, init?: RequestInit) {
  const res = await fetch(`${API_URL}/${url}`, init);
  const data = await res.json();
  return data as T;
}
