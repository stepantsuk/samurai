import * as axios from "axios";
// import { follow, unfollow } from './../redux/usersReducer';


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    "API-KEY": '15aee2ab-2811-4194-9d22-fd4b67f44b29',
  },
});

export const userAPI = {
  getUsers(currentPage, pageSize) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
      return response.data;
    })
  },
  followUser(id) {
    return instance.post(`follow/${id}`)
  },
  unfollowUser(id) {
    return instance.delete(`follow/${id}`)
  },
  getProfile(userId) {
    return instance.get(`profile/`+userId)
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
};

/*
export const getUsers = (currentPage, pageSize) => {
  return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
    return response.data;
  })
};
*/


/*
export const unFollowUser = (id) => {
  return instance.delete(`follow/${id}`).then(response => {
    if (response.data.resultCode === 0) {
      unfollow(id);
    }
  })
};

export const followUser = (id) => {
  return instance.post(`follow/${id}`,{},).then(response => {
    if (response.data.resultCode === 0) {
      follow(id);
    }
  })
};
*/


