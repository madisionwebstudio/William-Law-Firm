import type { APIRoute } from 'astro';
import { services } from '../data/practice';

// Add any new static page here; service pages are included automatically.
const STATIC = ['/', '/about/', '/criminal-defense/', '/personal-injury/', '/contact/', '/privacy-policy/'];

export const GET: APIRoute = ({ site }) => {
  const urls = [...STATIC, ...services.map((s) => `/${s.parent}/${s.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${new URL(u, site).href}</loc></url>`)
    .join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
