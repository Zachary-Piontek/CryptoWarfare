// const BASE_URL = 'http://localhost:7891/api/v1';
// use this for local
const BASE_URL = '/api/v1';


export async function signUp(user) {
    const res = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(user),
    });
    const data = await res.json();
    if (res.ok) {
        const user = data;
        console.log(user);
        return user;
    } else {
        console.error(data.message);
    }
}

export async function signIn(user) {
    const res = await fetch(`${BASE_URL}/users/sessions`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(user),
    });
    const data = await res.json();
    if (res.ok) {
        const user = data;
        console.log(user);
        return user;
    }   else {
        console.error(data.message);
    }
}


export const getUser = async () => {
    const res = await fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    return await res.json()
}

export async function signOut() {
    const res = await fetch(`${BASE_URL}/users/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (res) {
        console.log('logged out');
    }
}

export async function getUserFavorites() {
    const res = await fetch(`${BASE_URL}/favorites/userfavorites`, {
        method: 'GET',
        credentials: 'include',
    })

    return await res.json()
}

export async function getUserFavoritesData() {
    const res = await fetch(`${BASE_URL}/favorites/coins/userfavorites`, {
        method: 'GET',
        credentials: 'include',
    })
    return await res.json()
}

export async function addCoinToUserFavorites(coin_id) {
    const res = await fetch(`${BASE_URL}/favorites/add/userfavorites`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ coin_id }),
    })

    return await res.json()
}

export async function addTotalToUserFavorites(total) {
    const res = await fetch(`${BASE_URL}/favorites/add/total/userfavorites`, {
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ total }),
    })

    return await res.json()
}