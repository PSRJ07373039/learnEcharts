// 下拉菜单
$('.bar .btn').on('click', function () {
  $(this).next('ul').toggle();
})

$('.bar .title ul').on('click', function () {
  $(this).hide();
})

~function () {
  let myChart = echarts.init(document.querySelector('.line'));
  let option = {
    title: {
      text: '薪资 Salary',
      textStyle: {
        color: '#6d767e',
      }
    },
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%']; // 设置提示的位置，数组[0] 表示横向位置；纵向始终10%
      },
      // formatter: '{a1} - {b1} - {c1}'
    },
    legend: {},
    xAxis: {
      type: 'category',
      axisTick: {
        alignWithLabel: true, // 刻度线和文字（标签）对齐
      },
      data: ['张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥', '张三', '李四', '小明', '小花', '晓红', '狗哥',]
    },
    yAxis: {
      type: 'value'
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 10
      },
      {
        start: 50,
        end: 100
      }
    ],
    series: [
      {
        data: [820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520],
        type: 'line',
        smooth: true,
        name: '预期薪资',
        symbol: 'none', // 线上的表示，可以是圆、空心圆、箭头、方框等
      },
      {
        data: [1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520, 1220, 732, 1101, 534, 1490, 1030, 1520],
        type: 'line',
        smooth: true,
        name: '实际薪资',
        symbol: 'none',
      }
    ]
  };
  myChart.setOption(option);
}();

~function () {
  let myChart = echarts.init(document.querySelector('.barChart'));
  let option = {
    color: ['#5470c6', '#95d178', '#fac858', '#73c0de'],
    grid: {
      top: 30,
      left: '8%',
      right: '8%',
      bottom: 30
    },
    legend: {},
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['1组', '2组', '3组', '4组', '5组', '6组', '7组', '8组', '9组', '10组']
    },
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
          formatter: '{value}分'
        }
      },
      {
        type: 'value',
        min: 0,
        max: 10,
        interval: 1,
        axisLabel: {
          formatter: '{value}人'
        }
      }
    ],
    series: [
      {
        data: [82, 65, 54, 78, 87, 90, 66, 90, 59, 94],
        type: 'bar',
        barWidth: '15%',
        name: '平均分',
        yAxisIndex: 0,
      },
      {
        data: [3, 2, 4, 3, 1, 0, 3, 6, 2, 1],
        type: 'bar',
        barWidth: '15%',
        name: '低于60分人数',
        yAxisIndex: 1,
      },
      {
        data: [2, 4, 2, 5, 3, 3, 3, 1, 3, 4],
        type: 'bar',
        barWidth: '15%',
        name: '60~80分人数',
        yAxisIndex: 1,
      },
      {
        data: [5, 4, 4, 2, 6, 7, 4, 3, 5, 5],
        type: 'bar',
        barWidth: '15%',
        name: '80分以上人数',
        yAxisIndex: 1,
      }
    ]
  };
  myChart.setOption(option);
}();

~function () {
  let myChart = echarts.init(document.querySelector('.pie'));
  let option = {
    title: {
      text: '籍贯 Hometown',
      textStyle: {
        color: '#6d767e',
      }
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: 'Area Mode',
        type: 'pie',
        radius: ['10%', '60%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 3
        },
        data: [
          { value: 30, name: '北京' },
          { value: 28, name: '河北' },
          { value: 26, name: '山东' },
          { value: 24, name: '山西' },
          { value: 22, name: '河南' },
          { value: 20, name: '甘肃' },
          { value: 18, name: '辽宁' },
          { value: 16, name: '黑龙江' }
        ]
      }
    ]
  };
  myChart.setOption(option);
}();


