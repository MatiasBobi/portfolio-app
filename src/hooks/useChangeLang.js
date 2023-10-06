import { useTranslation } from 'react-i18next';


export const useChangeLang = (text) =>{
    const [t] = useTranslation("global")
    return t(text)
}

