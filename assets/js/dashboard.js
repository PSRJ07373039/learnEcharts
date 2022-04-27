// 薪水折线图
const optionLine = {
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
    data: [
      '张三',
      '李四',
      '张飞',
      '赵云',
      '狗哥',
      '张三',
      '李四',
      '张飞',
      '赵云',
      '狗哥',
      '张三',
      '李四',
      '张飞',
      '赵云',
      '狗哥',
      '张三',
      '李四',
      '张飞',
      '赵云',
      '狗哥',
    ],
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
      //smooth: true, // 表示使用平滑曲线
      symbol: 'none', // 线上拐点样式
      sampling: 'lttb', // 降采样策略
      itemStyle: {
        color: '#ee6666', //折线颜色
      },
      data: [
        8300, 9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300,
        9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000,
      ],
    },
    {
      name: '实际薪资',
      type: 'line',
      //smooth: true, // 表示使用平滑曲线
      symbol: 'none', // 线上拐点样式
      sampling: 'lttb', // 降采样策略
      itemStyle: {
        color: '#5470c6', //折线颜色
      },
      data: [
        9600, 15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 8300, 9600,
        15000, 17000, 12000, 8300, 9600, 15000, 17000, 12000, 13000,
      ],
    },
  ],
}
echarts.init(document.querySelector('.line')).setOption(optionLine)
