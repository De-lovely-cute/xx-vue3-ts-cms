// 1、方式一：手动的切换不同的环境（不推荐）
// const BASE_URL = ''
// const BASE_NAME = ''

// 2、根据process.env.NODE_ENV区分
// 开发环境：development
// 生成环境：production
// 测试环境：test

let BASE_URL = ''
const TIME_OUT = 10000

if(process.env.NODE_ENV === 'development') {
  'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}

export { BASE_URL, TIME_OUT }
