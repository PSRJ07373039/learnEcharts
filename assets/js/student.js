// 功能：渲染数据到页面
function showData(data) {
  document.querySelector('tbody').innerHTML = ''
  let arr = []
  data.forEach((item) => {
    arr.push(`<tr>
    <th scope="row">${item.id}</th>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.sex}</td>
    <td>${item.group}</td>
    <td>${item.phone}</td>
    <td>${item.salary}</td>
    <td>${item.truesalary}</td>
    <td>${item.province}${item.city}${item.county}</td>
    <td>
      <button type="button" class="update btn btn-primary btn-sm" data-index=${item.id} data-bs-toggle="modal" data-bs-target="#updateModal">修改</button>
      <button type="button" class="remove btn btn-danger btn-sm" data-index=${item.id}>删除</button>
    </td>
  </tr> `)
  })
  document.querySelector('tbody').innerHTML = arr.join('')
}
// 读取并显示信息
function init() {
  axios.get('/student/list').then(({ data: res }) => {
    // console.log(res)
    showData(res.data)
  })
}
init()
// 学员信息表单验证
function stuInfo() {
  return {
    fields: {
      name: {
        validators: {
          notEmpty: {
            //不能为空
            message: '姓名不能为空',
          },
          regexp: {
            //正则表达式
            regexp: /^(?:[\u4e00-\u9fa5·]{2,10})$/,
            message: '姓名只能包含汉字，长度在2到10位之间',
          },
        },
      },
      age: {
        validators: {
          notEmpty: {
            //不能为空
            message: '年龄不能为空',
          },
          regexp: {
            regexp: /^[1-9][0-9]$/,
            message: '年龄应为两位数的整数',
          },
        },
      },
      group: {
        validators: {
          notEmpty: {
            //不能为空
            message: '请选择一个组号',
          },
        },
      },
      phone: {
        validators: {
          notEmpty: {
            //不能为空
            message: '手机号不能为空',
          },
          regexp: {
            regexp:
              /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/,
            message: '此号码不存在',
          },
        },
      },
      salary: {
        validators: {
          notEmpty: {
            //不能为空
            message: '期望薪资不能为空',
          },
          regexp: {
            regexp: /^[0-9]{0,2}[1-9][0-9]{2}$/,
            message: '您的期望薪资超出一个打工人的水平',
          },
        },
      },
      truesalary: {
        validators: {
          notEmpty: {
            //不能为空
            message: '实际薪资不能为空',
          },
          regexp: {
            regexp: /^[0-9]{0,2}[1-9][0-9]{2}$/,
            message: '您的实际薪资超出一个打工人的水平',
          },
        },
      },
      province: {
        validators: {
          notEmpty: {
            //不能为空
            message: '省份必填',
          },
        },
      },
      city: {
        validators: {
          notEmpty: {
            //不能为空
            message: '市必填',
          },
        },
      },
      county: {
        validators: {
          notEmpty: {
            //不能为空
            message: '县必填',
          },
        },
      },
    },
  }
}
// 获取省名
function getProvince() {
  axios.get('/geo/province').then(({ data: res }) => {
    let arr = []
    res.forEach((item) => arr.push(`<option value="${item}">${item}</option>`))
    $('select[name="province"]').append('beforeend', arr.join(''))
  })
}
// 获取市名
function getCity(modal, cname = 0) {
  // 重置市、县选择下拉菜单
  modal
    .find('select[name="city"]')
    .html('<option selected value="">--市--</option>')
  modal
    .find('select[name="county"]')
    .html('<option selected value="">--县--</option>')
  // 若省的值不为空，获取市名
  const pname = modal.find('select[name="province"]').val()
  if (pname) {
    axios.get('/geo/city', { params: { pname } }).then(({ data: res }) => {
      let arr = []
      res.forEach((item) =>
        arr.push(`<option value="${item}">${item}</option>`)
      )
      modal.find('select[name="city"]').append('beforeend', arr.join(''))
      // 若有默认市名，则切换当前选项
      if (cname) {
        modal.find(`option[value="${cname}"]`).attr('selected', 'selected')
      }
    })
  }
}
// 获取县名
function getCounty(modal, cname = 0, coname = 0) {
  // 重置县选择下拉菜单
  modal
    .find('select[name="county"]')
    .html('<option selected value="">--县--</option>')
  // 若省、市的值都不为空，获取县名
  const pname = modal.find('select[name="province"]').val()
  // 若未传入市名，则从表单获取
  if (!cname) {
    cname = modal.find('select[name="city"]').val()
  }
  if (pname && cname) {
    axios
      .get('/geo/county', { params: { pname, cname } })
      .then(({ data: res }) => {
        let arr = []
        res.forEach((item) =>
          arr.push(`<option value="${item}">${item}</option>`)
        )
        modal.find('select[name="county"]').append('beforeend', arr.join(''))
        // 若有默认县名，则切换当前选项
        if (coname) {
          modal.find(`option[value="${coname}"]`).attr('selected', 'selected')
        }
      })
  }
}
// 页面加载时获取省名
getProvince()
// 省的值变化时获取市名
$('select[name="province"]').on('change', function () {
  getCity($(this).parents('.modal'))
})
// 市的值变化时获取县名
$('select[name="city"]').on('change', function () {
  console.log($('#addModal select[name="city"]').val())
  console.log($('#addModal select[name="county"]').val())
  getCounty($(this).parents('.modal'))
})
// 添加学员功能
$('#addModal form')
  .bootstrapValidator(stuInfo())
  .on('success.form.bv', function (e) {
    let data = $(this).serialize()
    //   阻止表单提交
    e.preventDefault()
    axios.post('/student/add', data).then(function ({ data: res }) {
      console.log(res)
      // 注册成功
      if (res.code === 0) {
        toastr.success(res.message)
        //   清空输入框
        document.querySelector('#addModal form').reset()
        //   关闭弹窗
        $('#addModal').click()
        // 刷新数据
        init()
      }
    })
  })
// 表单重置时清空市县列表
$('#addModal button[type="reset"]').on('click', function () {
  $('#addModal select[name="city"]').html(
    '<option selected value="">--市--</option>'
  )
  $('#addModal select[name="county"]').html(
    '<option selected value="">--县--</option>'
  )
})
// 删除学员功能
document.querySelector('tbody').addEventListener('click', function (e) {
  // console.log(e.target.className)
  if (e.target.classList[0] === 'remove') {
    if (confirm('确认删除吗？')) {
      axios
        .delete('/student/delete', {
          params: {
            id: e.target.dataset.index,
          },
        })
        .then(({ data: res }) => {
          if (res.code === 0) {
            toastr.success(res.message)
            // 刷新数据
            init()
          }
        })
    }
    // 修改学员信息
  } else if (e.target.classList[0] === 'update') {
    // 获取要修改的学员id，并将该学员信息渲染到修改窗口
    const id = e.target.dataset.index
    axios.get('/student/one', { params: { id } }).then(({ data: res }) => {
      console.log(res)
      const {
        name,
        age,
        group,
        sex,
        phone,
        salary,
        truesalary,
        province,
        city,
        county,
      } = res.data
      $('#updateModal input[name="name"]').val(name)
      $('#updateModal input[name="age"]').val(age)
      $('#updateModal select[name="group"]').val(group)
      $('#updateModal input[name="sex"]').val(sex)
      $('#updateModal input[name="phone"]').val(phone)
      $('#updateModal input[name="salary"]').val(salary)
      $('#updateModal input[name="truesalary"]').val(truesalary)
      $('#updateModal select[name="province"]').val(province)
      getCity($('#updateModal'), city)
      getCounty($('#updateModal'), city, county)
    })
    // 自定义表单提交事件
    $('#updateModal form')
      .bootstrapValidator(stuInfo())
      .on('success.form.bv', function (e) {
        //   阻止表单提交
        e.preventDefault()
        // 获取表单数据
        let data = $(this).serialize()
        // 请求体拼接学员id
        data += id
        axios.put('/student/update', data).then(function ({ data: res }) {
          console.log(res)
          // 修改成功
          if (res.code === 0) {
            toastr.success(res.message)
            //   清空输入框
            document.querySelector('#updateModal form').reset()
            //   关闭弹窗
            $('#updateModal').click()
            // 刷新数据
            init()
          }
        })
      })
  }
})

// 根据id查询学员
/* axios.get('/student/one', { params: { id } }).then(({ data: res }) => {
  showData(res.data)
}) */
