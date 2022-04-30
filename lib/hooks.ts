import useSWR from "swr";
import { fetchAPI } from "./api";
import useSWRInmutable from "swr/immutable";
import { useRecoilState, atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export function useMe() {

    const { data, error } = useSWR("/me", fetchAPI);
    const response = data ? data?.data : null;
    return response;
}

export function useProduct(productId: string) {

    const { data, error } = useSWRInmutable("/products/" + productId, fetchAPI);
    const response = data ? data : null;
    return response;
}

export function useProducts() {
    
    const { data, error } = useSWRInmutable("/products", fetchAPI);
    const response = data ? data : null;
    return response;
}

export function useGetProductsCart() {

    const { data, error } = useSWR("/user/cart", fetchAPI);
    const response = data ? data : null;
    return response;
}

const productData = atom({
    key: 'productData',
    default: (null as any),
    effects_UNSTABLE: [persistAtom],
});

export const useGetProduct = () => useRecoilState(productData);
