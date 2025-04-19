const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export async function fetchFromStrapi(endpoint: string) {
  const res = await fetch(`${STRAPI_API_URL}/${endpoint}`);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  const data = await res.json();
  return data;
}
