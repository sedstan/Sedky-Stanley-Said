module.exports = {
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            titillium: ['Titillium Web, sans-serif'],
            roboto: ['Roboto, sans-serif'],
        },
        container: {
            center: true,
        },
        extend: {
            colors: {
                copper: '#a8763e',
                oldLace: '#f7f3e3',
                cultured: '#ecf0f1',
                barnRed: '#6f1a07',
                bistro: '#2b2118',
            },
            backgroundOpacity: {
                '09': '0.9',
            },
            maxWidth: {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
                '400': '400px',
                '320': '320px'
            },
            minWidth: {
                '320': '320px'
            },
            width: {
                75: '18.75em',
                100: '25em',
            },
            maxHeight: {
                '400': '400px'
            },

            height: {
                75: '18.75em',
                100: '25em',
                720: '45em',
            },
        },
        future: {
            removeDeprecatedGapUtilities: true,
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
            textColor: ['visited'],
        },
    },
}
