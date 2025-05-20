const baseUrl = 'http://localhost:8088/api';

export const ApiEndpoints = {
    baseUrl,

    auth: {
        login: `${baseUrl}/auth/login`,
        register: `${baseUrl}/auth/register`,
        logout: `${baseUrl}/auth/logout`,
    },

    user: {
        profile: `${baseUrl}/users/profile`,
        update: `${baseUrl}/users/update`,
        list: `${baseUrl}/users`, // GET all users
        detail: (id: number) => `${baseUrl}/users/${id}`,
    },

    product: {
        list: `${baseUrl}/products`,
        detail: (id: number) => `${baseUrl}/products/${id}`,
        create: `${baseUrl}/products/create`,
        update: (id: number) => `${baseUrl}/products/${id}/update`,
        delete: (id: number) => `${baseUrl}/products/${id}/delete`,
    },

    // Add other module endpoints below
    order: {
        list: `${baseUrl}/orders`,
        detail: (id: number) => `${baseUrl}/orders/${id}`,
    }
};
