module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '1px',
        0: '0',
        2: '2px',
        3: '3px',
      },
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        primary: {
          900: '#ee820f',
          700: '#F08D25',
          600: '#F19739',
        },
        secondary: {
          900: '#7c4b08',
          800: '#99590A',
          700: '#A7600B',
          600: '#B5670C',
        },
      },
      backgroundImage: {
        'login-image':
          // "url('https://www.seneplus.com/sites/default/files/raw_photos/gmd_1.jpg')",
          "url('https://scontent.fdkr6-1.fna.fbcdn.net/v/t39.30808-6/294721079_535492351705779_4336656706095530379_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=109&ccb=1-7&_nc_sid=8024bb&efg=eyJpIjoidCJ9&_nc_ohc=XRbSbuWEN2sAX-rLeR_&_nc_ht=scontent.fdkr6-1.fna&oh=00_AT-CmQwz9ooG1bAWQW8D_oLXbN6I0fIr_5HYoCEBbq_lBw&oe=62E8710C')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
