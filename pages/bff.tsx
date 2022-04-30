import useSWR from "swr";
const fetcher = (a,b) => fetch(a,b).then(res => res.json());

export default function BFFPage() {
    const { data } = useSWR("/api/productos-destacados", fetcher);
    return data;
}
