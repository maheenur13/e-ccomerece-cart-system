export class BaseAPI {
    baseURL;

    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async get(url) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
            },
        });

        return await res.json();
    }

    async post(url, payload) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
        });
        return await res.json();
    }

    async put(url, payload) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    }

    async delete(url, payload) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(payload),
        });

        return await res.json();
    }

    async image(url, payload) {
        const res = await fetch(`${this.baseURL}/${url}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: payload,
        });

        return await res.json();
    }
}