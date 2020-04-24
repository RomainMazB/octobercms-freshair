const plugin = require('tailwindcss/plugin')

module.exports = {
    prefix: 'tw-',
    theme: {
        opacity: {
            '0': '0',
            '10': '.1',
            '15': '.15',
            '20': '.2',
            '25': '.25',
            '50': '.5',
            '75': '.75',
            '100': '1',
        },
        minWidth: {
            '12': '3rem'
        },
        backgroundColor: theme => ({
            ...theme('colors'),
            'body': '#f2f5f9'
        }),
        filter: {
            'none': 'none',
            'grayscale': 'grayscale(1)',
            'invert': 'invert(1)',
            'sepia': 'sepia(1)',
        },
        backdropFilter: {
            'none': 'none',
            'blur': 'blur(20px)',
        },
    },
    variants: {
        opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
        filter: ['responsive', 'group-hover'],
        borderWidth: ['responsive', 'hover', 'group-hover'],
        display: ['responsive', 'target', 'group-hover'],
        textColor: ['responsive', 'hover', 'focus', 'group-hover'],
        backgroundColor: ['responsive', 'hover', 'focus', 'group-hover']
    },
    plugins: [
        require('tailwindcss-filters'),
        plugin(function ({ addVariant, e }) {
            addVariant('target', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`target${separator}${className}`)}:target`
                })
            })
        })
    ],
    corePlugins: {
        outline: false,
    }
};
