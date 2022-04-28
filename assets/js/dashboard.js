// 班级概览
axios.get('/student/overview').then(({ data: res }) => {
  let { code, data } = res
  if (code === 0) {
    document.querySelector('.total').innerText = data.total
    document.querySelector('.avgSalary').innerHTML = data.avgSalary
    document.querySelector('.avgAge').innerHTML = data.avgAge
    document.querySelector('.proportion').innerHTML = data.proportion
  }
})
// 统计省份/地区人数,保存为echarts需要的格式
function area(arr) {
  const obj = {}
  arr.forEach((item) => {
    obj[item] = obj[item] ? obj[item] + 1 : 1
  })
  // console.log(obj)
  const newArr = []
  for (let k in obj) {
    let item = {}
    item.value = obj[k]
    item.name = k
    newArr.push(item)
  }
  return newArr
}
// 统计各户籍地、经纬度,保存为echarts需要的格式
function homeTown(home) {
  // 保存户籍地经纬度信息
  const coords = {}
  // 保存户籍地人数信息
  const num = []
  const obj = {}
  home.forEach((item) => {
    obj[item[0]] = obj[item[0]] ? obj[item[0]] + 1 : 1
    coords[item[0]] = item[1]
  })
  // console.log(obj)
  // console.log(coords)
  for (let k in obj) {
    let item = {}
    item.value = obj[k]
    item.name = k
    num.push(item)
  }
  return [coords, num]
}
// 获取学员信息
axios.get('student/list').then(({ data: res }) => {
  const names = []
  const salarys = []
  const truesalarys = []
  const areas = []
  const home = []
  res.data.forEach((item) => {
    names.push(item.name)
    salarys.push(item.salary)
    truesalarys.push(item.truesalary)
    areas.push(item.province)
    home.push([item.city, [item.jing, item.wei]])
  })
  // console.log(areas)
  // console.log(home)
  lineChart(names, salarys, truesalarys)
  pieChart(area(areas))
  mapChart(homeTown(home))
})
// 第n次成绩选择
$('.btn').on('click', function () {
  $('#batch').toggle()
})
$('#batch li').on('click', function () {
  let index = $(this).index() + 1
  $('#batch').hide()
  axios
    .get('/score/batch', {
      params: {
        batch: index,
      },
    })
    .then(({ data: res }) => {
      const group = res.data.group
      const avgScore = res.data.avgScore
      const lt60 = res.data.lt60
      const gt60 = res.data.gt60
      const gt80 = res.data.gt80
      barChart(group, avgScore, lt60, gt60, gt80)
    })
})
// 页面加载后，触发第一个li的单击事件
$('#batch li').eq(0).trigger('click')

// 薪水折线图
function lineChart(names, salarys, truesalarys) {
  const option = {
    // 鼠标移入提示
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
        return [pt[0], '10%']
      },
    },
    // 标题
    title: {
      text: '薪资 Salary',
      textStyle: {
        color: '#6d767e',
      },
    },
    // 图例
    legend: {
      top: 20,
    },
    // x轴
    xAxis: {
      type: 'category',
      boundaryGap: false, // x轴两边的留白策略，false表示不留空白
      data: names,
      // data: [
      //   '张三',
      //   '李四',
      //   '张飞',
      //   '赵云',
      //   '狗哥',
      //   '张三',
      //   '李四',
      //   '张飞',
      //   '赵云',
      //   '狗哥',
      //   '张三',
      //   '李四',
      //   '张飞',
      //   '赵云',
      //   '狗哥',
      //   '张三',
      //   '李四',
      //   '张飞',
      //   '赵云',
      //   '狗哥',
      // ],
    },
    // y轴
    yAxis: {
      type: 'value',
      // Y轴类型为value，则留白策略指的是对数据的延伸
      boundaryGap: [0, '50%'],
    },
    // 数据缩放
    dataZoom: [
      {
        type: 'inside', //内置到坐标轴
        start: 0,
        end: 15,
      },
      {
        //type: 'slider',//默认类型
        start: 0,
        end: 15,
      },
    ],
    series: [
      {
        name: '期望薪资',
        type: 'line',
        smooth: true, // 表示使用平滑曲线
        symbol: 'none', // 线上拐点样式
        sampling: 'lttb', // 降采样策略
        itemStyle: {
          color: '#ee6666', //折线颜色
        },
        data: salarys,
        // data:  [
        //   8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000,
        //   8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000,
        // ],
      },
      {
        name: '实际薪资',
        type: 'line',
        smooth: true, // 表示使用平滑曲线
        symbol: 'none', // 线上拐点样式
        sampling: 'lttb', // 降采样策略
        itemStyle: {
          color: '#5470c6', //折线颜色
        },
        data: truesalarys,
        /* data:  [
          9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300,
          9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 13000,
        ], */
      },
    ],
  }
  echarts.init(document.querySelector('.line')).setOption(option)
}
// lineChart()
// 成绩柱状图
function barChart(group, avgScore, lt60, gt60, gt80) {
  const option = {
    // 网格（整个图表区域设置）
    grid: {
      top: 30,
      bottom: 30,
      left: '7%',
      right: '7%',
    },
    // 标题
    /* title: {
      text: '成绩 Score',
      textStyle: {
        color: '#6d767e',
      },
    }, */
    // 提示框
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999',
        },
      },
    },
    // 图例
    legend: {},
    // x轴
    xAxis: [
      {
        type: 'category',
        data: group,
        // data: ['1组', '2组', '3组', '4组', '5组', '6组', '7组'],
        axisPointer: {
          type: 'shadow',
        },
      },
    ],
    // y轴
    yAxis: [
      {
        type: 'value',
        min: 0,
        max: 100,
        interval: 10,
        axisLabel: {
          formatter: '{value} 分',
        },
      },
      {
        type: 'value',
        min: 0,
        max: 10,
        interval: 1,
        axisLabel: {
          formatter: '{value} 人',
        },
      },
    ],
    // 数据部分
    series: [
      {
        name: '平均分',
        type: 'bar',
        barWidth: '15',
        data: avgScore,
        // data: [83, 57, 90, 78, 66, 76, 77, 87, 69, 92, 88, 78],
      },
      {
        name: '低于60分人数',
        type: 'bar',
        yAxisIndex: 1, // Y轴索引，1表示使用第2个Y轴
        barWidth: '15',
        data: lt60,
        // data: [2, 1, 3, 4, 2, 5, 2, 2, 4, 1, 6, 2],
      },
      {
        name: '60到80分之间',
        type: 'bar',
        yAxisIndex: 1, // Y轴索引，1表示使用第2个Y轴
        barWidth: '15',
        data: gt60,
        // data: [1, 4, 2, 4, 5, 2, 1, 3, 3, 2, 2, 4],
      },
      {
        name: '高于80分人数',
        type: 'bar',
        yAxisIndex: 1, // Y轴索引，1表示使用第2个Y轴
        barWidth: '15',
        data: gt80,
        // data: [3, 2, 1, 5, 1, 2, 3, 4, 5, 2, 2, 4],
      },
    ],
  }
  echarts.init(document.querySelector('.barChart')).setOption(option)
}
// barChart()
// 籍贯饼状图
function pieChart(datas) {
  const option = {
    // 标题
    title: {
      text: '籍贯 Hometown',
      textStyle: {
        color: '#6d767e',
      },
    },
    // 提示框
    tooltip: {
      // {a} 表示series中的name
      // {b} 表示数据中的series.data中的name
      // {c} 表示每一项的值
      // {d} 表示百分比
      formatter: '{a} <br />{b} <strong>{c}</strong>人 占比{d}%',
    },
    series: [
      {
        name: '各地学员分布',
        type: 'pie', // pie 表示饼图
        radius: ['10%', '65%'], // 内外圈的半径
        center: ['50%', '50%'],
        roseType: 'area', // area表示面积模式，radius表示半径模式
        itemStyle: {
          borderRadius: 4, // 扇形边缘圆角设置
        },
        data: datas,
        // data: [
        //   { value: 40, name: '北京' },
        //   { value: 38, name: '山东' },
        //   { value: 32, name: '上海' },
        //   { value: 30, name: '江苏' },
        //   { value: 28, name: '河北' },
        //   { value: 26, name: '山西' },
        //   { value: 22, name: '河南' },
        //   { value: 18, name: '辽宁' },
        // ],
      },
    ],
  }
  echarts.init(document.querySelector('.pie')).setOption(option)
}
// pieChart()
// 地图
function mapChart(datas) {
  var geoCoordMap = datas[0]
  // console.log(datas)
  var dataT = datas[1]
  // 中心点
  geoCoordMap['北京'] = [116.4551, 40.2539]

  var GZData = []
  var tempData = ['北京', GZData]

  dataT.map((item, index) => {
    var arr = []
    arr.push(item)
    arr.push({
      name: '北京',
    })
    GZData.push(arr)
  })

  var convertData = function (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i]
      var fromCoord = geoCoordMap[dataItem[0].name]
      var toCoord = geoCoordMap[dataItem[1].name]
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[0].value,
        })
      }
    }
    return res
  }

  var color = ['#00ff78', '#ff971b', '#acff43', '#ff73b7', '#ffff46', '#27bbfe']
  var series = []
  series.push(
    {
      name: tempData[0],
      type: 'lines',
      zlevel: 3,
      symbol: ['none', 'circle'],
      effect: {
        show: true,
        period: 3, //箭头指向速度，值越小速度越快
        trailLength: 0.01, //特效尾迹长度[0,1]值越大，尾迹越长重
        symbolSize: 4, //图标大小
      },
      lineStyle: {
        normal: {
          opacity: 1,
          curveness: 0.4, //曲线的弯曲程度
          color: '#609fd4',
        },
      },
      data: convertData(tempData[1]),
    },
    {
      name: tempData[0],
      type: 'scatter',
      coordinateSystem: 'geo',
      zlevel: 2,
      rippleEffect: {
        brushType: 'stroke',
      },
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}',
        },
      },
      symbolSize: function (val) {
        console.log(val)
        return val[2] / 2
      },
      itemStyle: {
        normal: {
          //                fontSize: 80,
        },
      },
      data: tempData[1].map(function (dataItem) {
        return {
          name: dataItem[0].name,
          value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value]),
        }
      }),
    },
    {
      // 地图气泡
      type: 'effectScatter',
      coordinateSystem: 'geo',
      zlevel: 4,
      symbolSize: 10, //标记大小
      label: {
        normal: {
          show: true,
          position: 'right',
          formatter: '{b}',

          color: 'white',
        },
      },
      itemStyle: {
        normal: {
          color: 'white',
        },
      },
      rippleEffect: {
        scale: 4,
        brushType: 'stroke',
      },
      data: [
        {
          name: tempData[0],
          value: geoCoordMap[tempData[0]],
          visualMap: false,
        },
      ],
    }
  )

  const option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params) {
        if (params.seriesType == 'scatter' && params.name != tempData[0]) {
          return (
            '<br>' +
            params.seriesName +
            ' ---> ' +
            params.data.name +
            '<br />数量：' +
            params.data.value[2]
          )
        } else if (params.seriesType == 'lines') {
          return (
            '<br>' +
            params.data.fromName +
            ' ---> ' +
            params.data.toName +
            '<br />数量：' +
            params.data.value
          )
        } else {
          return params.name
        }
      },
    },
    visualMap: {
      min: 0,
      max: 100,
      calculable: true,
      color: color,
      //            textStyle: {
      //                color: '#fff',
      //            },
      show: false,
    },
    geo: {
      map: 'china',
      zoom: 0.98,
      zlevel: 2,
      label: {
        emphasis: {
          show: false,
        },
      },
      roam: true, //是否允许缩放
      itemStyle: {
        normal: {
          areaColor: '#214278',
          borderColor: '#195BB9', //省市边界线00fcff 516a89
        },
        emphasis: {
          color: '#112246', //悬浮背景
        },
      },
    },
    series: series,
  }
  echarts.init(document.querySelector('.map')).setOption(option)
}
// mapChart()
