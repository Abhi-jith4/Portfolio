/**
 * Helper to resolve asset URLs dynamically depending on the deployment target.
 * On Vercel: BASE_URL is '/' -> returns '/assets/...'
 * On GitHub Pages: BASE_URL is '/Portfolio/' -> returns '/Portfolio/assets/...'
 */
export function asset(path?: string): string {
  if (!path) return '';
  if (
    path.startsWith('http://') ||
    path.startsWith('https://') ||
    path.startsWith('data:') ||
    path.startsWith('blob:')
  ) {
    return path;
  }
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}`;
}
