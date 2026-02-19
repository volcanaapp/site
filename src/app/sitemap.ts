import { MetadataRoute } from 'next'
import { i18n } from '@/lib/i18n-config'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.volcana.ai';

  const pages = ['', '/about', '/waitlist'];
  const locales = i18n.locales;

  const urls = locales.flatMap(locale => {
    return pages.map(page => ({
      url: `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    }));
  });
 
  return urls;
}