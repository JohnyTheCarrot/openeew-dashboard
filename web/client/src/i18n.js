import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import pirate_en from './locales/pirate_en.json'
import {Dropdown} from "carbon-components-react";
import language_list from "./locales/language_list.json";
import React from "react";

export const getLanguage = () => {
  let lang = localStorage.getItem("lang") ?? "English"

  // in case there's an invalid value in localStorage
  if (!Object.keys(language_list).includes(lang))
    return "English"
  else
    return lang
}

export const setLanguage = (lang) => {
  if (!Object.keys(language_list).includes(lang))
    console.error("Language not found: " + lang)
  localStorage.setItem("lang", lang)
  window.location.reload()
}

i18n.use(initReactI18next).init({
  lng: language_list[getLanguage()],
  fallbackLng: 'en',
  resources: {
    en: { translations: en },
    pirate_en: { translations: pirate_en }
  },
  options: {
    lookupLocalStorage: 'i18next'
  },
  defaultNS: 'translations',
  interpolation: { escapeValue: false },
})
i18n.languages = ['en', "pirate_en"]

export const LanguageDropdown =
  <Dropdown
    id="language-list"
    style={{marginTop: "auto", marginBottom: "auto", marginLeft: "auto"}}
    label={getLanguage()}
    value={getLanguage()}
    onChange={({selectedItem}) => setLanguage(selectedItem.label)}
    items={Object.keys(language_list).map(l => {
      return {"id": l, "label": l}
    })}
  />


export default i18n
