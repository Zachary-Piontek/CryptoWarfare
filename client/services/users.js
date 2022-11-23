const BASE_URL = 'http://localhost:7891/api/v1';

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

export async function signOut() {
    const res = await fetch(`${BASE_URL}/users/sessions`, {
        method: 'DELETE',
        credentials: 'include',
    });
    if (res) {
        console.log('logged out');
    }
}

export const getUser = () => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        credentials: 'include',
        headers: {
        'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    }
    );
};




