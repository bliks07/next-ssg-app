import { axiosInstance } from '../../axios/axios'

export const getCurrentUserRequest = async (token) =>
    await axiosInstance.get('users', {}, {
        headers: {
            Authorization: 'Bearer ' + token
        }
    })
        .then(function (response) {
            return response
        })
        .catch(function (error) {
            return error.response
        })