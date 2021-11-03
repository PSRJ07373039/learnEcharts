// 切换两个盒子
$('.box a').on('click', function () {
    $(this).parents('.box').hide().siblings('.box').show();
})

$('.register form').bootstrapValidator(register()).on('success.form.bv', function (e) {
    e.preventDefault();
    //提交逻辑
    // console.log(222);
    let data = $(this).serialize();
    // console.log(data);
    axios.post('/api/register', data).then(({ data: res }) => {
        // console.log(res);
        if (res.code === 0) {
            toastr.success(res.message);
            $('.register').hide().next().show();
        }
    })
});

$('.login form').bootstrapValidator(register()).on('success.form.bv', function (e) {
    e.preventDefault();
    //提交逻辑
    // console.log(222);
    let data = $(this).serialize();
    // console.log(data);
    axios.post('/api/login', data).then(({ data: res }) => {
        // console.log(res);
        if (res.code === 0) {
            toastr.success(res.message);
            localStorage.setItem('token', res.token);
            location.href = './index.html'
        }
    })
});


