import api from "../config";
import axios from "axios";
import Swal from "sweetalert2";

export const getPosts = async() => {
    try {
        const url = `${api}/posts`;
        const response = await axios.get(url);

        return response.data;
    } catch (err) {
        console.error(err);
        if (err.response.status === 404) {
            Swal.fire({
                title: `Error! ${err.response.status}`,
                text: "Post doesn´t exists!",
                icon: "error",
                confirmButtonText: "Ok!",
            });
        }
    }
};

export const getPostById = async(id) => {
    try {
        const url = `${api}/posts/${id}`;
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        console.error(err);
        if (err.response.status === 404) {
            Swal.fire({
                title: `Error! ${err.response.status}`,
                text: "Post doesn´t exists!",
                icon: "error",
                confirmButtonText: "Ok!",
            });
        }
    }
};

export const createPost = async(data) => {
    try {
        const url = `${api}/posts`;
        const response = await axios.post(url, data);

        const posts = await getPosts();

        posts.push(response.data);

        Swal.fire("Done!", "Post Created!", "success");
        console.log(posts);
        return posts;
    } catch (err) {
        console.log(err);
    }
};

export const updatePost = async(data, id) => {
    try {
        const url = `${api}/posts/${id}`;
        await axios.put(url, data).then((res) => console.log(res));
        Swal.fire("Done!", "Post Updated!", "success");
    } catch (err) {
        console.log(err);
    }
};

export const deletePost = async(id, array) => {
    try {
        const url = `${api}/posts/${id}`;
        const response = await axios.delete(url);
        const newData = array.filter((post) => post.id !== id);
        console.log(newData);
        response.data = newData;

        return response.data; // largo 99
    } catch (err) {
        console.error(err);
    }
};