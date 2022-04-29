const tbody = document.querySelector('tbody')
function showData(data) {
  tbody.innerHTML = ''
  let arr = []
  for (let key in data) {
    arr.push(`<tr>
        <th scope="row">${key}</th>
        <td>${data[key].name}</td>
        <td class="score" data-batch=1 data-id=${key}>${data[key].score[0]}</td>
        <td class="score" data-batch=2 data-id=${key}>${data[key].score[1]}</td>
        <td class="score" data-batch=3 data-id=${key}>${data[key].score[2]}</td>
        <td class="score" data-batch=4 data-id=${key}>${data[key].score[3]}</td>
        <td class="score" data-batch=5 data-id=${key}>${data[key].score[4]}</td>
      </tr>`)
  }
  tbody.innerHTML = arr.join('')
}
// 初始化数据
function init() {
  axios.get('/score/list').then(({ data: res }) => {
    showData(res.data)
  })
}
init()
// 点击单元格修改或录入成绩
tbody.addEventListener('click', function (e) {
  if (e.target.className === 'score') {
    //   记录现有的成绩
    let value = e.target.innerHTML
    // 创建输入框并获取焦点
    e.target.innerHTML = `<input type="text" value="${value}" id="change"></input>`
    $('#change').focus()
    $('#change').css({
      border: 'none',
      outline: 'none',
      backgroundColor: 'transparent',
    })
    // 按下回车键，则修改成绩，恢复原状
    $('#change').on('keyup', function (e) {
      if (e.key === 'Enter') {
        let score = $(this).val()
        if (isNaN(score) || score < 0 || score > 100) {
          return toastr.warning('请输入0~100之间的数字')
        }
        let obj = {}
        obj.stu_id = $(this).parent().data('id')
        obj.batch = $(this).parent().data('batch')
        obj.score = score
        axios.post('/score/entry', obj).then(({ data: res }) => {
          if (res.code === 0) {
            toastr.success(res.message)
            $(this).parent().html(score)
          }
        })
      }
    })
    // 失去焦点，则恢复原状
    $('#change').on('blur', function () {
      $(this).parent().html(value)
    })
  }
})
