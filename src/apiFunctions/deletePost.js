import Axios from "axios";
import Swal from "sweetalert2";

export const deletePost = (url, id) => {
    console.log(url, id);
    Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be reverted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yeah!, Destroy it!",
        cancelButtonText: "No way!",
    }).then(async(result) => {
        if (result.isConfirmed) {
            try {
                await Axios.delete(`${url}/${id}`)
                    .then((res) => console.log(res))
                    .catch((err) => console.error("There was an error!", err));
            } catch (error) {
                console.error(error);
            }
            Swal.fire("Done!", "The post was deleted.", "success");
        }
    });

    return;
};