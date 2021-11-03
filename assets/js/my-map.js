// var geoCoordMap = {
//     '新疆玛纳斯基地': [86.22, 44.30],
//     '九江': [116.00, 29.70],
//     '新乡': [116.402217, 35.311657],
//     ' ': [79.92, 37.12],
//     '  ': [86.85, 47.70],
//     '若羌县': [88.17, 39.02],
//     '上海': [121.4648, 31.2891],
//     '东莞': [113.8953, 22.901],
//     '东营': [118.7073, 37.5513],
//     '中山': [113.4229, 22.478],
//     '临汾': [111.4783, 36.1615],
//     '临沂': [118.3118, 35.2936],
//     '丹东': [124.541, 40.4242],
//     '丽水': [119.5642, 28.1854],
//     '乌鲁木齐': [87.9236, 43.5883],
//     '佛山': [112.8955, 23.1097],
//     '保定': [115.0488, 39.0948],
//     '兰州': [103.5901, 36.3043],
//     '包头': [110.3467, 41.4899],
//     '北京': [116.4551, 40.2539],
//     '北海': [109.314, 21.6211],
//     '南京': [118.8062, 31.9208],
//     '南宁': [108.479, 23.1152],
//     '南昌': [116.0046, 28.6633],
//     '南通': [121.1023, 32.1625],
//     '厦门': [118.1689, 24.6478],
//     '台州': [121.1353, 28.6688],
//     '合肥': [117.29, 32.0581],
//     '呼和浩特': [111.4124, 40.4901],
//     '咸阳': [108.4131, 34.8706],
//     '哈尔滨': [127.9688, 45.368],
//     '唐山': [118.4766, 39.6826],
//     '嘉兴': [120.9155, 30.6354],
//     '大同': [113.7854, 39.8035],
//     '大连': [122.2229, 39.4409],
//     '天津': [117.4219, 39.4189],
//     '太原': [112.3352, 37.9413],
//     '威海': [121.9482, 37.1393],
//     '宁波': [121.5967, 29.6466],
//     '宝鸡': [107.1826, 34.3433],
//     '宿迁': [118.5535, 33.7775],
//     '常州': [119.4543, 31.5582],
//     '广州': [113.5107, 23.2196],
//     '廊坊': [116.521, 39.0509],
//     '延安': [109.1052, 36.4252],
//     '张家口': [115.1477, 40.8527],
//     '徐州': [117.5208, 34.3268],
//     '德州': [116.6858, 37.2107],
//     '惠州': [114.6204, 23.1647],
//     '成都': [103.9526, 30.7617],
//     '扬州': [119.4653, 32.8162],
//     '承德': [117.5757, 41.4075],
//     '拉萨': [91.1865, 30.1465],
//     '无锡': [120.3442, 31.5527],
//     '日照': [119.2786, 35.5023],
//     '昆明': [102.9199, 25.4663],
//     '杭州': [119.5313, 29.8773],
//     '枣庄': [117.323, 34.8926],
//     '柳州': [109.3799, 24.9774],
//     '株洲': [113.5327, 27.0319],
//     '武汉': [114.3896, 30.6628],
//     '汕头': [117.1692, 23.3405],
//     '江门': [112.6318, 22.1484],
//     '沈阳': [123.1238, 42.1216],
//     '沧州': [116.8286, 38.2104],
//     '河源': [114.917, 23.9722],
//     '泉州': [118.3228, 25.1147],
//     '泰安': [117.0264, 36.0516],
//     '泰州': [120.0586, 32.5525],
//     '济南': [117.1582, 36.8701],
//     '济宁': [116.8286, 35.3375],
//     '海口': [110.3893, 19.8516],
//     '淄博': [118.0371, 36.6064],
//     '淮安': [118.927, 33.4039],
//     '深圳': [114.5435, 22.5439],
//     '清远': [112.9175, 24.3292],
//     '温州': [120.498, 27.8119],
//     '渭南': [109.7864, 35.0299],
//     '湖州': [119.8608, 30.7782],
//     '湘潭': [112.5439, 27.7075],
//     '滨州': [117.8174, 37.4963],
//     '潍坊': [119.0918, 36.524],
//     '烟台': [120.7397, 37.5128],
//     '玉溪': [101.9312, 23.8898],
//     '珠海': [113.7305, 22.1155],
//     '盐城': [120.2234, 33.5577],
//     '盘锦': [121.9482, 41.0449],
//     '石家庄': [114.4995, 38.1006],
//     '福州': [119.4543, 25.9222],
//     '秦皇岛': [119.2126, 40.0232],
//     '绍兴': [120.564, 29.7565],
//     '聊城': [115.9167, 36.4032],
//     '肇庆': [112.1265, 23.5822],
//     '舟山': [122.2559, 30.2234],
//     '苏州': [120.6519, 31.3989],
//     '莱芜': [117.6526, 36.2714],
//     '菏泽': [115.6201, 35.2057],
//     '营口': [122.4316, 40.4297],
//     '葫芦岛': [120.1575, 40.578],
//     '衡水': [115.8838, 37.7161],
//     '衢州': [118.6853, 28.8666],
//     '西宁': [101.4038, 36.8207],
//     '西安': [109.1162, 34.2004],
//     '贵阳': [106.6992, 26.7682],
//     '连云港': [119.1248, 34.552],
//     '邢台': [114.8071, 37.2821],
//     '邯郸': [114.4775, 36.535],
//     '郑州': [113.4668, 34.6234],
//     '鄂尔多斯': [108.9734, 39.2487],
//     '重庆': [107.7539, 30.1904],
//     '金华': [120.0037, 29.1028],
//     '铜川': [109.0393, 35.1947],
//     '银川': [106.3586, 38.1775],
//     '镇江': [119.4763, 31.9702],
//     '长春': [125.8154, 44.2584],
//     '长沙': [113.0823, 28.2568],
//     '长治': [112.8625, 36.4746],
//     '阳泉': [113.4778, 38.0951],
//     '青岛': [120.4651, 36.3373],
//     '韶关': [113.7964, 24.7028],
//     '拉萨': [96.7964, 30.7028]
// };

// var BJData = [
//     [{
//         name: '新乡'
//     }, {
//         name: '新乡',
//         value: 200
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '呼和浩特',
//         value: 90
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '哈尔滨',
//         value: 90
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '石家庄',
//         value: 90
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '昆明',
//         value: 30
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '北京',
//         value: 100
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '长春',
//         value: 40
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '重庆',
//         value: 40
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '贵阳',
//         value: 50
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '南宁',
//         value: 30
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '济南',
//         value: 10
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '太原',
//         value: 40
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '西安',
//         value: 60
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '武汉',
//         value: 50
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '合肥',
//         value: 40
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '南京',
//         value: 30
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '沈阳',
//         value: 20
//     }],
//     [{
//         name: '新乡'
//     }, {
//         name: '成都',
//         value: 10
//     }]
// ];


function mapChart(geoCoordMap, BJData) {
    // console.log(geoCoordMap, BJData);
    var planePath = 'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705';
    // var planePath = 'path://M644.427078 956.858834c-1.959631 0-3.929496-0.322341-5.829775-0.981351l-93.384877-32.326243c-9.302877-3.219321-14.233166-13.371542-11.012821-22.674419 3.219321-9.3039 13.372565-14.233166 22.674419-11.012821l69.729108 24.136723 0-27.361161-56.793494-51.671846c-4.507664-4.100388-6.607488-10.218736-5.568832-16.223496 1.481747-8.56405 2.202155-15.871479 2.202155-22.339798 0-0.37146 0.01228-0.74292 0.034792-1.113357l10.960633-175.081551c0.372483-5.954619 3.700275-11.328 8.863878-14.31503 5.166673-2.989077 11.482519-3.192715 16.82827-0.548492l311.807538 154.23271 0-64.716954L589.587076 410.05312c-3.866051-3.385097-6.083555-8.273431-6.083555-13.411451L583.503521 181.125197c0-22.372543-9.601682-51.562353-24.461111-74.362638-15.458063-23.719214-34.08326-37.323047-51.099818-37.323047-17.016559 0-35.642778 13.602809-51.099818 37.322024-14.859429 22.800285-24.460088 51.990095-24.460088 74.362638l0 215.515449c0 5.13802-2.217505 10.027377-6.083555 13.411451L100.941993 694.860724l0 64.501036 306.089303-153.963581c5.323239-2.677992 11.632945-2.517333 16.813944 0.425695 5.180999 2.943029 8.5487 8.280594 8.975419 14.223956l13.57825 189.452863c0.030699 0.423649 0.045025 0.849344 0.045025 1.274016 0 3.140527 0.372483 6.514367 0.76748 10.085706l0.146333 1.332345c0.618077 5.675256-1.51961 11.304464-5.749958 15.138792l-54.42761 49.327452 0 27.220968L443.965487 893.933689c16.090467-6.587022 51.374064-9.872858 73.997318 23.608697 5.511527 8.156774 3.367701 19.237133-4.790096 24.74866-8.156774 5.509481-19.237133 3.367701-24.74866-4.790096-5.106298-7.557116-11.355629-11.511171-19.105127-12.087293-6.149047-0.459464-11.268648 1.313925-12.056594 1.604544-0.410346 0.186242-0.512676 0.209778-0.997724 0.38067l-81.002872 28.452006c-5.453199 1.914606-11.496845 1.067308-16.213263-2.27481-4.715395-3.342118-7.518231-8.762571-7.518231-14.543228l0-60.274782c0-5.031597 2.12643-9.827833 5.854335-13.20679l53.638641-48.613184c-0.12382-1.769296-0.209778-3.598968-0.226151-5.482875l-11.624758-162.198126L91.127464 804.205085c-5.52483 2.7793-12.096503 2.494821-17.362436-0.750083s-8.471952-8.987698-8.471952-15.173584l0-101.504812c0-5.13802 2.217505-10.027377 6.084579-13.411451l325.355089-284.808628L396.732743 181.125197c0-29.250184 11.588943-65.203024 30.242791-93.826945 22.487154-34.504862 51.241035-53.507658 80.967056-53.507658 29.723975 0 58.477856 19.002796 80.966033 53.507658 18.654872 28.624944 30.244838 64.576761 30.244838 93.826945l0 207.430306 325.350996 284.808628c3.866051 3.385097 6.083555 8.273431 6.083555 13.411451l0 101.504812c0 6.163373-3.184529 11.890818-8.420787 15.142885-5.234211 3.252067-11.780301 3.567245-17.306154 0.833995L611.344612 649.180336l-9.253758 147.804301c-0.025583 5.622044-0.436952 11.579733-1.24741 18.022469l55.579853 50.567699c3.712555 3.377934 5.828752 8.16496 5.828752 13.184277l0 60.274782c0 5.76633-2.789533 11.175527-7.485485 14.519692C651.707902 955.73115 648.085398 956.858834 644.427078 956.858834z';
    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push([{
                    coord: fromCoord
                }, {
                    coord: toCoord
                }]);
            }
        }
        return res;
    };

    var color = ['#de6e6a', '#ffa022', '#a6c84c'];
    var series = [];
    [
        ['北京市', BJData],
        // ['九江', SHData],
        // ['新疆', GZData]
    ].forEach(function (item, i) {
        series.push({
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 1,
            effect: {
                show: true,
                period: 6,
                trailLength: 0.7,
                color: '#fff',
                symbolSize: 3
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 0,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'lines',
            zlevel: 2,
            effect: {
                show: true,
                period: 6,
                trailLength: 0,
                symbol: planePath,
                symbolSize: 15
            },
            lineStyle: {
                normal: {
                    color: color[i],
                    width: 1,
                    opacity: 0.4,
                    curveness: 0.2
                }
            },
            data: convertData(item[1])
        }, {
            name: item[0] + ' Top10',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            rippleEffect: {
                brushType: 'stroke'
            },
            label: {
                normal: {
                    show: true,
                    position: 'right',
                    formatter: '{b}'
                }
            },
            symbolSize: function (val) {
                return val[2] / 8;
            },
            itemStyle: {
                normal: {
                    color: color[i]
                }
            },
            data: item[1].map(function (dataItem) {
                return {
                    name: dataItem[1].name,
                    value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                };
            })
        });
    });

    let option = {
        title: {
            text: '回乡路线 To',
            textStyle: {
                color: '#6d767e'
            }
        },
        tooltip: {
            trigger: 'item'
        },
        // legend: {
        //     orient: 'vertical',
        //     top: 'bottom',
        //     left: 'right',
        //     data: ['北京 Top10', '上海 Top10', '广州 Top10'],
        //     textStyle: {
        //         color: '#fff'
        //     },
        //     selectedMode: 'single'
        // },
        geo: {
            map: 'china',
            zoom: 1.2,
            scaleLimit: {  //控制滚轮缩放大小
                max: 2,
                min: 1
            },
            label: {
                emphasis: {
                    show: false
                }
            },
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#f1f1f1',
                    borderColor: '#0692a4'
                },
                emphasis: {
                    areaColor: '#c1c1c1'
                }
            }
        },
        series: series
    };
    myChart5 = echarts.init($('.map')[0]);
    myChart5.setOption(option);
}