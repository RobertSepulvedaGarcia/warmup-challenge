import home from "../Pages/home/home";
import newPost from "../Pages/newPost/newPost";
import detailPost from "../Pages/detailPost/detailPost";
export const routes = [{
        path: "/",
        component: home,
    },
    {
        path: "/newPost",
        component: newPost,
    },
    {
        path: "/details",
        component: detailPost,
    },
];