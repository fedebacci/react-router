export default {
    HOME: () => '/',
    ABOUT: () => '/about',
    POSTS: () => '/posts',
    SHOWPOST: (id) => `/posts/${id}`,
    MODIFYPOST: (id) => `/posts/update/${id}`,
}