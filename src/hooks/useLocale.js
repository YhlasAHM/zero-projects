import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

export function useLocale() {

    const { t, i18n } = useTranslation();

    const currentLanguage = i18n.language;

    function changeLang(value) {
        i18n.changeLanguage(value);
    };

    const getLang = () => {
        if (currentLanguage === 'tk') {
            return 'Türkmençe'
        } else if (currentLanguage === 'ru') {
            return 'Rusça'
        }
    }

    const selectedLang = useCallback((text) => {
        if (currentLanguage === 'tk') {
            return text?.tk
        }
        if (currentLanguage === 'ru') {
            return text?.ru
        }
    }, [currentLanguage]);

    return { t, currentLanguage, changeLang, getLang, selectedLang };
};