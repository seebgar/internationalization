import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider, createIntlCache } from 'react-intl';
import txt from './locales/txt'

import JobsList from "./components/jobsList";

const cache = createIntlCache()

const locale = (navigator.languages && navigator.languages[0])
               || navigator.language
               || navigator.userLanguage
               || 'en-US'; 

//const locale = "es-ES";

ReactDOM.render(
	<IntlProvider locale={locale} key={locale} value={cache} messages={txt[locale]}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);