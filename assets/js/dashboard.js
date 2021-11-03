// 下拉菜单
$('.bar .btn').on('click', function () {
  $(this).next('ul').toggle();
})

$('.bar .title ul').on('click', function () {
  $(this).hide();
})


// ---------------------------------- Ajax请求数据 ----------------------------------
// 获取班级概况数据
axios.get('/student/overview').then(({ data: res }) => {
  // console.log(res);
  let { code, data } = res;
  if (code === 0) {
    $('.overview .total').text(data.total);
    $('.overview .avgAge').text(data.avgAge);
    $('.overview .avgSalary').text(data.avgSalary);
    $('.overview .proportion').text(data.proportion);
  }
})

// 获取学员信息  ==> 1、提取期望薪资和实际薪资，做折线图;  2、提取地区，做饼图;  3、提取地区和经纬度，做地图
axios.get('/student/list').then(({ data: res }) => {
  let { code, data } = res;
  if (code === 0) {
    // 折线图所需数据
    let lineData = {
      xAxis: [],
      salary: [],
      truesalary: []
    };

    // 饼图所需数据
    let pieArr = [];

    // 地图所需数据
    let geoCoordMap = { '北京市': [116.2529, 39.5420] };
    let BJData = [[
      { name: '北京市' },
      { name: '北京市', value: 200 }
    ]];

    // console.log(data);
    data.forEach(item => {
      lineData.xAxis.push(item.name);
      lineData.salary.push(item.salary);
      lineData.truesalary.push(item.truesalary);

      pieArr.push(item.province);
      geoCoordMap[item.county] = [item.jing, item.wei];
      BJData.push([
        { name: '北京市' },
        { name: item.county, value: 90 }
      ])
    });

    // 计算每个地区的人数
    let pieData = [];
    pieArr.reduce((total, item) => {
      let i;
      if ((i = pieData.findIndex(v => v.name === item)) >= 0) {
        pieData[i].value++;
      } else {
        pieData.push({ value: 1, name: item })
      }
    }, pieData)

    // console.log(pieData);

    // 数据处理好，调用图表函数
    pieChart(pieData);
    lineChart(lineData);
    mapChart(geoCoordMap, BJData);
  }
})

// 按组获取分数，做柱状图
$('#batch a').on('click', function () {
  let batch = $(this).index() + 1;
  axios.get('/score/batch', { params: { batch } }).then(({ data: res }) => {
    let { data, code } = res;
    if (code === 0) {
      // console.log(data);
      barChart(data);
    }
  })
})
$('#batch a').eq(0).trigger('click');


function lineChart({ xAxis, salary, truesalary }) {
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
      data: xAxis,
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
        data: salary,
        type: 'line',
        smooth: true,
        name: '预期薪资',
        symbol: 'none', // 线上的表示，可以是圆、空心圆、箭头、方框等
      },
      {
        data: truesalary,
        type: 'line',
        smooth: true,
        name: '实际薪资',
        symbol: 'none',
      }
    ]
  };
  myChart.setOption(option);
};

function barChart({ avgScore, group, gt60, gt80, lt60 }) {
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
      data: group,
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
        data: avgScore,
        type: 'bar',
        barWidth: '15%',
        name: '平均分',
        yAxisIndex: 0,
      },
      {
        data: lt60,
        type: 'bar',
        barWidth: '15%',
        name: '低于60分人数',
        yAxisIndex: 1,
      },
      {
        data: gt60,
        type: 'bar',
        barWidth: '15%',
        name: '60~80分人数',
        yAxisIndex: 1,
      },
      {
        data: gt80,
        type: 'bar',
        barWidth: '15%',
        name: '80分以上人数',
        yAxisIndex: 1,
      }
    ]
  };
  myChart.setOption(option);
};

function pieChart(pieData) {
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
        name: '人数分布概览',
        type: 'pie',
        radius: ['10%', '60%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 3
        },
        data: pieData
      }
    ]
  };
  myChart.setOption(option);
};





