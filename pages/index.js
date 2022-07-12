import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";


export default function Home() {
	return (
		<>
		<Head>
			<title>Site Title</title>
			<meta name="keywords" content="something"/>
		</Head>
			<div className={styles.container}>
				<h1 className={styles.title}>Strong, Safe, Secure</h1>
				<p className={styles.text}>
				Strong security measures, Over 1000 cryptocurrencies to choose from, Earn up to 8% APY on your balance
				</p>
				<div className={styles.btn}>
				<Image src='/googlebutton.png' width={300} height={89} />
				<Image src='/applebutton.png' width={300} height={89} />
				</div>
			</div>
				<Image src='/background.png' width={798} height={734} />
		</>
	);
}
