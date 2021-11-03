// 获取省
axios.get('/geo/province').then(({ data: res }) => {
    // console.log(res);
    let arr = ['<option selected value="">--省--</option>'];
    res.forEach(item => {
        arr.push(`<option value="${item}">${item}</option>`)
    });
    $('select[name=province]').html(arr.join(''))
})

// 省切换的时候，选择市
$('select[name=province]').on('change', function () {
    // 重置县
    $('select[name=county]').html(`<option selected value="">--县--</option>`);
    let pname = $(this).val();
    axios.get('/geo/city', { params: { pname } }).then(({ data: res }) => {
        // console.log(res);
        let arr = ['<option selected value="">--市--</option>'];
        res.forEach(item => {
            arr.push(`<option value="${item}">${item}</option>`)
        });
        $('select[name=city]').html(arr.join(''))
    })
})

// 市切换的时候，选择县
$('select[name=city]').on('change', function () {
    let pname = $(this).parents('.col-sm-3').prev().find('select').val();
    let cname = $(this).val();
    axios.get('/geo/county', { params: { pname, cname } }).then(({ data: res }) => {
        // console.log(res);
        let arr = ['<option selected value="">--县--</option>'];
        res.forEach(item => {
            arr.push(`<option value="${item}">${item}</option>`)
        });
        $('select[name=county]').html(arr.join(''))
    })
})

// 获取学员数据
function renderStudent() {
    axios.get('/student/list').then(({ data: res }) => {
        // console.log(res);
        if (res.code === 0) {
            let arr = [];
            res.data.forEach(item => {
                arr.push(`
                <tr>
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
                    <button data-id="${item.id}"" type="button" class="btn btn-primary btn-sm update">修改</button>
                    <button data-id="${item.id}" type="button" class="btn btn-danger btn-sm del">删除</button>
                    </td>
                </tr>
                `);
            });
            $('tbody').html(arr.join(''))
        }
    })
}
renderStudent();

// 添加学生
$('.add-form').bootstrapValidator(student()).on('success.form.bv', function (e) {
    e.preventDefault();
    //提交逻辑
    // console.log(222);
    let data = $(this).serialize();
    // console.log(data);
    axios.post('/student/add', data).then(({ data: res }) => {
        // console.log(res);
        if (res.code === 0) {
            toastr.success(res.message);
            renderStudent();
            $('#addModal').modal('hide')
        }
    })
});

// 删除学员
$('tbody').on('click', '.del', function () {
    if (!confirm('你确定要删除吗？')) return;
    let id = $(this).data('id');
    axios.delete('/student/delete', { params: { id } }).then(({ data: res }) => {
        if (res.code === 0) toastr.success(res.message); renderStudent();
    })
})

// 修改学员 --- 数据回填
$('tbody').on('click', '.update', function () {
    let id = $(this).data('id');
    axios.get('/student/one', { params: { id } }).then(({ data: res }) => {
        if (res.code === 0) {
            console.log(res.data);
            let { name, age, sex, group, phone, id, salary, truesalary, province, city, county } = res.data;
            $('#updateModal input[name=id]').val(id);
            $('#updateModal input[name=name]').val(name);
            $('#updateModal input[name=age]').val(age);
            $('#updateModal input[name=sex][value=' + sex + ']').prop('checked', true);
            $('#updateModal input[name=phone]').val(phone);
            $('#updateModal input[name=salary]').val(salary);
            $('#updateModal input[name=truesalary]').val(truesalary);
            $('#updateModal select[name=group]').children('[value=' + group + ']').prop('selected', true);
            $('#updateModal select[name=province]').children('[value=' + province + ']').prop('selected', true);
            $('#updateModal select[name=city]').html(`<option value="${city}">${city}</option>`);
            $('#updateModal select[name=county]').html(`<option value="${county}">${county}</option>`);

            $('#updateModal').modal('show');
        }
    })
})

// 修改学员 --- 确认修改
$('.update-form').bootstrapValidator(student()).on('success.form.bv', function (e) {
    e.preventDefault();
    //提交逻辑
    // console.log(222);
    let data = $(this).serialize();
    // console.log(data);
    axios.put('/student/update', data).then(({ data: res }) => {
        // console.log(res);
        if (res.code === 0) {
            toastr.success(res.message);
            renderStudent();
            $('#updateModal').modal('hide')
        }
    })
});

