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
        "address": "0xAa2F6ca2Eef17aE88D82BbE680C5e1Fe77f1101e",
        "publicKey": "0x039be8729ea1a96a32ffcfa3f8734a9e0e82bdacdb7eb5f3289773058ed22bad6a",
        "privateKey": "0x48626f3b49b34c7ea0e09e184cddf41466b0b795e4e2f7cf0daa9a01296e350c",
        "fingerprint": "0x43abb386",
        "parentFingerprint": "0xc7941c0f",
        "mnemonic": {
            "phrase": "trash unable trust carpet bounce violin parent divide else govern wild transfer",
            "password": "",
            "wordlist": {
                "locale": "en"
            },
            "entropy": "0xe77d8ba69161a7e8a809ef482ca3ec73"
        },
        "chainCode": "0x5fd27f1e77dbf0e346136bf416bad1cd725964d3172e702d574801396fd8f322",
        "path": "m/44'/60'/0'/0/0",
        "index": 0,
        "depth": 5
    }
}

// Wallet Generator Button - Wheres the magic happens
export default function GeneratorButton({setAddress, setMnemonic, setPrivateKey}) {
    const handleCreate = async () => {
        const newWallet = await createWallet();

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