import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import "flag-icon-css/css/flag-icons.min.css"; 
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ["en", "fr", "esp", "nl"],
    lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
    fallbackLng: "en",
    detection: {
      // order and from where user language should be detected
      order: ["path", "cookie", "htmlTag", "localStorage", "subdomain"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: "/assets/locals/{{lng}}/translation.json",
    },
  });

const loading = (
  <div className="py-4 text-center text-white">
    <h2>Loading ...</h2>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Suspense fallback={loading}>
  <BrowserRouter>
  <React.StrictMode>
    <App />
    </React.StrictMode>
    </BrowserRouter>
  </Suspense>
);


