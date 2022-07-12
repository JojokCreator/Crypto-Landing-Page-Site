import { useRouter } from 'next/router'

export async function avoidRateLimit() {
    if (process.env.NODE_ENV === 'production') {
      await sleep()
    }
  }
  
  function sleep(ms = 1000) {
    return new Promise((res) => setTimeout(res, ms))
  }

export const getStaticPaths = async () => {
    await avoidRateLimit()
    const res = await fetch('https://www.cryptingup.com/api/assets?size=10')
    const data = await res.json();

    const paths = data.assets.map(coin => {
        return {
            params: { id: coin.asset_id.toString() }
        }
    })

    return { 
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    await avoidRateLimit()
    const id = context.params.id;
    const res = await fetch('https://www.cryptingup.com/api/assets/' + id)
    const data = await res.json()

    return { 
        props: { coin : data}
    }
}

const Details = ({ coin }) => {
    const router = useRouter() 
    console.log(coin)
    return (
        <div>
        if (router.isFallback) {
            <div>Loading...</div>
          }
            <h1>{ coin.asset.name }</h1>
            <p>{ coin.asset.description }</p>
            <p>Price: { coin.asset.price }</p>
        </div>
    )
}

export default Details