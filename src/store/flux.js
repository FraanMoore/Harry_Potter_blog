export const getState = ({ setStore, getActions, getStore }) => {
    return {
        store: {
            favorite: [],
            user: {
                username: "",
                password: "",
            },
            token: "",
            users: []
        },
        actions: {
            addFavorite: (name) => {
                const { favorite } = getStore();
                if (!favorite.includes(name)) {
                    const newFavorites = [...favorite, name];
                    setStore({ favorite: newFavorites });
                    console.log(newFavorites);
                }
            },
            removeFavorites: name => {
                const store = getStore();
                const newFavorites = store.favorite.filter(item => item !== name);
                setStore({ favorite: newFavorites });
            },
            handleChange: (e) => {
                let { user } = getStore();

                const {
                    target: { value, name },
                } = e;
                setStore({
                    user: {
                        ...user,
                        [name]: value,
                    },
                });
            },
            handleUserRegister: (e) => {
                e.preventDefault();
                const { user } = getStore();
                fetch("http://localhost:8000/users", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(user)
                }).then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
                setStore({
                    user: {
                        username: "",
                        password: "",
                    }
                })
            },
            handleUserLogin: (e) => {
                e.preventDefault();
                const { user } = getStore();
                fetch("http://localhost:8000/login", {
                    headers: {
                        "Content-Type": "application/json"
                    },
                    method: "POST",
                    body: JSON.stringify(user)
                }).then(res => res.json())
                    .then(data => console.log(data))
                    .catch(error => console.log(error))
                setStore({
                    user: {
                        username: "",
                        password: "",
                    }
                })
            },
            getUsers: () => {
                fetch("http://localhost:8000/users/list", {
                    headers:
                    {"Content-Type": "application/json",
                    "Authorization": "Bearer "}
                })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((error) => console.log(error));
            }
        },
    };
};

export default getState;