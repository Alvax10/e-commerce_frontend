
export async function BFFPage() {

    const response = await fetch("https://m9-desafio.vercel.app/api/products?search=&limit=2&offset=10", {
        method: 'GET',
    });
    const data = await response.json();
    const { hits } = data.result;
    console.log(hits);
    
    return hits;
}
