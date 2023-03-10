export function getLocale(locale) {
    const defaultLang = process.env.NEXT_PUBLIC_DEFAULT_LOCALE

    if (locale && (typeof locale === 'string')) {
        locale = locale.toLowerCase()
    } else {
        locale = null
    }

    switch (locale || defaultLang) {
        case 'en':
        case 'en-us':
        case 'en-uk':
        case 'en_us':
        case 'en_uk':
            return {
                short: 'en',
                specific: 'enUS'
            }

        case 'fr':
        case 'fr-fr':
        case 'fr_fr':
            return {
                short: 'fr',
                specific: 'frFR'
            }

        default:
            return {
                short: 'fr',
                specific: 'frFR'
            }
    }
}