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
            path: 'detail/1/:movieId',
            components: {
                default: () =>
                    import ('@/components/NowPlaying'),
                detail: () =>
                    import ('@/views/Movie/detail')
            },
            props: {
                detail: true
            },
        },
        {
            path: 'detail/2/:movieId',
            components: {
                default: () =>
                    import ('@/components/CommingSoon'),
                detail: () =>
                    import ('@/views/Movie/detail')
            },
            props: {
                detail: true
            }
        },
        {
            path: '/movie',
            redirect: '/movie/nowPlaying'
        }
    ]
}