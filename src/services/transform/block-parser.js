import { getBlockNames } from '@/services/condition.service'
import { transformTable } from './transform-table'


export const buildBlockParser = (engineType) => {

    const parser = {
        [getBlockNames('if')]: {
            'ejs': ({ data }) => `<% if (${data.condition}) { %>`,
            'jinja': ({ data }) => `{% if ${data.condition} %}`,
        },
        [getBlockNames('elseif')]: {
            'ejs': ({ data }) => `<% } else if (${data.condition}) { %>`,
            'jinja': ({ data }) => `{% elif ${data.condition} %}`,
        },
        [getBlockNames('else')]: {
            'ejs': ({ data }) => `<% } else { %>`,
            'jinja': ({ data }) => `{% else %}`,
        },
        [getBlockNames('endif')]: {
            'ejs': ({ data }) => `<% } %>`,
            'jinja': ({ data }) => `{% endif %}`,
        },
        [getBlockNames('for')]: {
            'ejs': ({ data }) => `<% for (const ${data.condition}) { %>`,
            'jinja': ({ data }) => `{% for ${data.condition}) %}`,
        },
        [getBlockNames('endfor')]: {
            'ejs': ({ data }) => `<% } %>`,
            'jinja': () => `{% endfor %}`,
        },
        table: {
            'ejs': ({ data }) => transformTable(data, engineType),
            'jinja': ({ data }) => transformTable(data, engineType),
        },
    }

    const engineParser = {}

    Object.entries(parser).forEach(([key, value]) => {
        engineParser[key] = value[engineType]
    })

    return engineParser
}