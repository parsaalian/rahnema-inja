var bs = require('browser-sync').create();
var proxyMiddleware = require('http-proxy-middleware');
var str = ['/api1','/api2','/images'];
//var middleware = proxyMiddleware(str, {target: 'http://192.168.11.185:80', changeOrigin: 'localhost'});
//var middleware = proxyMiddleware(str, {target: 'http://localhost:53140', changeOrigin: 'localhost'});
var middleware = proxyMiddleware(str, {target: 'http://192.168.10.129/', changeOrigin: 'localhost'});
bs.init({
    server:{
        baseDir: '.',
        middleware: middleware,
    },
    files: ['.']
})

//ssh -p 13123 ninja@46.209.158.18 -L 53140:127.0.0.1:80