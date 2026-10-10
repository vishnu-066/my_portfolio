export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ""

/**
 * Resolves static asset paths with the configured basePath prefix (e.g. for GitHub Pages).
 */
export function assetPath(path: string | undefined | null): string {
  if (!path) return ""
  if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("data:")) {
    return path
  }
  const clean = path.startsWith("/") ? path : `/${path}`
  if (basePath && clean.startsWith(basePath)) {
    return clean
  }
  return `${basePath}${clean}`
}
