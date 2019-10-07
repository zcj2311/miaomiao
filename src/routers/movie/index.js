export default {
    path: '/movie',
    component: () =>
        import ('@/views/Movie/index'),
    children: [{
            path: 'city',
            component: () =>
                import ('@/components/City/index')
        },
        {
            path: 'nowPlaying',
            component: () =>
                import ('@/components/NowPlaying/index')
        },
        {
            path: 'commingSoon',
            component: () =>
                import ('@/components/CommingSoon/index')
        },
        {
            path: 'search',
            component: () =>
                import ('@/components/Search/index')
        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}