/** Root-relative path, such as `/about` or `/services#wash`, with the Pages base prefix. */
export function href(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const [raw, hash] = path.split('#');
  const clean = (raw || '/').replace(/\/$/, '') || '/';
  const withBase = clean === '/' ? `${base}/` : `${base}${clean.startsWith('/') ? clean : `/${clean}`}/`;
  return hash ? `${withBase}#${hash}` : withBase;
}

/** File in `public/`, prefixed for the Pages base. */
export function asset(file: string): string {
  return `${import.meta.env.BASE_URL}${file.replace(/^\//, '')}`;
}
