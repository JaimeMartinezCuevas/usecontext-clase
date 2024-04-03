//Nos traemos el idioma con el hook
import {useLanguage} from './LanguageContext'

//Deestructuring para traer el idioma
const Greeting = () => {
    const { language } = useLanguage()

    const greetings = {
        en: 'Hello!',
        es: '¡Hola!',
        it: 'Salve!'
    }

    return (
        <>
        <h2>{greetings[language]}</h2>
        </>
    )
}

export default Greeting