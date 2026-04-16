const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/mi-web" : "";

export function img(path: string): string {
  return `${BASE_PATH}${path}`;
}
