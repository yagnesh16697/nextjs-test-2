import Head from "next/head";
import Image from "next/image";
import FileUpload from "react-material-file-upload";
import styles from "../styles/Home.module.css";
import { useState } from "react";
export default function Home() {
  const [files, setFiles] = useState();

  return (
    <div className={styles.container}>
      <Head>
        <title> Myboeken.nl</title>
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className={styles.description}>
          CSV File Upload for Diamond Publisher
          <span>
            <Image
              src="/logo.svg"
              alt="Myboeken Logo"
              width={120}
              height={20}
            />
          </span>
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FileUpload value={files} onChange={setFiles} />
      </div>

      <footer className={styles.footer}>
        <a href="https://myboeken.nl" target="_blank" rel="noopener noreferrer">
          Powered by
          <Image src="/logo.svg" alt="Myboeken Logo" width={100} height={80} />
        </a>
      </footer>
    </div>
  );
}
