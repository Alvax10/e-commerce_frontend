
export default async function ProductosDestacados(req, res) {
    const response = await fetch("https://m9-desafio.vercel.app/api/products");
    const data = await response.json();
    const { hits } = data.result;
    const products = hits.slice(0, 4);

    res.json(products);
}