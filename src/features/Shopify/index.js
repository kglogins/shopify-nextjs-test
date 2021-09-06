import Client from "shopify-buy";

export const client = Client.buildClient({
  storefrontAccessToken: '1f2a6c1ea9d48e6766c0e683c4bf8d19',
  domain: 'rbs-su.myshopify.com'
  // storefrontAccessToken: process.env.SHOPIFY_STORE_FRONT_ACCESS_TOKEN,
  // domain: process.env.SHOPIFY_STORE_DOMAIN
});