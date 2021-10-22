~function () {
  let myChart = echarts.init(document.querySelector('.line'));
  let option = {
    title: {
      text: '销售额'
    },
    legend: {},
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 1232, 301, 1134, 1290, 1630, 520],
        type: 'line',
        smooth: true,
        name: '预期销售额',
      },
      {
        data: [1220, 732, 1101, 534, 1490, 1030, 1520],
        type: 'line',
        smooth: true,
        name: '实际销售额',
      }
    ]
  };
  myChart.setOption(option);
}();

~function () {
  let myChart = echarts.init(document.querySelector('.bar'));
  let option = {
    title: {
      text: '订单量'
    },
    legend: {},
    xAxis: {
      type: 'category',
      data: ['1', '2', '3', '4', '5', '6', '7', 9, 2, 3, 3, 4, 2, 3, 3]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [820, 1232, 301, 1134, 1134, 1290, 1630, 520, 820, 1232, 301, 1134, 1290, 1630, 520],
        type: 'bar',
        barWidth: '40%',
        name: '本月每天订单量',
      }
    ]
  };
  myChart.setOption(option);
}();

~function () {
  let myChart = echarts.init(document.querySelector('.pie'));
  let option = {
    title: {
      text: 'Nightingale Chart',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    series: [
      {
        name: 'Area Mode',
        type: 'pie',
        radius: ['5%', '50%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 3
        },
        data: [
          { value: 30, name: 'rose 1' },
          { value: 28, name: 'rose 2' },
          { value: 26, name: 'rose 3' },
          { value: 24, name: 'rose 4' },
          { value: 22, name: 'rose 5' },
          { value: 20, name: 'rose 6' },
          { value: 18, name: 'rose 7' },
          { value: 16, name: 'rose 8' }
        ]
      }
    ]
  };
  myChart.setOption(option);
}();

