import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "dummy",
        emai: "dummy@gmail.com",
    },
});

export default UserContext;
