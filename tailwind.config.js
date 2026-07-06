/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        milk: '#f7ead9',
        cream: '#fff8ec',
        tea: '#c59a6d',
        cocoa: '#5b3b25',
        fresh: '#dff4ff',
        ocean: '#28a8e0',
        alert: '#e53935',
      },
      boxShadow: {
        soft: '0 14px 38px rgba(54, 101, 128, 0.18)',
        shelf: '0 18px 30px rgba(31, 46, 58, 0.18)',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          '"Microsoft YaHei"',
          '"PingFang SC"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
