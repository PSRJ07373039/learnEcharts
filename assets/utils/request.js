axios.defaults.baseURL = 'http://www.itcbc.com:8000'
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
// 添加响应拦截器
axios.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    if (response.data.code === 1) {
      toastr.warning(response.data.message)
    }
    return response
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.log(error)
    if (error.response) {
      if (error.response.data.message === '身份认证失败') {
        localStorage.removeItem('token')
        location.href = './login.html'
      } else {
        toastr.error(error.response.data.message)
      }
    }
    return Promise.reject(error)
  }
)
