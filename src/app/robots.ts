import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.volcana.ai';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/*?*', '/*&'], // Disallow query parameters to avoid duplicate content
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}