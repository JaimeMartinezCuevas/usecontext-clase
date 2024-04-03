//Creamos el selector trayéndonos el hook
import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSelector = () => {
    const {language, changeLanguage} = useLanguage()

    const handleChangeLanguage = (event) => {
        changeLanguage(event.target.value)
    }

    return (
        <>
        <label>Select language</label>
        <select value={language} onChange={handleChangeLanguage}>
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="it">Italian</option>
        </select>
        </>
    )
}

export default LanguageSelector