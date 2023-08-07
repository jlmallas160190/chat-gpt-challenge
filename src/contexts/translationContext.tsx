import English from '@/i18n/en-US.json';
import Spanish from '@/i18n/es-AR.json';
import { useState, createContext, ReactNode } from 'react';
import { IntlProvider } from 'react-intl';

interface ITranslationContext {
  locale: string;
}

const defaultState = {
  locale: 'es',
};
export const TranslationContext = createContext<ITranslationContext>(defaultState);

const TranslationProvider = (props: { local: string; children: ReactNode }) => {
  const { local, children } = props;
  const [locale] = useState(local.split('-')[0]);
  let lang;

  if (locale === 'es') {
    lang = Spanish;
  } else if (locale === 'en') {
    lang = English;
  }

  const [messages] = useState(lang);

  return (
    <TranslationContext.Provider value={{ locale }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </TranslationContext.Provider>
  );
};

export default TranslationProvider;
