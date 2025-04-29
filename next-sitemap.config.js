/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://manage-your-office.vercel.app',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/404'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      // Optional if you use separate sitemaps like blog or dynamic
      // 'https://devrgd.space/server-sitemap.xml',
    ],
  },
};
