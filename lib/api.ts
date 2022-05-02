const API_BASE_URL = "https://dwf-m9-final.vercel.app/api";
// const API_BASE_URL = "http://localhost:3000/api";

export async function fetchAPI(api: RequestInfo, options: RequestInit) {

    const url = API_BASE_URL + api;
    const token = getSavedToken();

    const newOptions: any = options || {};

    if (token) {
        newOptions.headers ||= {}; 
        newOptions.headers.Authorization = "Bearer " + token;
        newOptions.headers["Content-type"] = "application/json";
    }
    
    try {
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

export async function updateUserData(userData) {
    console.log("USERDATA FROM FUNCTION updateUserData: ", userData);
    const age = parseInt(userData?.age)

    const dataUpdated = await fetchAPI("/me", {
        method: 'PATCH',
        mode: 'cors',
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            email: userData?.email,
            age,
            username: userData?.username,
        }),

    }).catch((err) => {
        console.error("ERROR DE UPDATE USER DATA: ", err);
    });

    alert("Datos modificados! :D");
    return dataUpdated;
}

export async function updateCertainUserData(certainUserData) {
    console.log("USERDATA FROM FUNCTION certainUserData: ", certainUserData);

    if (certainUserData?.email) {
        
        const certainDataUpdated = await fetchAPI(`/me/email?value=${certainUserData?.email}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                "Content-type": "application/json",
            },
        }).catch((err) => {
            console.error("ERROR DE UPDATE USER DATA: ", err);
        });

        alert("Dato modificado! :D");
        return certainDataUpdated;
    }

    if (certainUserData?.age) {
        
        const certainDataUpdated = await fetchAPI(`/me/age?value=${parseInt(certainUserData?.age)}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                "Content-type": "application/json",
            },
        }).catch((err) => {
            console.error("ERROR DE UPDATE USER DATA: ", err);
        });

        return certainDataUpdated;
    }

    if (certainUserData?.username) {
        
        const certainDataUpdated = await fetchAPI(`/me/username?value=${certainUserData?.username}`, {
            method: 'PATCH',
            mode: 'cors',
            headers: {
                "Content-type": "application/json",
            },
        }).catch((err) => {
            console.error("ERROR DE UPDATE USER DATA: ", err);
        });

        return certainDataUpdated;
    }
}


export async function sendCode(loginData) {

    const codeSended = await fetchAPI("/auth", {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-type": "application/json",
        },
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

    try {
        const data = await fetchAPI(`/user/cart?productId=${productId}`, {
            method: "POST",
        });
        return data;

    } catch (err) {
        return "Falló añadir el producto al carrito: " && err;
    }
}

export async function removeProductFromCart(productId: string) {
    
    const data = await fetchAPI(`/user/cart?productId=${productId}`, {
        method: "DELETE",
    });
    return data;
}

export async function createBuyingOrder(productId: string, additionalInfo) {

    try {
        const order = await fetchAPI(`/order?productId=${productId}`, {
            method: "POST",
            mode: 'cors',
            body: JSON.stringify(additionalInfo),
        });
        return order;

    } catch (err) {
        return "Este es el error de order: " && err;
    }
}

export async function getToken(email: string, code: string) {
    const data = await fetchAPI("/auth/token", {
        mode: 'cors',
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
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


