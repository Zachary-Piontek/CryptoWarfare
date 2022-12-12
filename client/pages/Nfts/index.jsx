import axios from 'axios';
import {useEffect, useState} from 'react';
import Wallets from '../../components/Wallets/index.jsx';
import styles from './nfts.module.css';

export default function Nfts() {
    const [nfts, setNfts] = useState([]);
    const [tokenImage, setTokenImage] = useState([]);
    let walletAddress = '0x8e78706410bfF0F080E63730B58c5DcF4a394E01';
    // place holder for wallet address
    
    const options = {
        method: 'GET',
        url: `https://deep-index.moralis.io/api/v2/${walletAddress}/nft`,
        params: {format: 'decimal', normalizeMetadata: 'false'},
        headers: {accept: 'application/json', 'X-API-Key': 'test'}
    };
    
    useEffect(() => {
        axios.request(options).then(function (response) {
            setNfts(response.data.result);
        }).catch(function (error) {
            console.error(error);
        });
    }
    , []);

    const walletAddresses = () => {
        axios.request(options).then(function (response) {
            setNfts(response.data.result);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const token = nfts.map((nft) => {
        return nft.token_uri.split('/').splice(4);
    })

    // concat token with https://ipfs.io/ipfs/
    const tokenURI = token.map((token) => {
        return 'https://ipfs.io/ipfs/' + token;
    })

    console.log(tokenURI);

    const nftImage = tokenURI.map((tokenURI) => {
        return fetch(tokenURI)
        .then(response => response.json())
        .then(data => console.log(data.image))
    })

    
    return (
        <div className={styles.div}>
            <h1 className={styles.header}>NFTs</h1>
            <form className={styles.form}>
            <input type="text" placeholder="wallet address"/>
            <button type="submit" onClick={walletAddresses}>Submit</button>
            </form>
            <div className={styles.nft}>
                <Wallets />
            </div>
        </div>
    )
}