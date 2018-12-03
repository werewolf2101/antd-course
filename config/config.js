export default {
    singular: true,
    plugins: [
        ['umi-plugin-react', {
            // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
        }],
    ],
    //定义路由
    routes: [{
        path: '/',
        component: './HelloWorld',
    }],
}

// https://github.com/ant-design/ant-design-pro/blob/master/config/config.js#L23
    // dynamicImport: {
    //     loadingComponent: './components/PageLoading/index',
    // },
// 这个删了打包一个js。