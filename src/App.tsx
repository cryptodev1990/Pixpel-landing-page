import Router from './routes';
import AppContextProvider from "./context/AppContext";
import Layout from './pages/layout';
import './App.scss';

function App() {
  return (
    <>
      <AppContextProvider>
        <Layout />
      </AppContextProvider>
    </>
  );
}

export default App;
