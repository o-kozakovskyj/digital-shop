/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TODO: Remove this domain after mock data removed
    domains: [
      'nordicapis.com', 'lh3.googleusercontent.com'
    ],
  },
  env: {
    API_URL: 'https://62deb5ec9c47ff309e7a60a0.mockapi.io/api/v1/cards',
    FIREBASE_API_KEY:"AIzaSyDe1V00TQTbrrD-Yh6fCjDyHKOAPzTkUxM",
    FIREBASE_AUTH_DOMAIN:"digit-store-7bbe9.firebaseapp.com",
    FIREBASE_DATABASE_URL: "https://digit-store-7bbe9-default-rtdb.firebaseio.com",
    FIREBASE_PROJECT_ID:"digit-store-7bbe9",
    FIREBASE_STORAGE_BUCKET:"digit-store-7bbe9.appspot.com",
    FIREBASE_MESSAGING_SENDER_ID:"361400302725",
    FIREBASE_APP_ID:"1:361400302725:web:c4e79919cc7d94f5dabdec",
  },
}

module.exports = nextConfig
