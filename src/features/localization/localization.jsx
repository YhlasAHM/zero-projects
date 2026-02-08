import { Button } from "@mui/material"

import { useLocale } from '../../hooks/useLocale'

export const Localization = () => {
    const { currentLanguage, changeLang } = useLocale()

    const handleChangeLang = () => {
        localStorage.setItem('language', currentLanguage === 'tk' ? 'ru' : 'tk')
        changeLang(currentLanguage === 'tk' ? 'ru' : 'tk')
    }

    return (
        <Button onClick={handleChangeLang}>
            {currentLanguage}
        </Button>
    )
}