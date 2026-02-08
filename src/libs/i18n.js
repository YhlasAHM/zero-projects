import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ru from '../locales/ru.json';
import tk from '../locales/tk.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: ru },
            tk: { translation: tk },
        },
        lng: localStorage.getItem("language") || "tk",
        fallbackLng: 'tk',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
