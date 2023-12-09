import { optCtrlSnake } from './options.js'
import { defineNumbers } from './account.js'

export function checkRecord() {
  if (!localStorage.getItem('record')) {
    localStorage.setItem('record', optCtrlSnake.record.toString())

    uppdateRecordFoot()
  } else {
    if (+localStorage.getItem('record') < optCtrlSnake.lengthSnake) {
      optCtrlSnake.record = +localStorage.getItem('record') + 1
      localStorage.setItem('record', optCtrlSnake.record.toString())

      uppdateRecordFoot()
    } else {
      optCtrlSnake.record = +localStorage.getItem('record')
      uppdateRecordFoot()
    }
  }
}

function uppdateRecordFoot() {
  defineNumbers(
    optCtrlSnake.record,
    {
      position: {
        x: 15.5,
        y: 0,
        z: 0.7,
      },
      distanse: {
        x: 0,
        y: -1.9,
        z: 0,
      },
      scale: {
        x: 2,
        y: 2,
        z: 2,
      },
      rotate: {
        x: Math.PI / 2,
        y: Math.PI * 2,
        z: Math.PI * 1.5,
      },
    },
    'recorod'
  )
}
