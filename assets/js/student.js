axios.get('/student/list').then(({ data: res }) => {
  console.log(res)
  let str = ''
  res.data.forEach((item) => {
    str += `<tr>
    <th scope="row">${item.id}</th>
    <td>${item.name}</td>
    <td>${item.age}</td>
    <td>${item.sex}</td>
    <td>${item.name}</td>
    <td>${item.phone}</td>
    <td>${item.salary}</td>
    <td>${item.truesalary}</td>
    <td>${item.province}${item.city}${item.county}</td>
    <td>
      <button type="button" class="btn btn-primary btn-sm">修改</button>
      <button type="button" class="btn btn-danger btn-sm">删除</button>
    </td>
  </tr> `
  })
  document.querySelector('tbody').insertAdjacentHTML('beforeend', str)
})
