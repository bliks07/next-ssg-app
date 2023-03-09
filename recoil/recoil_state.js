import { atom, selector } from "recoil"

const currentUserState = atom({
    key: "currentUserState",
    default: 1
})

const currentUserQuery = selector({
    key: 'currentUserQuery',
    get: async ({ get }) => {
        const response = await fetch('https://gorest.co.in/public/v2/users')
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })

        if (response.error) {
            throw response?.error;
        }
        return response;
    },
});

export {
    currentUserState,
    currentUserQuery
}
