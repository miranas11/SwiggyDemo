import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Something Went Wrong</h1>
            <h2>Route not Found</h2>
            <h2>
                {err.status} : {err.statusText}{" "}
            </h2>
        </div>
    );
};

export default Error;
