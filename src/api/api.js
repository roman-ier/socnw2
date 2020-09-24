import * as axios from "axios";

export const requestAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    deleteFollow(id) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    postFollow(id) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },
    getProfile(id) {
        return instance.get(`profile/${id}`)

    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }

}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2e948e01-3fcf-4d73-8215-215eb8c32a95"
    }
})