import {useRef, useState} from 'react';
import { createWallet } from '../lib/createWallet';
import { Button } from 'react-bootstrap';
import { ethers } from 'ethers';

const Wallet = () => {
    const [wallet, setWallet] = useState<ethers.Wallet | null>(null);
    const [isCopied, setIsCopied] = useState(false);
    const copyButtonRef = useRef<HTMLButtonElement>(null);

    const handleCreateWallet = async () => {
        const walletData = await createWallet();
        const newWallet = new ethers.Wallet(walletData.privateKey);
        setWallet(newWallet);
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(wallet?.privateKey || '').then(() => {
            setIsCopied(true);

            if (copyButtonRef.current) {
                copyButtonRef.current.focus();
            }

            setTimeout(() => {
                setIsCopied(false);
            }, 2000);
        });
    };

    return (
        <div>
            <Button onClick={handleCreateWallet}>Create Ethereum Wallet</Button>
            {wallet && (
                <div>
                    <h3>Wallet Details:</h3>
                    <p>Address: {wallet.address}</p>
                    <p>Private Key: {wallet.privateKey}</p>
                    <Button ref={copyButtonRef} onClick={handleCopyToClipboard}>
                        {isCopied ? 'Copied!' : 'Copy Private Key'}
                    </Button>
                </div>
            )}
        </div>
    );
};

export default Wallet;
