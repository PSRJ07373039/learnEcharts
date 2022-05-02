/**
 * 侧边导航关闭折叠控制
 */
function toggleSlide() {
  $('.nav > li > a').on('click', function () {
    let childMenu = $(this).next('ul')
    childMenu.slideToggle(400)
    let icon = childMenu.prev().find('.toggle')
    if (icon.hasClass('open')) {
      icon.removeClass('open').addClass('close')
    } else {
      icon.removeClass('close').addClass('open')
    }
  })
  // 默认第一个菜单展开
  $('.nav > li > a').eq(0).trigger('click')

  // 所有子菜单切换时加背景色
  $('.nav ul a').on('click', function () {
    $(this).addClass('active')
    $('.nav ul a').not($(this)).removeClass('active')
  })
}
toggleSlide()

// 点击学员信息时加载学员数据
$('.nav a[href="./student.html"]').on('click', function () {
  $('iframe').one('load', function () {
    fm.window.init()
  })
})
// 根据id搜索学生信息功能
$('.search button').on('click', function () {
  // 获取输入框值
  const id = $(this).prev().val().trim()
  if (id) {
    // 跳转到学生信息页
    fm.location.assign('./student.html')
    axios.get('/student/one', { params: { id } }).then(({ data: res }) => {
      console.log(res)
      if (res.code === 0) {
        if (res.message === '未查到数据') {
          toastr.warning('未查到相应数据')
        } else {
          // 清空输入框
          $(this).prev().val('')
          // 显示查询到的数据
          $('iframe').one('load', function () {
            fm.window.showData(res.data)
          })
        }
      }
    })
  } else {
    toastr.warning('请输入要查询的id')
    // 清空输入框
    $(this).prev().val('')
  }
})
$('.search input').on('keyup', function (e) {
  if (e.key === 'Enter') $('.search button').click()
})
// 退出功能
$('.logout a').on('click', function () {
  if (confirm('真的要退出吗？')) {
    // 清除本地token
    localStorage.removeItem('token')
    // 跳转到登录页面
    top.location.href = './login.html'
  }
})
// 数据初始化按钮
$('.init').on('click', function () {
  axios.get('/init/data').then(({ data: res }) => {
    console.log(res)
    if (res.code === 0) toastr.success(res.message)
  })
})
