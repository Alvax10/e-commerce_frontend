import useSWR from "swr";
import { fetchAPI } from "./api";
import useSWRInmutable from "swr/immutable";
import { useRecoilState, atom } from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export function useMe() {
    try {
        const { data, error } = useSWR("/me", fetchAPI);
        return data?.data;
        
    } catch (err) {
        console.error("Error de useMe: ", err);
    }
}

export function useProduct(productId: string) {
    try {
        // console.log("PRODUCTID: ", productId);
        const { data, error } = useSWRInmutable("/products/" + productId, fetchAPI);
        return data;

    } catch (err) {
        console.error("Error de useProduct: ", err);
    }
}

export function useProducts() {
    try {
        const { data, error } = useSWRInmutable("/products", fetchAPI);
        return data;

    } catch (err) {
        console.error("Error de useProduct: ", err);
    }
}

export function useGetProductsCart() {
    try {
        const { data, error } = useSWR("/user/cart", fetchAPI);
        return data;

    } catch (err) {
        console.error("Error de useProduct: ", err);
    }
}

const productData = atom({
    key: 'productData',
    default: (null as any),
    effects_UNSTABLE: [persistAtom],
});

export const useGetProduct = () => useRecoilState(productData);
