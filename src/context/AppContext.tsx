import React, { createContext, useState, useContext } from 'react';

interface IAppContext {
  clickedContact: boolean;
  setClickedContact?: any;
  faqStatus: boolean[];
  setFaqStatus?: any;
}

const defaultState = {
  clickedContact: false,
  faqStatus: [false, false, false, false],
};

export const AppContext = createContext<IAppContext>(defaultState);

const AppContextProvider = ( props: any ) => {
  const [clickedContact, setClickedContact] = useState(defaultState.clickedContact);
  const [faqStatus, setFaqStatus] = useState(defaultState.faqStatus);

  return (
    <AppContext.Provider 
      value={{ 
        clickedContact,
        setClickedContact,
        faqStatus,
        setFaqStatus
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};


export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);