import React, { createContext, useState, useContext } from 'react';

interface IAppContext {
  clickedContact: boolean;
  setClickedContact?: any;
}

const defaultState = {
  clickedContact: false,
};

export const AppContext = createContext<IAppContext>(defaultState);

const AppContextProvider = ( props: any ) => {
  const [clickedContact, setClickedContact] = useState(defaultState.clickedContact);

  return (
    <AppContext.Provider 
      value={{ 
        clickedContact,
        setClickedContact,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};


export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);