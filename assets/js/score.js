// -------------- 获取分数，展示列表 ------------
function renderScore() {
    axios.get('/score/list').then(({ data: res }) => {
        // console.log(res);
        let { code, data } = res;
        if (code === 0) {
            let arr = [];

            for (let key in data) {
                arr.push(`
                <tr>
                    <th scope="row">${key}</th>
                    <td>${data[key].name}</td>
                    <td data-batch="1" data-id="${key}" class="score">${data[key].score[0]}</td>
                    <td data-batch="2" data-id="${key}" class="score">${data[key].score[1]}</td>
                    <td data-batch="3" data-id="${key}" class="score">${data[key].score[2]}</td>
                    <td data-batch="4" data-id="${key}" class="score">${data[key].score[3]}</td>
                    <td data-batch="5" data-id="${key}" class="score">${data[key].score[4]}</td>
                </tr>
                `);
            }

            $('tbody').html(arr.join(''))
        }
    })
}
renderScore();


// 可编辑的表格
$('tbody').on('click', '.score', function () {
    let td = $(this);
    if (td.children().length > 0) return;
    let text = td.text();
    td.html('');
    let input = $('<input />');
    input
        .css('color', td.css('color'))
        .css('background-color', td.css('background-color'))
        .css('font-size', td.css('font-size'))
        .css('width', '100%')
        .css('height', '100%')
        .css('outline', 'none')
        .css('border', 'none')
        .val(text)
        .appendTo(td)
        .focus();

    input.on('keyup', function (e) {
        if (e.keyCode === 13) {
            // console.log('ok');
            let score = $(this).val();
            if (isNaN(score) || score < 0 || score > 100) {
                return toastr.warning('请输入0~100之间的数字');
            }
            let stu_id = td.data('id');
            let batch = td.data('batch');
            // console.log(score, stu_id, batch);
            axios.post('/score/entry', { score, stu_id, batch }).then(({ data: res }) => {
                if (res.code === 0) {
                    toastr.success(res.message);
                    td.html(score)
                }
            })
        }
        if (e.keyCode === 27) {
            // ESC键，取消，触发取消焦点事件
            $(this).trigger('blur')
        }
    })
    input.on('blur', function () {
        td.html(text);
    })
})