import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "154e2eb5-b9ad-4a3b-a634-31a34da762dc"
    }
});

export const  usersAPI = {
    getUsers  (currentPage= 1, pageSize=10)  {
       return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
     getFriends (currentPage= 1, pageSize=10) {
        return  instance.get(`users?page=${currentPage}&count=${pageSize}&friend=true`)
            .then(response => {
                return response.data;
            });
    },
    unFollow (id) {
     return    instance.delete(`follow/${id}`)
            .then(response => {
                return response.data;
            });
    },

    follow (id) {
      return   instance.post(`follow/${id}`,{})
            .then(response => {
                return response.data;
            });
    },

    getUser () {
      return  instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}

export const profileAPI = {
    getProfile  (userID)  {
     return instance.get(`profile/${userID}`)
            .then(response => {
                return response.data;
            });
    }
}

