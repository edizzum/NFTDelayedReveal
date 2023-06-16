import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Web3 from 'web3'
import Web3Modal from "web3modal"
import { useState, useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [web3Modal, setWeb3Modal] = useState(null)
  useEffect(() => {
      const newWeb3Modal = new Web3Modal({
        cacheProvider: true, // very important
        network: "testnet",
      });
    
      setWeb3Modal(newWeb3Modal)
    }, [])

  async function connectWallet() {
    const provider = await web3Modal.connect();
  }
    
  return (
    <>
      <Head>
        <title>Create Metamask Integration</title>
        <meta name="description" content="By Ediz Züm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.grid}>
          <button 
          className={styles.card} 
          onClick={ connectWallet }><h2>Connect Wallet &rarr;</h2></button>
        </div>
      </main>
    </>
  )
}
