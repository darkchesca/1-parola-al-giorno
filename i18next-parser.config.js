/**
 * i18next-parser configs.
 * This tool scans the project for missing translation keys and adds them to the locales files
 * to scan the application run:
 * npm extract-translations
 *
 * lib repo: https://github.com/i18next/i18next-parser
 * for configs see: https://lokalise.com/blog/how-to-internationalize-react-application-using-i18next/
 * */

module.exports = {
    // save previous translation catalogs to the \_old folder
    createOldCatalogs: true,

    lexers: {
        // we're writing jsx inside .js files
        js: ['JsxLexer'],
        default: ['JavascriptLexer'],
    },

    // An array of the locales in your applications
    locales: ['en', 'it'],

    // Namespace separator used in your translation keys
    // If you want to use plain english keys, separators such as `.` and `:` will conflict. You might want to set `keySeparator: false` and `namespaceSeparator: false`. That way, `t('Status: Loading...')` will not think that there are a namespace and three separator dots for instance.
    namespaceSeparator: ':',

    // Supports $LOCALE and $NAMESPACE injection
    // Supports JSON (.json) and YAML (.yml) file formats
    // Where to write the locale files relative to process.cwd()
    output: 'src/locales/$LOCALE.json',

    // An array of globs that describe where to look for source files
    // relative to the location of the configuration file
    // Globs syntax: https://github.com/isaacs/node-glob#glob-primer
    input: [
        'src/**/*.js',
    ],

    // sorts the keys alphabetically
    sort: true,
};
