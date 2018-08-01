/**
 * 令目标节点的高度填充满页面的剩余部分
 * @param {Object} obj 唯一参数，内有属性包括：目标节点target
 *                     已存在的所有元素的高之和totalHeight
 */
export function fillTheScreen (obj) {
  // const isWX = /micromessenger/.test(navigator.userAgent.toLowerCase())
  // why?
  // let height = isWX ? document.documentElement.clientHeight : document.documentElement.clientHeight - document.documentElement.offsetHeight
  let height = document.documentElement.clientHeight
  if (!obj.target || !obj.height) return
  height = 1 - obj.height / height
  obj.target.style.height = height * 100 + 'vh'
}
