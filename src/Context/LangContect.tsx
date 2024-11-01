import {createContext, useState} from 'react';

const LangContext = createContext();

export const LangContextProvider = ({children}) => {
  const [lang, setLang] = useState('tr-TR');
  const values = {lang, setLang};
  const toggleLanguage = () => {
    setLang(prev => (prev === 'tr-TR' ? 'en-US' : 'tr-TR'));
  };

  return <LangContext.Provider value={values}>{children}</LangContext.Provider>;
};
export default LangContext;
