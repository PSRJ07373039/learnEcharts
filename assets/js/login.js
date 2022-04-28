// 登录和注册界面切换
$(function () {
  $('.box a').on('click', function () {
    $(this).parents('.box').hide().siblings('.box').show()
  })
})
// 注册-验证用户名和密码
function register() {
  return {
    fields: {
      username: {
        validators: {
          notEmpty: {
            //不能为空
            message: '用户名不能为空.',
          },
          stringLength: {
            //检测长度
            min: 2,
            max: 15,
            message: '用户名需要2~15个字符',
          },
        },
      },
      password: {
        validators: {
          notEmpty: {
            message: '密码不能为空',
          },
          stringLength: {
            //检测长度
            min: 6,
            max: 15,
            message: '密码需要6~15个字符',
          },
        },
      },
    },
  }
}
// 注册事件
$('.register form')
  .bootstrapValidator(register())
  .on('success.form.bv', function (e) {
    let data = $(this).serialize()
    //   阻止表单提交
    e.preventDefault()
    axios.post('/api/register', data).then(function ({ data: res }) {
      console.log(res)
      // 注册成功
      if (res.code === 0) {
        toastr.success(res.message)
        //   清空输入框
        $('.register input').val('')
        //   跳转到登录界面
        $('.register').hide().next().show()
        //   账号已存在
      }
    })
  })
// 登录事件
$('.login form')
  .bootstrapValidator(register())
  .on('success.form.bv', function (e) {
    //   阻止表单提交
    e.preventDefault()
    let data = $(this).serialize()
    axios.post('/api/login', data).then(function ({ data: res }) {
      console.log(res)
      // 登录成功
      if (res.code === 0) {
        //   存储token
        localStorage.setItem('token', res.token)
        //   跳转到首页
        location.href = './index.html'
      }
    })
  })
