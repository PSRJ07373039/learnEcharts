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

function student() {
    return {
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    notEmpty: {
                        message: '姓名不能为空',
                    },
                    stringLength: {
                        min: 2,
                        max: 10,
                        message: '姓名长度2~10位'
                    }
                }
            },
            age: {
                validators: {
                    notEmpty: {
                        message: '年龄不能为空',
                    },
                    greaterThan: {
                        value: 18,
                        message: '年龄不能小于18岁'
                    },
                    lessThan: {
                        value: 60,
                        message: '年龄不能超过60岁'
                    }
                }
            },
            sex: {
                validators: {
                    choice: {
                        min: 1,
                        max: 1,
                        message: '请选择性别'
                    }
                }
            },
            group: {
                validators: {
                    notEmpty: {
                        message: '组号不能为空',
                    },
                    regexp: {
                        regexp: /^\d{1,2}$/,
                        message: '请选择有效的组号'
                    }
                }
            },
            phone: {
                validators: {
                    notEmpty: {
                        message: '手机号不能为空',
                    },
                    regexp: {
                        regexp: /^1\d{10}$/,
                        message: '请填写有效的手机号'
                    }
                }
            },
            salary: {
                validators: {
                    notEmpty: {
                        message: '实际薪资不能为空',
                    },
                    greaterThan: {
                        value: 800,
                        message: '期望薪资不能低于800'
                    },
                    lessThan: {
                        value: 100000,
                        message: '期望薪资不能高于100000'
                    }
                }
            },
            truesalary: {
                validators: {
                    notEmpty: {
                        message: '实际薪资不能为空',
                    },
                    greaterThan: {
                        value: 800,
                        message: '实际薪资不能低于800'
                    },
                    lessThan: {
                        value: 100000,
                        message: '实际薪资不能高于100000'
                    }
                }
            },
            province: {
                validators: {
                    notEmpty: {
                        message: '省份必填',
                    },
                }
            },
            city: {
                validators: {
                    notEmpty: {
                        message: '市必填',
                    },
                }
            },
            county: {
                validators: {
                    notEmpty: {
                        message: '县必填',
                    },
                }
            },
        }
    }
}


