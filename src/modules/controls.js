import { optPlatform, optCtrlSnake, optKey } from './options.js'

// snake path
export function snakePuth() {
  optCtrlSnake.y += optCtrlSnake.moveY
  optCtrlSnake.x += optCtrlSnake.moveX
}

// snake activeKeyTrue
export function activeKeyTrue() {
  optCtrlSnake.activeKey = true
}

// control key
window.addEventListener('keydown', control)
function control(event) {
  const key = event.key

  if (optCtrlSnake.start === false)
    optKey.forEach(item => (item === key ? (optCtrlSnake.start = true) : ''))
  if (optCtrlSnake.activeKey === false) return

  if (key === 'ArrowUp' && optCtrlSnake.puth !== 'ArrowDown') {
    Object.assign(optCtrlSnake, {
      moveY: optCtrlSnake.step,
      moveX: 0,
      puth: 'ArrowUp',
      activeKey: false,
    })
  } else if (key === 'ArrowDown' && optCtrlSnake.puth !== 'ArrowUp') {
    Object.assign(optCtrlSnake, {
      moveY: -optCtrlSnake.step,
      moveX: 0,
      puth: 'ArrowDown',
      activeKey: false,
    })
  } else if (key === 'ArrowLeft' && optCtrlSnake.puth !== 'ArrowRight') {
    Object.assign(optCtrlSnake, {
      moveY: 0,
      moveX: -optCtrlSnake.step,
      puth: 'ArrowLeft',
      activeKey: false,
    })
  } else if (key === 'ArrowRight' && optCtrlSnake.puth !== 'ArrowLeft') {
    Object.assign(optCtrlSnake, {
      moveY: 0,
      moveX: optCtrlSnake.step,
      puth: 'ArrowRight',
      activeKey: false,
    })
  }
}

// map size
export function ambit(x, y) {
  let widthPlatform = optPlatform.x,
    heightPlatform = optPlatform.y

  if (x + optCtrlSnake.moveX >= widthPlatform / 2) optCtrlSnake.x = -16
  else if (x + optCtrlSnake.moveX <= -widthPlatform / 2) optCtrlSnake.x = 16

  if (y + optCtrlSnake.moveY >= heightPlatform / 2) optCtrlSnake.y = -16
  else if (y + optCtrlSnake.moveY <= -heightPlatform / 2) optCtrlSnake.y = 16
}
