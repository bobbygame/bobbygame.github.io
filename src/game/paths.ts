export function appUrl(path = ''): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
}

export function assetUrl(path: string): string {
  return appUrl(path);
}

export function currentRoutePath(): string {
  const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
  if (basePath && window.location.pathname.startsWith(basePath)) {
    return window.location.pathname.slice(basePath.length) || '/';
  }
  return window.location.pathname;
}
