let navdom = document.querySelector('nav')
// 感谢 stackoverflow 的馈赠
let rem = parseFloat(getComputedStyle(document.documentElement).fontSize)
// top: 0.75rem 的意思
let navStickyBreakpoint = navdom.offsetTop - (0.75 * rem)

// absolute 我所欲也，sticky 亦我所欲也，二者不可得兼。
// 写 JS 而全他妈滚蛋也。
document.addEventListener('scroll', () => {
  // 很遗憾 interaction observer 可能帮不到我
  // console.log(window.screenY)
  // 手动 sticky plus
  if (window.scrollY > navStickyBreakpoint) {
    navdom.classList.add('fixed')
  }
  else {
    navdom.classList.remove('fixed')
  }
})

// 我为什么要用 <button>
let discordInviteButtonDOM = document.querySelector('#discoed_invite')
discordInviteButtonDOM.addEventListener('click', ()=>{
  let a = document.createElement('a')
  a.href = "https://discord.com/invite/eGAm24FjQ8"
  a.target = "_blank"
  a.click()
})
