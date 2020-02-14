module.exports = {
    theme: {
        backgroundColor: theme => ({
            ...theme('colors'),
            'body': '#f2f5f9'
        }),
        filter: { // defaults to {}
            'none': 'none',
            'grayscale': 'grayscale(1)',
            'invert': 'invert(1)',
            'sepia': 'sepia(1)',
        },
        backdropFilter: { // defaults to {}
            'none': 'none',
            'blur': 'blur(20px)',
        },
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        filter: ['responsive', 'group-hover'], // defaults to ['responsive']
        backdropFilter: ['responsive'], // defaults to ['responsive']
    },
    plugins: [
        require('tailwindcss-filters'),
    ],
    corePlugins: {
        outline: false,
    }
};
