import { ReactElement, useContext, createContext } from 'react';
import  * as ReactDOM from 'react-dom';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "assets/styles/tailwind.css";
import { Link } from 'react-router-dom';
import Navbar from './components/NavBars/Navbar';
import { Greeter } from './components/Greeter';
import { SectionDivider } from './components/SectionDivider';
import { SignMessage } from './components/SignMessage';
import { WalletStatus } from './components/WalletStatus';
import Footer from './components/Footers/Footer';
import { Dashboard } from './screens/Dashboard';
import { Landing } from './screens/Landing';
import { Web3ReactProvider } from '@web3-react/core';
import { getProvider } from './utils/provider';
import { useAccount } from 'wagmi';

export function App(): ReactElement {
  if (window.location.host.split(".")[0] === "app") {
    // It checks if the subdomain is named projects.
    // const Context = createContext(useAccount());
    // const value = useContext(Context);
        return (
          // <Web3ReactProvider getLibrary={getProvider}>
          // <Context.Provider value={value}>
              <Dashboard />
        //  </Web3ReactProvider>
        );
      }
  return (
      <Landing/>
  );
}
