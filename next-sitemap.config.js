/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.mexicointeractivo.com',  // Replace with your actual domain
    generateRobotsTxt: true, // (Optional) Generate a robots.txt file
    exclude: ['/admin/*'],   // Exclude any specific routes if needed
  };