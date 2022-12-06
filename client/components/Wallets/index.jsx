import { useEffect, useState } from "react";
import styles from "./wallets.module.css";

export default function Wallets() {
    const [accounts, setAccounts] = useState([]);
    const [walletAddress, setWalletAddress] = useState("");
    const [balance, setBalance] = useState("");
    
    useEffect(() => {
        getMetamaskAccounts().then((accounts) => {
            setAccounts(accounts);
            setWalletAddress(accounts[0]);
        });
    }, []);

    const getMetamaskAccounts = async () => {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            return accounts;
        }
        return [];
    };

    console.log(accounts);

    useEffect(() => {
        getMetamaskBalance().then((balance) => {
            setBalance(balance);
        });
    }, []);

    const getMetamaskBalance = async () => {
        if (window.ethereum) {
            const balance = await window.ethereum.request({
                method: "eth_getBalance",
                params: [walletAddress, "latest"],
            });
            return balance;
        }
        return [];
    };

    console.log(balance);

    return (
        <div className={styles.div}>
            <div className={styles.nfts}>
                <form className={styles.form}>
                    <h2>Dog Tag</h2>
                    <h2 className={styles.walletDisplay}>{walletAddress}</h2>
                    <h2 className={styles.balanceDisplay}>{balance}</h2>
                </form>
            </div>
        </div>
    );
}