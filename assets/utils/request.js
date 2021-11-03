// --------------- axios配置文件 ---------------

axios.defaults.baseURL = 'http://www.itcbc.com:8000';
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code === 1) {
        toastr.warning(response.data.message)
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    if (error.response) {
        if (error.response.data.message === '身份认证失败') {
            localStorage.removeItem('token');
            location.href = './login.html'
        } else {
            toastr.error(error.response.data.message)
        }
    }
    return Promise.reject(error);
});