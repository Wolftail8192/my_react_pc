export const userService = {
    getAll:()=>axiosService.get(urls.users).then(value => value.data)
}