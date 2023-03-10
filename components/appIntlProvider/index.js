import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IntlProvider } from "react-intl"
import translations from "@/translations"
import { getLocale } from "@/utils/compute"

const AppIntlProvider = ({ children }) => {
    const { userLocale } = useSelector(({ common }) => common)

    const [locale, setLocale] = useState(getLocale())

    useEffect(() => {
        if (userLocale) {
            setLocale(getLocale(userLocale))
        }
    }, [userLocale])

    return (
        <IntlProvider locale={locale.short} messages={translations.messages[locale.specific]}>
            {children}
        </IntlProvider>
    )
}

export default AppIntlProvider
