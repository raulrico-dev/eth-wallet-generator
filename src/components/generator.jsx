import { useState } from 'react';
import GeneratorButton from './generator-btn';
import './generator.css';
import ImageHash from '../assets/hash.png'
import ImageHashSm from '../assets/hash-sm.png'
import ExportButton from './export-btn';
import { stringify } from 'postcss';
import { split } from 'postcss/lib/list';

export default function Generator() {
    const [showWallet, setShowWallet] = useState(false);

    // Address
    const [address, setAddress] = useState(null);
    // Private Key
    const [privateKey, setPrivateKey] = useState(null);
    // Mnemonic
    const [mnemonic, setMnemonic] = useState(null);

    const account = {
        address: address,
        privateKey: privateKey,
        mnemonic: mnemonic,
    }

    return (
        <div className="generator-container">
            <div className='copy-wrapper' style={{ marginBottom: "32px" }}>
                <div className='generator-header'>
                    <div className='generator-title'>
                        <h1 className="heading">Wallet Generator</h1>
                        <h2 className="subheading">
                            By:
                            <a href='https://github.com/raulrico-dev' target='_blank' rel='noreferrer noopener' style={{ marginLeft: "4px" }} >
                                Raul Rico
                                <ExternalIcon style={{ marginLeft: "4px", width: "16px", height: "16px" }} />
                            </a>
                        </h2>
                    </div>
                    <div className='generator-actio'>
                        <button
                            className="show-wallet-btn"
                            onClick={() => {
                                setShowWallet(!showWallet);
                            }}
                            disabled={!address}
                        >
                            {showWallet ? (
                                <SeeIcon fill={address ? "var(--color-neutral-light)" : "var(--color-neutral)"} />
                            ) : (
                                <HiddenIcon fill={address ? "var(--color-neutral-light)" : "var(--color-neutral-dark)"} />
                            )
                            }
                        </button>
                    </div>
                </div>
                <div className="wallet-data-wrapper">
                    <div className="data-item">
                        <div className="label">Address</div>
                        <div className="value" style={{ height: "43px" }}>
                            <span>{account.address}</span>
                            <CopyButton data={account.address} />
                        </div>
                    </div>
                    <div className="data-item">
                        <div className="label">Private Key</div>
                        <div className="value" style={{ height: 38 }}>
                            <span className='w-full overflow-hidden'>
                                {privateKey && (showWallet ? (
                                    privateKey
                                ) : (
                                    <img src={ImageHash} className='placeholder' alt='placeholder' style={{ width: "100%", height: "25px" }} />
                                ))}
                            </span>
                            <CopyButton data={privateKey} />
                        </div>
                    </div>
                    <div className='data-item'>
                        <div className="label">Mnemonic</div>
                        <div className="value">
                            <ol className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full p-4 min-h-[160px]'>
                                {mnemonic?.split(' ').map((item, key) => (
                                    !showWallet ? (
                                        <img key={key} src={ImageHashSm} className='placeholder' alt='placeholder' style={{ height: "38px" }} />
                                    ) : (
                                        <li key={key} className='text-sm w-full flex items-center justify-center'>
                                            <span className='p-2 w-full inline-block uppercase'>{key + 1} {" - "} {item}</span>
                                        </li>
                                    )
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex felx-grow justify-center items-center'/>
            {address ? (
                <>
                    <ExportButton data={account} />
                    <br />
                    <a href='/' className=" new-wallet-btn">
                        Create New Wallet
                    </a>'
                </>
            ) : (
                <GeneratorButton
                    setAddress={setAddress}
                    setPrivateKey={setPrivateKey}
                    setMnemonic={setMnemonic}
                />
            )}
        </div>
    )
}

function CopyButton(data) {
    const string = String(data.data);
    return (
        <button
            className="copy-btn"
            onClick={() => {
                navigator.clipboard.writeText(string),
                    console.log('Copied');
            }}
        >
            <CopyIcon fill="var(--color-neutral)" />
        </button>
    )
}
function CopyIcon(params) {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            {...params}
        >
            <path fillRule="evenodd" d="M16 16v4c0 1.152-.848 2-2 2H4c-1.152 0-2-.848-2-2V10c0-1.152.848-2 2-2h4V4c0-1.152.848-2 2-2h10c1.152 0 2 .848 2 2v10c0 1.152-.848 2-2 2zm-2 0h-4c-1.152 0-2-.848-2-2v-4H4v10h10zM10 4v10h10V4z" />
        </svg>
    )
}
function SeeIcon(params) {
    return (
        <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            {...params}
        >
            <path clipRule="evenodd" d="M17.747 15.415c.238-.54.372-1.143.372-1.413 0-2.348-1.824-4.25-4.073-4.25s-4.073 1.902-4.073 4.25 2.037 3.887 4.073 3.887c1.303 0 2.462-.637 3.206-1.63a4.3 4.3 0 0 0 .495-.844m-3.701.349c.51 0 .975-.196 1.332-.518.432-.39.622-.965.622-1.244 0-1.174-.828-2.126-1.954-2.126S12 12.826 12 14c0 .81.92 1.764 2.046 1.764" fillRule="evenodd" />
            <path clipRule="evenodd" d="M1.092 14.272a.45.45 0 0 1 0-.545q.015-.018.028-.039C4.78 8.343 9.32 5.5 14.014 5.5c4.689 0 9.224 2.836 12.882 8.17a.58.58 0 0 1-.01.676C23.23 19.67 18.698 22.5 14.014 22.5c-4.705 0-9.257-2.857-12.922-8.228m2.847-.92a1.04 1.04 0 0 0 0 1.294c3.135 3.898 6.665 5.729 10.075 5.729s6.94-1.83 10.075-5.728a1.04 1.04 0 0 0 0-1.295c-3.135-3.897-6.665-5.727-10.075-5.727s-6.94 1.83-10.075 5.727" fillRule="evenodd" />
        </svg>
    )
}
function HiddenIcon(params) {
    return (
        <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            xmlns="http://www.w3.org/2000/svg"
            {...params}
        >
            <path clipRule="evenodd" d="M22.693 1.55a.794.794 0 0 0-1.093.297l-2.447 4.297c-1.667-.78-3.392-1.18-5.139-1.18-4.693 0-9.233 2.882-12.894 8.3l-.015.021-.012.019a.46.46 0 0 0 0 .552c2.7 4.013 5.884 6.641 9.255 7.746L8.4 25.022a.817.817 0 0 0 .293 1.108l.347.203a.794.794 0 0 0 1.092-.297l13.2-23.176a.817.817 0 0 0-.293-1.108zm-4.601 6.457c-1.357-.597-2.727-.888-4.078-.888-3.41 0-6.94 1.854-10.075 5.805-.3.38-.3.932 0 1.311 2.35 2.962 4.922 4.746 7.499 5.454l1.348-2.366c-1.54-.49-2.813-1.86-2.813-3.741 0-2.38 1.824-4.308 4.073-4.308 1.038 0 1.986.41 2.705 1.087zm-2.453 4.307c-.346-.537-.916-.886-1.593-.886-1.125 0-2.046.963-2.046 2.152 0 .786.843 1.705 1.902 1.782z" fillRule="evenodd" />
            <path d="M14.687 22.176c4.444-.261 8.719-3.107 12.2-8.245A.6.6 0 0 0 27 13.58a.57.57 0 0 0-.104-.335c-1.338-1.977-2.794-3.616-4.33-4.9l-1.06 1.86c.883.76 1.747 1.665 2.583 2.719.301.38.301.932 0 1.311-2.521 3.178-5.299 5-8.064 5.592z" />
        </svg>
    )
}
function ExternalIcon(params) {
    return (
        <svg
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            {...params}
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" /><path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
        </svg>
    )
}
