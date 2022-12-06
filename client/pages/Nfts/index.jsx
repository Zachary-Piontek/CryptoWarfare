import axios from 'axios';
import {useEffect, useState} from 'react';
import styles from './nfts.module.css';

export default function Nfts() {
    const [nfts, setNfts] = useState([]);
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

    console.log(nfts);
    console.log(nfts.token_uri);
  
    return (
        <div className={styles.div}>
            <h1 className={styles.header}>NFTs</h1>
            <div className={styles.nfts}>
            <form className={styles.form}>
            <input type="text" placeholder="wallet address"/>
            <button type="submit" onClick={walletAddresses}>Submit</button>
            </form>
                {nfts.map((nft) => (
                    <div className={styles.nft} key={nft.token_id}>
                        <img src={nft.image} alt={nft.name}/>
                        <div className={styles.nftInfo}>
                            <p>{nft.token_uri}</p>
                            <p>{nft.name}</p>
                            <p>{nft.token_id}</p>                
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
