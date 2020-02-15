// 引用 npm ip包，用来获取本地ip等操作，文档地址：https://www.npmjs.com/package/ip
const ip = require('ip')
// 引用path包(path属于node自带包，无需在package.json中引用安装即可直接引用)，用来操作路径，文档地址：https://nodejs.org/docs/latest/api/path.html
const path = require('path')
// 引用 npm html-webpack-inline-plugin包，用来将html中inline标识的<script>,<link>,<img>标签的元素内容压缩进html中
const HtmlWebpackInlinePlugin = require('html-webpack-inline-plugin')
// 引用 npm filemanager-webpack-plugin包，用来操作文件，允许复制，归档成 (.zip/.tar/.tar.gz)，移动，删除文件和目录在构建前或者构建前， 文档地址：https://www.npmjs.com/package/filemanager-webpack-plugin
const FileManagerPlugin = require('filemanager-webpack-plugin')
// 判断时候是生产环境
const isProd = process.env.NODE_ENV === 'production'
// 定义一些公用参数，以供项目中使用
const pluginOptions = {
    // 项目名，定义成我们在云平台申请的应用名，类似 ***.vivo.com.cn
    projectName: 'website',
    // 本地ip
    host: ip.address(),
    // 定义端口
    port: 8080,
    // 登录的地址，需要一个client_id
    // loginPath: 'https://psport.deio.com.cn/v3/web/login/authorze?client_id={client_id}',
    // 埋点上报的地址
    // stPath: 'https://st-demss.reso.com.cn',
    // CDN域名，在云平台申请到的项目静态资源域名
    // cdnPath: '/'
}

// vue.config.js导出的配置项
module.exports = {
    pluginOptions,
    // 测试服务启动时显示的ip,端口,代理配置
    devServer: {
        // host: pluginOptions.host,
        port: pluginOptions.port,
        public: `${pluginOptions.host}:${pluginOptions.port}`,
        // 默认会自动打开浏览器
        open: true,
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://test.marstech.com/api',
                changeOrigin: true,
                secure: false,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },

    //木易杨@:
// 部署应用包时的基本 URL,生成环境使用的是公用参数中的cdnPath
    publicPath: isProd
        ? pluginOptions.cdnPath : '/',
    lintOnSave: true,
    // 是否生成sourcemap文件，生成环境不生成以加速生产环境构建
    productionSourceMap: !isProd,
    // 静态资源文件的目录
    assetsDir: 'static',
    // css是否开启sourcemap,生成环境不生成
    css: {
        sourceMap: !isProd
    },
    configureWebpack: config => {
        config.optimization && (config.optimization.splitChunks.minSize = 10000)
        config.plugins.push(
            new HtmlWebpackInlinePlugin()
        )
        if (isProd) {
            config.plugins.push(
                // Webpack完成捆绑过程后要执行的命令：删除dist目录下ignore目录，prod-md5-zip目录
                new FileManagerPlugin({
                    onEnd: [{
                        delete: [`./dist/ignore`,
                            './prod-md5-zip'
                        ]
                    }]
                })
            )
        }
        // 单个asset静态资源文件的大小最大为409600B==>400KB,超过400KB则会给出警告
        config.performance = {
            maxAssetSize: 1024 * 400
        }
    },
    chainWebpack: config => {
        config.plugin('html').tap(args => {
                // 将系统配置信息注入到HtmlWebpackInlinePlugin
                Object.assign(args[0], pluginOptions)
                // 设置页面标题的icon
                args[0].favicon = path.join(__dirname, './src/assets/logo.png')
                return args
            })
        config.plugin('define').tap(args => {
            args[0]['CONFIG'] = JSON.stringify(pluginOptions)
            return args
        })

    }
}
