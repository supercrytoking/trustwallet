// import React, { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import { useWeb3React } from '@web3-react/core'
// import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useParams } from "react-router-dom";

import img1 from '../assets/images/icon/connect-1.png'
// import img2 from '../assets/images/icon/connect-2.png'
// import img3 from '../assets/images/icon/connect-3.png'
// import img4 from '../assets/images/icon/connect-4.png'
// import img5 from '../assets/images/icon/connect-5.png'
// import img6 from '../assets/images/icon/connect-6.png'
// import img7 from '../assets/images/icon/connect-7.png'
// import img8 from '../assets/images/icon/connect-8.png'
import img9 from '../assets/images/icon/connect-9.png'
import {isMobile} from 'react-device-detect';
// import * as rdd from 'react-device-detect'

// const CoinbaseWallet = new WalletLinkConnector({
//     url: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
//     appName: "Web3-react Demo",
//     supportedChainIds: [1, 3, 4, 5, 42],
// });
   
const WalletConnect = new WalletConnectConnector({
    rpcUrl: `https://mainnet.infura.io/v3/${process.env.INFURA_KEY}`,
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});
   
const Injected = new InjectedConnector({
    supportedChainIds: [1, 3, 4, 5, 42],
    id: "injected",
    name: "MetaMask",
    type: "injected",
    check: "isMetaMask",
});

const Wallet = () => {
    const { activate, deactivate, active, chainId, account } = useWeb3React();
    const { type } = useParams();

    //if ( (isMobile&&type) === "deeplink" && window.localStorage.getItem("type")!=="deeplink" ) {
    if ( isMobile&&type === "deeplink" ) {
        window.localStorage.setItem("type",  "deeplink");
        activate(Injected);                
    } 

    // const [network, setNetwork] = useState(undefined);
    // const [message, setMessage] = useState("");
    // const [signature, setSignature] = useState("");
    // const [verified, setVerified] = useState();

    const refreshState = () => {
        window.localStorage.setItem("provider", undefined);
        // setNetwork("");
        // setMessage("");
        // setSignature("");
        // setVerified(undefined);
    };
    
    const disconnect = () => {
        refreshState();
        deactivate();
        //window.localStorage.setItem("type", "");
    };

    const metamaskConnect = () => {
        if (isMobile){
            if (type === "deeplink") {
                activate(Injected);                
            } else {
                var obj = document.getElementById("link").click();
                activate(Injected, obj);
            }
        } else {
            activate(Injected);        
        }     
    };

    // const [data] = useState(
    //     [
    //         {
    //             img: img1,
    //             title: 'Meta Mask',
    //             connector: Injected,
    //             // description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt'
    //         },
    //         {
    //             img: img9,
    //             title: 'Trust Wallet',
    //             connector: WalletConnect,
    //             // description: ' Dolor lacinia? Donec nulla, deleniti, dis arcu pharetra maecenas dapibus ante nemo! Wisi?'
    //         },
    //         // {
    //         //     img: img3,
    //         //     title: 'Fortmatic',
    //         //     connector: Injected,
    //         //     // description: 'Potenti eleifend faucibus quo vero nibh netus suspendisse unde? Consectetuer aspernatur'
    //         // },
    //         // {
    //         //     img: img4,
    //         //     title: 'Wallet Connect',
    //         //     connector: WalletConnect,
    //         //     // description: 'Metus corrupti itaque reiciendis, provident condimentum, reprehenderit numquam, mi'
    //         // },
    //         // {
    //         //     img: img5,
    //         //     title: 'Coinbase Wallet',
    //         //     connector: CoinbaseWallet,
    //         //     // description: 'Sollicitudin iure conubia vivamus habitasse aptent, eligendi deserunt excepteur tellus non'
    //         // },
    //         // {
    //         //     img: img6,
    //         //     title: 'Authereum',
    //         //     connector: Injected,
    //         //     // description: 'Purus irure lacinia eiusmod inventore bibendum habitant potenti non sint rem! Felis, asper'
    //         // },
    //         // {
    //         //     img: img7,
    //         //     title: 'Kaikas',
    //         //     connector: Injected,
    //         //     // description: 'Varius culpa, aspernatur accusantium? Corporis rhoncus, voluptatibus incididunt, velit '
    //         // },
    //         // {
    //         //     img: img8,
    //         //     title: 'Torus',
    //         //     connector: Injected,
    //         //     // description: ' Soluta fuga nihil, mollitia, ad reprehenderit qui viverra culpa posuere labore inventore'
    //         // },
    //         // {
    //         //     img: img9,
    //         //     title: 'Torus',
    //         //     connector: Injected,
    //         //     // description: ' Soluta fuga nihil, mollitia, ad reprehenderit qui viverra culpa posuere labore inventore'
    //         // },
    //     ]
    // )
    return (
        <div>
            <Header />
            <section className="flat-title-page inner">
                <div className="overlay"></div>
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-heading mg-bt-12">
                                <h1 className="heading text-center">Connect Wallet</h1>
                            </div>
                            <div className="breadcrumbs style2">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="#">Pages</Link></li>
                                    <li>Connect Wallet</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <a href="https://metamask.app.link/dapp/main--musical-brioche-b78875.netlify.app/wallet/deeplink" id="link" style={{display:'none'}}>Metamask</a>
            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-2 mg-bt-12">
                                {!active?<span>Connect Your Wallet</span>:<span>Wallet Connected!</span>}                        
                            </h2>
                        </div>
                        <div className="col-md-12">
                            {!active?
                            <div className="sc-box-icon-inner style-2">                                
                                {/* {
                                    data.map((item, index) => (
                                        <div key={index} className="sc-box-icon" onClick={() => { activate(item.connector) }}>
                                            <div className="img">
                                                <img src={item.img} alt="Axies" />
                                            </div>
                                            <h4 className="heading"><Link to="/wallet">{item.title}</Link> </h4>
                                            <p className="content">{item.description}</p>
                                        </div>
                                    ))
                                } */}
                                <div className="sc-box-icon" onClick={() => { isMobile? metamaskConnect() : activate(Injected) }}>
                                    <div className="img">
                                        <img src={img1} alt="Axies" />
                                    </div>
                                    <h4 className="wallet-link">Metamask</h4>
                                    <p className="content"></p>
                                </div>
                                <div className="sc-box-icon" onClick={() => { activate(WalletConnect) }}>
                                    <div className="img">
                                        <img src={img9} alt="Axies" />
                                    </div>
                                    <h4 className="wallet-link">Trust Wallet</h4>
                                    <p className="content"></p>
                                </div>
                            </div>
                            :
                            <div className="sc-box-icon style-2">    
                                <div className="mg-bt-12"><h4 className="">Account: {account}</h4></div>                            
                                <div className="mg-bt-12"><h4 className="">Network ID: {chainId}</h4></div>
                                <div className="mg-bt-12"><button type="button" className="submit" onClick={disconnect}>Disconnect</button></div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Wallet;
