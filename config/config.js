export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
            antd: true
        }],
    ],

    //定义路由 Card
    // routes: [{
    //     path: '/',
    //     component: './HelloWorld',
    // }],

    //定义路由 基本布局
    // routes: [{
    //     path: '/',
    //     component: '../layout',
    //     routes: [
    //         {
    //             path: 'helloworld',
    //             component: './HelloWorld'
    //         },
    //     ]
    // }],

    //路由配置
    // 访问 / 下面的路由的时，使用 page 文件夹下的 ../layout 布局文件渲染页面，默认展示Helloworld组件
    //
    // 访问 /dashboard/analysis 时，使用 page 文件夹下的 Dashboard/Analysis 组件渲染到 layout 文件中 children 部分
    //
    // 访问 /dashboard/monitor 时，使用 page 文件夹下的 Dashboard/Monitor 组件渲染到 layout 文件中 children 部分
    //
    // 访问 /dashboard/workplace 时，使用 page 文件夹下的 Dashboard/Workplace 组件渲染到 layout 文件中 children 部分
    routes: [{
        path: '/',
        component: '../layout',
        routes: [
            {
                path: '/',
                component: 'Helloworld',
            },
            {
                path: '/helloworld',
                component: 'Helloworld'
            },
            {
                path: '/dashboard',
                routes: [
                    { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
                    { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
                    { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
                ]
            },
        ]
    }],
}

// https://github.com/ant-design/ant-design-pro/blob/master/config/config.js#L23
    // dynamicImport: {
    //     loadingComponent: './components/PageLoading/index',
    // },
// 这个删了打包一个js。