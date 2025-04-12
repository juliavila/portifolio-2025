import { Context, createContext, ReactElement, useState } from "react";

export type Languages = 'en' | 'pt';

type InternacionalizationContextProps = {
  language: Languages;
  setLanguage: (value: Languages) => void
}

const InternacionalizationContext = (createContext<InternacionalizationContextProps | null>(null)) as Context<InternacionalizationContextProps>;

function InternacionalizationProvider({ children }: { children: ReactElement }) {
  const [language, setLanguage] = useState<Languages>('en');

  return <InternacionalizationContext.Provider value={{ language, setLanguage }}>
    {children}
  </InternacionalizationContext.Provider>;
}

export { InternacionalizationContext };
export default InternacionalizationProvider;