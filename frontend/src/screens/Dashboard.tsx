import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footers/Footer';
import NavbarApp from '../components/NavBars/NavbarApp';
import { SectionDivider } from '../components/SectionDivider';
import { WalletStatus } from '../components/WalletStatus';
// import { ActivateDeactivate } from './components/ActivateDeactivate';
// import { Greeter } from './components/Greeter';
// import { SectionDivider } from './components/SectionDivider';
// import { SignMessage } from './components/SignMessage';
// import { WalletStatus } from './components/WalletStatus';

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export function Dashboard(): ReactElement {
  return (
    <>
    <NavbarApp />
    <main>
      <div className="relative pt-5 pb-5 flex  min-h-screen-75">
       
      </div>

      <section className="pb-20  -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold"> NFTs</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                   NFT 1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        <Footer />

      <SectionDivider />
      <WalletStatus />
      <SectionDivider />
    </main>
  
  </>
  );
}
