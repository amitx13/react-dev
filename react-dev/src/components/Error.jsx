import { useRouteError } from "react-router-dom";

function Error(){
    const err = useRouteError();
    console.log(err);
    return(
        <>
        <div>Oops!!</div>
        <div>Something Went Wrong</div>
        <div>{err.status + " " + err.statusText}</div>
        <div>{err.data}</div>
        </>
    )
}

export default Error;