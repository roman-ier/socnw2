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
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append('image', photoFile);
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

    },
    saveProfile(profile) {
        return instance.put(`profile`, profile)

    },
    getProfile(id) {
        return instance.get(`profile/${id}`)

    },
    getAuth() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    },
    postLogin(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    deleteLogout() {
        return instance.delete(`auth/login`);
    }

}


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "2e948e01-3fcf-4d73-8215-215eb8c32a95"
    }
})
