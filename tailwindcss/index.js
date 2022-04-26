const plugin = require('tailwindcss/plugin');
const colors = require('tailwindcss/colors');

module.exports = plugin(function({ addComponents, theme }) {
    const breadcrumb = {
        // ':root': {
        //     '--breadcrumb-padding-x': '.5rem',
        //     '--breadcrumb-padding-y': '1rem',
        //     '--breadcrumb-margin-bottom': '1rem',
        //     '--breadcrumb-background-color': theme('colors.gray.200', colors.gray[200]),
        //     '--breadcrumb-border-radius': '.25rem',
            
        //     '--breadcrumb-item-padding-x': '.5rem',
            
        //     '--breadcrumb-divider-content': quote('/'),
        //     '--breadcrumb-divider-color': theme('colors.gray.600', colors.gray[600]),
            
        //     '--breadcrumb-active-color': theme('colors.gray.600', colors.gray[600]),
        // },
        
        '.breadcrumb': {
            display: 'flex',
            flexWrap: 'wrap',
            color: theme('breadcrumb.color'),
            padding: `${theme('breadcrumb.paddingY')} ${theme('breadcrumb.paddingX')}`,
            marginBottom: theme('breadcrumb.marginBottom'),
            listStyle: 'none',
            backgroundColor: theme('breadcrumb.backgroundColor'),
            borderRadius: theme('breadcrumb.borderRadius')
        },
          
        '.breadcrumb-item': {
            display: 'flex',
        },

        // The separator between breadcrumbs (by default, a forward-slash: "/")
        '.breadcrumb-item + .breadcrumb-item': {
            paddingLeft: theme('breadcrumb.paddingX'),
        },

        '.breadcrumb-item + .breadcrumb-item::before': {
            display: 'inline-block', // Suppress underlining of the separator
            paddingRight: theme('breadcrumb.paddingX'),
            color: theme('breadcrumb.divider.color'),
            content: theme('breadcrumb.divider.content')
        },
        
        '.breadcrumb-item.active': {
            color: theme('breadcrumb.active.color')
        }
    };
    
    addComponents(breadcrumb);
}, {
    theme: {
        breadcrumb: theme => ({
            paddingX: '.75rem',
            paddingY: '.75rem',
            marginBottom: '1rem',
            backgroundColor: theme('colors.gray.200', colors.gray['200']),
            borderRadius: '.25rem',
            color: theme('colors.blue.500', colors.blue['500']),
            item: {
                paddingX: '.5rem'
            },
            divider: {
                content: '"/"',
                color: theme('colors.gray.600', colors.gray['600']),
            },
            active: {
                color: theme('colors.gray.600', colors.gray['600']),
            }
        })
    }

});