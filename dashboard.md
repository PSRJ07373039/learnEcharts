## /登录注册
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /登录注册/登录接口
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /api/login

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
username | laotang | Text | 是 | 用户名，长度2~15位
password | 123456 | Text | 是 | 密码，长度6~15位
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
apt.variables.set("token", response.json.token.replace('Bearer ', ''));
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "登录成功",
	"token": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM1NTgwMjcxLCJleHAiOjE2MzU2MTYyNzF9.pyWl_obP0nFt48IQGlkXu6RX5VO9o2RcAUwblJFJ-70"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 登录成功 | Text | 描述信息
token | Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjM1NTgwMjcxLCJleHAiOjE2MzU2MTYyNzF9.pyWl_obP0nFt48IQGlkXu6RX5VO9o2RcAUwblJFJ-70 | Text | 认证令牌
## /登录注册/注册接口
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /api/register

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
username | laotang | Text | 是 | 用户名，长度2~15位
password | 123123 | Text | 是 | 密码，长度6~15位
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "注册成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 注册成功 | Text | 描述信息
## /初始化数据
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /初始化数据/初始化数据
```text
为了减少手动录入学员信息和成绩的时间，提供了初始化数据接口。
按要求调用该接口，即可为你随机创建50名学员。并为每位学员录入3次成绩。
```
#### 接口状态
> 已完成

#### 接口URL
> /init/data

#### 请求方式
> GET

#### Content-Type
> none

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "初始化数据成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 初始化数据成功 | Text | 描述信息
#### 错误响应示例
```javascript
{
	"code": 1,
	"message": "初始化失败，原因是你已经初始化"
}
```
## /学员管理
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /学员管理/查询全部学员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /student/list

#### 请求方式
> GET

#### Content-Type
> none

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "获取成功",
	"data": [
		{
			"id": 1,
			"name": "曾明",
			"age": 27,
			"sex": "女",
			"phone": "15515232684",
			"salary": 7899,
			"truesalary": 9703,
			"province": "浙江省",
			"city": "宁波市",
			"county": "海曙区",
			"jing": 125.135,
			"wei": 46.562
		},
		{
			"id": 2,
			"name": "阎勇",
			"age": 29,
			"sex": "男",
			"phone": "13537273418",
			"salary": 11794,
			"truesalary": 9328,
			"province": "安徽省",
			"city": "马鞍山市",
			"county": "雨山区",
			"jing": 125.135,
			"wei": 66.562
		}
	]
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 获取成功 | Text | 描述信息
data | - | Text | 返回数据
data.id | 1 | Text | 学员id
data.name | 曾明 | Text | 姓名
data.age | 27 | Text | 年龄
data.sex | 女 | Text | 性别
data.phone | 15515232684 | Text | 手机号
data.salary | 7899 | Text | 期望薪资
data.truesalary | 9703 | Text | 实际薪资
data.province | 浙江省 | Text | 籍贯（省）
data.city | 宁波市 | Text | 籍贯（市）
data.county | 海曙区 | Text | 籍贯（县）
data.jing | 125.135 | Text | 籍贯所在地经度
data.wei | 46.562 | Text | 籍贯所在地纬度
## /学员管理/添加学员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /student/add

#### 请求方式
> POST

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
name | 狗哥 | Text | 是 | 姓名，2~10位
sex | 女 | Text | 是 | 性别，男或女，不得填写其他值
age | 29 | Text | 是 | 年龄，两位数字
group | 2 | Text | 是 | 组号，1~2位数字
phone | 13200009999 | Text | 是 | 手机号，11位数字
salary | 8000 | Text | 是 | 期望薪资，100到99999
truesalary | 10000 | Text | 是 | 实际薪资，100到99999
province | 河北省 | Text | 是 | 省份，从/geo/province接口获取
city | 张家口市 | Text | 是 | 市，从/geo/city接口获取
county | 张北县 | Text | 是 | 县，从/geo/county接口获取
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "添加学员成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 添加学员成功 | Text | 描述信息
## /学员管理/删除学员
```text
删除学员，将会将该学员成绩一并删除，请谨慎使用~
```
#### 接口状态
> 已完成

#### 接口URL
> /student/delete

#### 请求方式
> DELETE

#### Content-Type
> none

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 48 | Text | 是 | 学员id
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "删除学员及其所有成绩成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 删除学员及其所有成绩成功 | Text | 描述信息
## /学员管理/修改学员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /student/update

#### 请求方式
> PUT

#### Content-Type
> urlencoded

#### 请求Body参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 51 | Text | 是 | 学员id
name | 狗哥 | Text | 是 | 姓名，2~10位
sex | 女 | Text | 是 | 性别，男或女，不得填写其他值
age | 29 | Text | 是 | 年龄，两位数字
group | 2 | Text | 是 | 组号，1~2位数字
phone | 13200009999 | Text | 是 | 手机号，11位数字
salary | 8000 | Text | 是 | 期望薪资，100到99999
truesalary | 11000 | Text | 是 | 实际薪资，100到99999
province | 河北省 | Text | 是 | 省份，从/geo/province接口获取
city | 张家口市 | Text | 是 | 市，从/geo/city接口获取
county | 康保县 | Text | 是 | 县，从/geo/county接口获取
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "更新学员成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 更新学员成功 | Text | 描述信息
## /学员管理/班级概况
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /student/overview

#### 请求方式
> GET

#### Content-Type
> none

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 1,
	"message": "查询班级概况信息成功",
	"data": {
		"total": 51,
		"avgSalary": "12278.35",
		"avgAge": "23.59",
		"proportion": "0.96"
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 查询班级概况信息成功 | Text | 描述信息
data | - | Text | 返回数据
data.total | 51 | Text | 班级人数
data.avgSalary | 12278.35 | Text | 期望薪资平均值
data.avgAge | 23.59 | Text | 平均年龄
data.proportion | 0.96 | Text | 男女比例
## /学员管理/根据id查询一个学员
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /student/one

#### 请求方式
> GET

#### Content-Type
> none

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
id | 65 | Text | 是 | 学员id
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "获取成功",
	"data": {
		"id": 65,
		"name": "韩芳",
		"sex": "女",
		"age": 28,
		"group": 1,
		"phone": "13173776072",
		"salary": 19118,
		"truesalary": 7551,
		"province": "河南省",
		"city": "南阳市",
		"county": "桐柏县",
		"user_id": 4,
		"jing": 113.428287,
		"wei": 32.380073
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 获取成功 | Text | 描述信息
data | - | Text | 返回数据
data.id | 65 | Text | id
data.name | 韩芳 | Text | 姓名
data.sex | 女 | Text | 性别
data.age | 28 | Text | 年龄
data.group | 1 | Text | 组名
data.phone | 13173776072 | Text | 手机号
data.salary | 19118 | Text | 期望薪资
data.truesalary | 7551 | Text | 实际薪资
data.province | 河南省 | Text | 省
data.city | 南阳市 | Text | 市
data.county | 桐柏县 | Text | 县
data.user_id | 4 | Text | 用户id
data.jing | 113.428287 | Text | 籍贯所在地经度
data.wei | 32.380073 | Text | 籍贯所在地纬度
## /省市县联动
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /省市县联动/获取省
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /geo/province

#### 请求方式
> GET

#### Content-Type
> none

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
[
	"北京市",
	"天津市",
	"河北省",
	"山西省",
	"内蒙古自治区",
	"辽宁省",
	"吉林省",
	"黑龙江省",
	"上海市",
	"江苏省",
	"浙江省",
	"安徽省",
	"福建省",
	"江西省",
	"山东省",
	"河南省",
	"湖北省",
	"湖南省",
	"广东省",
	"广西壮族自治区",
	"海南省",
	"重庆市",
	"四川省",
	"贵州省",
	"云南省",
	"西藏自治区",
	"陕西省",
	"甘肃省",
	"青海省",
	"宁夏回族自治区",
	"新疆维吾尔自治区",
	"台湾省",
	"香港特别行政区",
	"澳门特别行政区"
]
```
## /省市县联动/获取某个省里的市
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /geo/city

#### 请求方式
> GET

#### Content-Type
> none

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
pname | 河北省 | Text | 是 | 省的名字
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
[
	"石家庄市",
	"唐山市",
	"秦皇岛市",
	"邯郸市",
	"邢台市",
	"保定市",
	"张家口市",
	"承德市",
	"沧州市",
	"廊坊市",
	"衡水市"
]
```
## /省市县联动/获取某个市里的县
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /geo/county

#### 请求方式
> GET

#### Content-Type
> none

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
pname | 河北省 | Text | 是 | 省的名字
cname | 承德市 | Text | 是 | 市的名字（如为直辖市，填直辖市的名字）
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
[
	"双桥区",
	"双滦区",
	"鹰手营子矿区",
	"承德县",
	"兴隆县",
	"滦平县",
	"隆化县",
	"丰宁满族自治县",
	"宽城满族自治县",
	"围场满族蒙古族自治县",
	"平泉市"
]
```
## /成绩相关接口
```text
暂无描述
```
#### 公共Header参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Query参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 公共Body参数
参数名 | 示例值 | 参数描述
--- | --- | ---
暂无参数
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
## /成绩相关接口/查询所有成绩
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /score/list

#### 请求方式
> GET

#### Content-Type
> none

#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "获取成功",
	"data": {
		"1": {
			"name": "曾明",
			"score": [
				77,
				84,
				"",
				86,
				""
			]
		},
		"2": {
			"name": "阎勇",
			"score": [
				65,
				"",
				75,
				"",
				""
			]
		},
		"3": {
			"name": "黄静",
			"score": [
				74,
				40,
				93,
				"",
				83
			]
		}
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 获取成功 | Text | 描述信息
data | - | Text | 返回数据，对象的键是学员id
data.1 | - | Text | 
data.1.name | 曾明 | Text | 学员姓名
data.1.score | 77 | Text | 学员的5次成绩，空表示缺考
data.1.group | 2 | Text | 组号
## /成绩相关接口/成绩录入与修改
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /score/entry

#### 请求方式
> POST

#### Content-Type
> json

#### 请求Body参数
```javascript
{stu_id: 2, batch: 1, score: 78}
```
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "修改成绩成功"
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 修改成绩成功 | Text | 描述信息
## /成绩相关接口/按组查询成绩
```text
暂无描述
```
#### 接口状态
> 已完成

#### 接口URL
> /score/batch

#### 请求方式
> GET

#### Content-Type
> none

#### 请求Query参数
参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述
--- | --- | --- | --- | ---
batch | 1 | Text | 是 | 次数，第几次考试成绩
#### 预执行脚本
```javascript
暂无预执行脚本
```
#### 后执行脚本
```javascript
暂无后执行脚本
```
#### 成功响应示例
```javascript
{
	"code": 0,
	"message": "按组查询成绩成功",
	"data": {
		"group": [
			1,
			2,
			3,
			4,
			5
		],
		"avgScore": [
			61,
			61,
			77,
			73,
			67
		],
		"lt60": [
			5,
			5,
			2,
			2,
			3
		],
		"gt60": [
			2,
			4,
			2,
			2,
			6
		],
		"gt80": [
			3,
			1,
			5,
			6,
			1
		]
	}
}
```
参数名 | 示例值 | 参数类型 | 参数描述
--- | --- | --- | ---
code | 0 | Text | 业务状态码，0表示成功，1表示失败
message | 按组查询成绩成功 | Text | 描述信息
data | - | Text | 返回数据
data.group | 1 | Text | 组名
data.avgScore | 61 | Text | 平均分
data.lt60 | 5 | Text | 小于60分人数
data.gt60 | 2 | Text | 60~80分之间的人数
data.gt80 | 3 | Text | 80以上的人数