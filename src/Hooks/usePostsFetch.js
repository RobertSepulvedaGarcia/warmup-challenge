import { useEffect, useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
const usePostFetch = (url) => {
    const [state, setState] = useState([]);
    useEffect(() => {
        Axios.get(url)
            .then((response) => setState(response.data))
            .catch((err) => {
                console.log(err);
                if (err.response.status === 404) {
                    Swal.fire({
                        title: `Error! ${err.response.status}`,
                        text: "Post doesn´t exists!",
                        icon: "error",
                        confirmButtonText: "Ok!",
                    });
                }
            });
    }, [url]);

    return {
        data: state,
    };
};

export default usePostFetch;