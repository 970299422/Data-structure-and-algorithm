/**
 * name 方法名称
 * task Function 执行方法
 */

async function timeTools (name, task) {
  const start = new Date().getTime()
  console.log(`${name}开始 - ${start}`)
  await task()
  const end = new Date().getTime()
  console.log(`${name}结束 - ${end}`)
  console.log(`${name}花费 - ${end - start}`)
}

module.exports = {
  timeTools
}