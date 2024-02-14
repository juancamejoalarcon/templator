import { getBlockNames } from '@/services/condition.service'
import { transformTable } from './transform-table'


export const buildBlockParser = (engineType) => {

    const parser = {
        [getBlockNames('if')]: {
            'ejs': ({ data }) => `<% if (${data.condition}) { %>`,
            'jinja': () => {},
        },
        [getBlockNames('elseif')]: {
            'ejs': ({ data }) => `<% } else if (${data.condition}) { %>`,
            'jinja': () => {},
        },
        [getBlockNames('else')]: {
            'ejs': ({ data }) => `<% } else { %>`,
            'jinja': () => {},
        },
        [getBlockNames('endif')]: {
            'ejs': ({ data }) => `<% } %>`,
            'jinja': () => {},
        },
        [getBlockNames('for')]: {
            'ejs': ({ data }) => `<% for (const ${data.condition}) { %>`,
            'jinja': () => {},
        },
        [getBlockNames('endfor')]: {
            'ejs': ({ data }) => `<% } %>`,
            'jinja': () => {},
        },
        table: {
            'ejs': ({ data }) => transformTable(data, engineType),
            'jinja': () => {},
        },
    }

    const engineParser = {}

    Object.entries(parser).forEach(([key, value]) => {
        engineParser[key] = value[engineType]
    })

    return engineParser
}