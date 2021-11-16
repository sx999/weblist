module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '../' : './', 
    publicPath:'',
    // // assetsDir: 'static',
    // // outputDir: 'dist',
    // devServer: {
    //     proxy: {
    //         '/api': {
    //             target: '线上接口地址',
    //             ws: true,
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': '/'  // 根据之前vuejs的配置，用来拿掉URL上的（/api），但是暂时没有什么效果
    //             }
    //         },
    //     }
    // },
    css: {
        loaderOptions: {
            css: {},
                postcss: {
                    plugins: [
                        require('postcss-px2rem')({
                        remUnit: 192
                    })
                ]
            }
        }
    },
   }
   