// const API_BASE_URL = "https://dwf-m9-final.vercel.app/api";
const API_BASE_URL = "http://localhost:3000/api";

export async function fetchAPI(api: RequestInfo, options: RequestInit) {

    const url = API_BASE_URL + api;
    const token = getSavedToken();

    const newOptions: any = options || {};

    if (token) {
        newOptions.headers ||= {}; 
        newOptions.headers.authorization = "Bearer " + token;
        newOptions.headers["content-type"] = "application/json";
    }
    
    try {
        console.log({"ESTA ES LA URL": url}, {"ESTAS SON LAS OPTIONS": newOptions });
        const res = await fetch(url, newOptions);

        if (res.status >= 200 && res.status < 300) {
            const data = await res.json();
            return data;
    
        } else {
            throw {
                message: "Hubo un error en la función fetchAPI",
                status: res.status
            };
        }

    } catch(err) {
        console.log(err);
    }
}

export async function sendCode(loginData) {
    console.log(loginData);

    const codeSended = await fetchAPI("/auth", {
        method: "POST",
        mode: 'cors',
        body: JSON.stringify(loginData),
    }).catch((err) => {
        console.log("ESTE ES EL ERROR: ", err);
    });

    return codeSended;
}

export async function getProductById(id: string) {
    return fetchAPI("/products/" + id, {
        method: "GET",
    });
}

export async function getProductsByQuery(search: string, limit: number, offset: number) {
    
    const data = await fetchAPI("/products?search=" + search + "&limit=" + limit + "&offset=" + offset, {
        method: "GET",
    });
    return data;
}

export async function addProductToCart(productId: string) {

    const data = await fetchAPI(`/user/cart?productId=${productId}`, {
        method: "POST",
    });
    return data;
}

export async function removeProductFromCart(productId: string) {
    
    const data = await fetchAPI(`/user/cart?productId=${productId}`, {
        method: "DELETE",
    });
    return data;
}

export async function createBuyingOrder(productId: string, additionalInfo) {
    const token = getSavedToken();

    return fetchAPI(`/order?productId=${productId}`, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-type": "application/json",
            "Authorization": "Bearer" + token,
        },
        body: JSON.stringify(additionalInfo),
    });
}

export async function getToken(email: string, code: string) {
    const data = await fetchAPI("/auth/token", {
        mode: 'cors',
        method: "POST",
        body: JSON.stringify({
            email,
            code: parseInt(code),
        }),
    });
    saveToken(data.token);
    return "logueado! :D";
}

export function saveToken(token: string) {
    localStorage.setItem("token", token);
}

export function getSavedToken() {
    return localStorage.getItem("token");
}


