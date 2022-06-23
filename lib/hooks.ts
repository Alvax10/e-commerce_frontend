import useSWR from "swr";
import { fetchAPI } from "./api";
import useSWRInmutable from "swr/immutable";

export function useMe() {

    const { data, error } = useSWR("/me", fetchAPI);

    if (data?.data) {
        const response = data?.data;
        return response;
    }
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
