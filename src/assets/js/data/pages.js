export default {
    HOME: () => '/',
    ABOUT: () => '/about',
    POSTS: () => '/posts',
    MODIFYPOST: (id) => `/posts/post/update/${id}`,
    SHOWPOST: (id) => `/posts/post/show/${id}`,
}