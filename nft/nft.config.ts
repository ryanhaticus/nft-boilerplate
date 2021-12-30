/*

If you're looking for Firebase's configuration or similiar authenticators,
please check the .env files in the root of the project.

nft.config.js is for the configuration of NFT only. Do not put sensitive information here.

*/

export const BridgeConfiguration = {
  // 'usingFirebaseHosting' is a configurable parameter that determines whether you're using Firebase hosting or not.
  // This is important as Firebase will act differently based on your configuration.
  usingFirebaseHosting: false
};

export const SEOConfiguration = {
  // 'name' is a configurable parameter for the title of your project.
  // This will be used in page titles and in SEO.
  name: 'NFT',
  // 'description' is a configurable parameter for the description of your project.
  // This will be used in SEO.
  description: '',
  // 'locale' is a configurable parameter for the locale of your project.
  // This will be used in SEO.
  locale: 'en-US',
  // 'url' is a configurable parameter for the url of your website (domain and all).
  // This will be used in SEO.
  url: '...'
};

export const LogoConfiguration = {
  // 'primary' is the path to your primary logo shown throughout your application.
  // The path variable is held in an object for future flexibility.
  primary: {
    // 'path' is the path to the logo.
    path: '/images/logos/nft.svg',
    // 'alt' is the alternative text for the logo.
    alt: `${SEOConfiguration.name} Logo`
  },
  // 'favicon' holds the details for the icon displayed next to a page title.
  favicon: {
    // 'path' is the path to your favicon.
    path: '/images/logos/favicon.svg',
    // 'type' is the image type of the favicon.
    type: 'image/svg+xml'
  }
};
