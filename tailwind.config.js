/** @type {import('tailwindcss').Config} */  
module.exports = {  
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],  
  theme: {  
    extend: {  
      animation: {  
        'fade-in-up': 'fadeInUp 1s ease-out',  
      },  
      keyframes: {  
        fadeInUp: {  
          '0%': { opacity: '0', transform: 'translateY(30px)' },  
          '100%': { opacity: '1', transform: 'translateY(0)' },  
        }  
      },
          fontFamily: {
      inter: ['Inter', 'system-ui', 'sans-serif'],
    }, 
        colors: {
      primary: "#0ea5e9",   // Sky Blue
      secondary: "#f8fafc", // Light background
      accent: "#38bdf8",    // Soft blue
      border: "#e2e8f0",
      textDark: "#0f172a",
    }
    },  
  },  
  plugins: [],  
}  
