import { useState } from 'react';
import './generator.css';

import { ethers } from "ethers";

// Create wallet button Handler
const createWallet = async () => {
    try {
        const wallet = await ethers.Wallet.createRandom();
        return wallet;
    } catch (error) {
        return error;
    }
}

// Fake Data
const shootData = async () => {
    return {
        "provider": null,
        "address": "0xAa0F6cA2Eef17aE88D82BbE680C561Fe77f1101e",
        "publicKey": "0x039be8709ea1a56a32ffcfa3f8734a9e0e82bdacdb7eb5f3289773058ed22bad6a",
        "privateKey": "0x48626f3b49b37a7ea9e09e184cddf41466b0b795e4e2f7cf0daa9a01296e350c",
        "fingerprint": "0x43abb286",
        "parentFingerprint": "0xc7991c0f",
        "mnemonic": {
            "phrase": "trash unable trust carpet bounce violin parent divide else govern wild transfer",
            "password": "",
            "wordlist": {
                "locale": "en"
            },
            "entropy": "0xe77d8ba69161a7e8a809ff482ca3ec73"
        },
        "chainCode": "0x5fd27f1e77dbf0e146136bf416bad1cd725996d3172e702d574801396fd8f322",
        "path": "m/44'/60'/0'/0/0",
        "index": 0,
        "depth": 5
    }
}

// Wallet Generator Button - Wheres the magic happens
export default function GeneratorButton({setAddress, setMnemonic, setPrivateKey}) {
    const handleCreate = async () => {
        const newWallet = await shootData();

        setAddress(newWallet.address)
        setPrivateKey(newWallet.privateKey);
        setMnemonic(newWallet.mnemonic.phrase);
    }
    return (
        <>
            <button onClick={handleCreate} className="btn primary-btn">
                {"Generate"}
            </button>
        </>
    )
}