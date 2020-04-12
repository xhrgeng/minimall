module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/api':{
                target:'网址',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}