import Link from "next/link";
import styles from "../../styles/list.module.css";

export async function avoidRateLimit() {
    if (process.env.NODE_ENV === 'production') {
      await sleep()
    }
  }
  
  function sleep(ms = 500) {
    return new Promise((res) => setTimeout(res, ms))
  }

export const getStaticProps = async () => {
    await avoidRateLimit()
    const res = await fetch('https://www.cryptingup.com/api/assets?size=10')
    const data = await res.json();

    return { 
        props: { coin : data}
    }
}

const List = ({ coin }) => {
    console.log(coin)
    return (
        <div>
            <h1>Coin</h1>
            {coin.assets.map(user => (
                user.name ?
                <Link href={'/coin/' + user.asset_id} key={user.asset_id}>
                <a className={styles.single}>
                    <h3>{user.name}</h3>
                </a>
                </Link>
                : null
            ))}
        </div>
    );
}

export default List