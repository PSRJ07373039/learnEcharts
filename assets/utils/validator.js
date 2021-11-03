// ------------- 各页面表单验证函数库 -------------

// 注册验证  // 登录验证  一样的
function register() {
    return {
        // 表单框里右侧的icon
        // feedbackIcons: {
        //     valid: 'glyphicon glyphicon-ok',
        //     invalid: 'glyphicon glyphicon-remove',
        //     validating: 'glyphicon glyphicon-refresh'
        // },
        fields: {
            username: {
                message: '用户名验证失败',
                validators: {
                    notEmpty: {   //不能为空
                        message: '用户名不能为空.'
                    },
                    stringLength: {   //检测长度
                        min: 2,
                        max: 15,
                        message: '用户名需要2~15个字符'
                    }
                }
            },
            password: {
                message: '密码验证失败',
                validators: {
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {   //检测长度
                        min: 6,
                        max: 15,
                        message: '密码需要6~15个字符'
                    }
                }
            }
        }
    }
}


