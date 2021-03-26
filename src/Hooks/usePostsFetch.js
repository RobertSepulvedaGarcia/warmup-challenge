import { useEffect, useState } from "react";
import Axios from "axios";
const usePostFetch = (url) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        Axios.get(url)
            .then((response) => setState(response.data))
            .catch((err) => console.log(err));
    }, [url]);

    return {
        data: state,
    };
};

export default usePostFetch;