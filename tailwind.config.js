/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
        colors: {
          //kalo halaman light
          primary: '#000', //hitam 
          secondry: 'oklch(70.4% 0.14 182.503)', //biru teal aksen------------
          deskripsi: 'oklch(26.8% 0.007 34.298)', //hitam tdk terlalu stone800
          
          //kalo halaman dark
          dark: 'oklch(26.8% 0.007 34.298)', //hitam------------- stone 800
          deskripsi1: 'oklch(86.9% 0.005 56.366)', //putih pudar 
          primary1: 'oklch(96.7% 0.001 286.375)', //putih
          instagram: '#FF0069',
          facebook:'#0866FF'
        },
        screens: {
          '2xl' : '1320px',
        }
    },
  },
  plugins: [],
}

