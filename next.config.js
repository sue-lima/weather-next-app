/** @type {import('next').NextConfig} */
require('dotenv').config();
const nextConfig = {}

module.exports ={nextConfig, env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
  },} 
