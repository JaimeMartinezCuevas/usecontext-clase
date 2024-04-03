//Importamos las funciones de React
import { createContext, useContext, useState } from "react";

//Inicializamos el contexto
const LanguageContext = createContext()

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('en')
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    }

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

//Exportamos nuestro hook
export const useLanguage = () => useContext(LanguageContext)