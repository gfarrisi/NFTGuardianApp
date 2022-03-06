import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footers/Footer';
import Navbar from '../components/NavBars/Navbar';
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

export function Landing(): ReactElement {
  return (
    <>
    <Navbar />
    <main>
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
        {/* <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundColor: '#D8E6ED'
            // backgroundImage:
              // "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div> */}
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-black font-semibold text-5xl">
                Secure your NFTs in the NFT Guardian Vault
                </h1>
                <p className="mt-4 text-lg text-black-200">
                A custodial vault that holds onto and insure your NFT assets. Start with Ethereum L1 and eventually support multiple EVM chains - Polygon 
                </p>
                <br />
                <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="http://app.localhost:3001/"
                      >
                        Continue to app
                      </a>
              </div>
            </div>
          </div>
        </div>
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
                  <h6 className="text-xl font-semibold">Guard NFTs</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Divide details about your product or agency work into
                    parts. A paragraph describing a feature will be enough.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-sky-400">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Manage/ List on Marketplace</h6>
                  <p className="mt-2 mb-4 text-blueGray-500">
                    Keep you user engaged by providing meaningful information.
                    Remember that by this time, the user is curious.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">Withdraw When Ready</h6>
                  <p className="mt-2 mb-4 text-slate-500">
                    Write a few lines about each one. A paragraph describing a
                    feature will be enough. Keep you user engaged!
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
