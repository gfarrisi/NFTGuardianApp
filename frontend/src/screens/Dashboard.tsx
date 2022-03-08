import { ReactElement, createContext, useContext, useEffect, useState ,} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Footer from '../components/Footers/Footer';
import NavbarApp from '../components/NavBars/NavbarApp';
import { SectionDivider } from '../components/SectionDivider';
import { WalletStatus } from '../components/WalletStatus';
import { useAccount } from 'wagmi';
import { fetchNFTs } from '../utils/fetchNFTs';
// import { ClipboardIcon } from "@heroicons/react/outline"

// import { ActivateDeactivate } from './components/ActivateDeactivate';
// import { Greeter } from './components/Greeter';
// import { SectionDivider } from './components/SectionDivider';
// import { SignMessage } from './components/SignMessage';
// import { WalletStatus } from './components/WalletStatus';

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`;


// const NftCard = ({ image: string, id: any, title: any, address: any, description: any, attributes: any }) => {
//     return (
//         <div className="w-1/4 mr-3 mb-4 bg-slate-100 rounded-md" >
//             <img className='w-full rounded-t-md' key={id} src={image}></img>
//             <div className="p-3">
//                 <div className="flex mb-3">
//                     <div className="flex-grow">
//                         <h3 className="text-xl">{title}</h3>
//                         <p>{`${id.slice(0, 4)}...${id.slice(id.length - 4)}`}</p>
//                     </div>
//                     <div className="flex mr-3">
//                        <a target="_blank" className="text-blue-700" href={`https://etherscan.io/token/${address}`}>{`${address.slice(0, 4)}...${address.slice(address.length - 4)}`}</a>
//                         <ClipboardIcon onClick={() => navigator.clipboard.writeText(address)} className="h-4 w-4 -mt-1 text-black cursor-pointer"></ClipboardIcon>
//                     </div>
//                 </div>
//                 <p>{description? description.slice(0, 200) : "No Description"}</p>
//             </div>

//             {/*
//                 you can use this data model to populate your cards:
//                 attribute = {
//                     trait_type: "facial_feature"
//                     value: "None v5"
//                 }
//               */}

//             <div className="flex flex-wrap justify-center items-center p-3 ">
//                 {attributes?.length > 0 && attributes.map(attribute => {
//                    return (
//                       <div className="w-1/2 mb-2 flex justify-start flex-col">
//                             <p className="mr-2 font-bold">{attribute.trait_type}:</p>
//                           <p className="text-sm">{attribute.value}</p>
//                        </div>
//                     )
//                 })}
//             </div>
//         </div>
//     )
// }


export function Dashboard(): ReactElement {
  
  // const [{ data: accountData, loading }, disconnect] = useAccount()
  // //const [{ data: accountData, loading }, disconnect] = useAccount()
  // const [NFTs, setNFTs] = useState()
  // const [chain, setBlockchain] = useState("Ethereum")
    
  // useEffect((): void => {
  //   async function getData(): Promise<void> {
  //     console.log("Attempt")
  //     if (accountData) {
  //       const data = await fetchNFTs(accountData.address, setNFTs, chain)
  //       console.log({data})
  //     }
  //   }
  //   getData()
  
  // }, [accountData && accountData.address, chain])

  //  console.log('yp',  accountData, NFTs)


  const [owner, setOwner] = useState("")
  const [contractAddress, setContractAddress] = useState("")
  const [NFTs, setNFTs] = useState([])
  const [chain, setBlockchain] = useState("Ethereum")

  console.log({NFTs})
  return (
    <>
    <NavbarApp />
    <main>
      <div className="relative pt-5 pb-5 flex  min-h-screen-75">
     
      </div>
 <div>
            <header className=' py-24  mb-12 w-full   alchemy'>
                <div className='flex-grow flex justify-end mr-12 mb-12'>
                </div>
                <div className='flex flex-col items-center mb-12'>
                    <div className='mb-16 text-white text-center'>
                        <h1 className='text-5xl  font-bold font-body mb-2'>
                            Alchemy NFT Explorer
                        </h1>
                        <p>Multichain inspector to find NFTs by owner and contract address </p>
                    </div>
                    <div className='flex flex-col items-center justify-center mb-4 w-2/6 gap-y-2 '>
                        <input className="border rounded-sm focus:outline-none py-2 px-3 w-full" value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='Insert your wallet address'></input>
                        <input className="focus:outline-none rounded-sm py-2 px-3 w-full" value={contractAddress} onChange={(e) => setContractAddress(e.target.value)} placeholder='Insert NFT Contract address (optional)'></input>
                        {/* <ChainSelector setBlockchain={setBlockchain} chain={chain}/> */}
                    </div>
                    <div className='w-2/6 flex justify-center'>
                        <button className='py-3 bg-white rounded-sm w-full hover:bg-slate-100' onClick={() => {fetchNFTs(owner, setNFTs, chain, contractAddress)}}>Search</button>
                    </div>
                </div>
            </header>

            <section className='flex flex-wrap justify-center'>
                {
                    NFTs ? NFTs.map((NFT: any) => {
                        
                        return (
                          <h3 className="text-xl">{NFT.value.title}</h3>
                          //  <NftCard key={NFT.value.id + NFT.value.contractAddress} image={NFT.value.image} id={NFT.value.id} title={NFT.value.title} description={NFT.value.description} address={NFT.value.contractAddress} attributes={NFT.value.attributes}></NftCard>
                        )
                    }) : <div>No NFTs found</div>
                }
            </section>
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
