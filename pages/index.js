import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { saveAs } from "file-saver";

export default function Home() {
  
  const tetrioSettings = () => {
    saveAs(
      "config.ttc",
      "config.ttc"
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>rambunctious tetr.io settings</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          RAMBUNCTIOUS <a href="https://tetr.io">Settings</a>
        </h1>

        <button className={styles.button} onClick={tetrioSettings}>
          download .ttc file
        </button>    
          </main>
      </div>

  )
}
