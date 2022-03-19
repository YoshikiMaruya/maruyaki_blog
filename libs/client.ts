import { createClient } from "microcms-js-sdk";
export const client = createClient({
  serviceDomain: 'maruyaki',
  apiKey: process.env.API_KEY || '',
})
