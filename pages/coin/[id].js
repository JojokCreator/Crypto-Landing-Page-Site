export const getStaticPaths = async () => {
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
    const id = context.params.id;
    const res = await fetch('https://www.cryptingup.com/api/assets/' + id)
    const data = await res.json()

    return { 
        props: { coin : data}
    }
}

const Details = ({ coin }) => {
    console.log(coin)
    return (
        <div>
            <h1>{ coin.asset.name }</h1>
            <p>{ coin.asset.description }</p>
            <p>Price: { coin.asset.price }</p>
        </div>
    )
}

export default Details