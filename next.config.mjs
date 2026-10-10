/** @type {import('next').NextConfig} */
const isGithubActions = process.env.GITHUB_ACTIONS || false
let repoName = 'my_portfolio'
if (process.env.GITHUB_REPOSITORY) {
  repoName = process.env.GITHUB_REPOSITORY.split('/')[1] || repoName
}

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (isGithubActions ? `/${repoName}` : '')

const nextConfig = {
  output: 'export',
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig