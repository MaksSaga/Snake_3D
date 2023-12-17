import { loaderModel, removeModelsById } from './global.js'

const numbers = {
  0: require('../models/numbers/0.gltf'),
  1: require('../models/numbers/1.gltf'),
  2: require('../models/numbers/2.gltf'),
  3: require('../models/numbers/3.gltf'),
  4: require('../models/numbers/4.gltf'),
  5: require('../models/numbers/5.gltf'),
  6: require('../models/numbers/6.gltf'),
  7: require('../models/numbers/7.gltf'),
  8: require('../models/numbers/8.gltf'),
  9: require('../models/numbers/9.gltf'),
}

export function defineNumbers(account, info, id) {
  account = `${account}`
  let accountArray = account.split('')

  removeModelsById(id)

  accountArray.forEach((element, index) => {
    if (index === 0) showNumberModel(element, info, index, id)
    else showNumberModel(element, info, index, id)
  })
}

function showNumberModel(number, info, index, id) {
  loaderModel(
    numbers[number],
    {
      x: info.position.x + info.distance.x * index,
      y: info.position.y + info.distance.y * index,
      z: info.position.z + info.distance.z * index,
    },
    {
      x: info.scale.x,
      y: info.scale.y,
      z: info.scale.z,
    },
    {
      x: info.rotate.x,
      y: info.rotate.z,
      z: info.rotate.y,
    },
    id
  )
}
