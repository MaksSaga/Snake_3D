import * as THREE from 'three'

import {
  optWindow,
  optCamera,
  optScene,
  optPlatform,
  optSnake,
  optFoot,
  optDirLightOne,
  optDirLightTwo,
  optAmbLight,
} from './options.js'
import { createCube } from './snakeLogic.js'

// scene
export const scene = new THREE.Scene()
scene.position.set(optScene.x, optScene.y, optScene.z)
scene.background = new THREE.Color(optScene.color)
scene.rotateZ(optScene.rotZ)

// renderer
export const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
renderer.setSize(optWindow.w, optWindow.h)
renderer.setPixelRatio(window.devicePixelRatio * 2)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap // default THREE.PCFShadowMap

// ambLight
export const ambLight = new THREE.AmbientLight(optAmbLight.color, optAmbLight.inter)
ambLight.position.set(optAmbLight.x, optAmbLight.y, optAmbLight.z)
scene.add(ambLight)

// dirLight One
export const dirLightOne = new THREE.DirectionalLight(optDirLightOne.color, optDirLightOne.inter)
dirLightOne.position.set(optDirLightOne.x, optDirLightOne.y, optDirLightOne.z)
scene.add(dirLightOne)

// dirLight Two
export const dirLightTwo = new THREE.DirectionalLight(optDirLightTwo.color, optDirLightTwo.inter)
dirLightTwo.position.set(optDirLightTwo.x, optDirLightTwo.y, optDirLightTwo.z)
dirLightTwo.castShadow = true
// Настройки теней для источника света
dirLightTwo.shadow.mapSize.width = 8192 // Ширина карты теней
dirLightTwo.shadow.mapSize.height = 8192 // Высота карты теней
dirLightTwo.shadow.bias = -0.001
dirLightTwo.shadow.camera.near = 0.1 // Ближняя плоскость теней
dirLightTwo.shadow.camera.far = 60 // Дальняя плоскость теней
dirLightTwo.shadow.camera.left = -55 // Новое значение для левой границы камеры теней
dirLightTwo.shadow.camera.right = 55 // Новое значение для правой границы камеры теней
dirLightTwo.shadow.camera.top = 55 // Новое значение для верхней границы камеры теней
dirLightTwo.shadow.camera.bottom = -55 // Новое значение для нижней границы камеры теней
scene.add(dirLightTwo)

// camera
export const camera = new THREE.PerspectiveCamera(
  optCamera.fov,
  optWindow.w / optWindow.h,
  optCamera.near,
  optCamera.far
)
camera.position.set(optCamera.x, optCamera.y, optCamera.z)
camera.lookAt(new THREE.Vector3(0, 0, 0))

// platform
const geometryPlatform = new THREE.BoxGeometry(optPlatform.x, optPlatform.y, optPlatform.z)
const materialPlatform = new THREE.MeshStandardMaterial({ color: optPlatform.color })
export const platform = new THREE.Mesh(geometryPlatform, materialPlatform)
platform.position.set(0, 0, -1)
platform.name = 'platform'
// scene.add( platform );

// snake
export const geometrySnake = new THREE.BoxGeometry(optSnake.x, optSnake.y, optSnake.z)
export const materialSnake = new THREE.MeshStandardMaterial({ color: optSnake.color })
export const snake = new THREE.Mesh(geometrySnake, materialSnake)
snake.name = 'snake'
createCube(0, 0)

// foot
export const geometryFoot = new THREE.BoxGeometry(optFoot.x, optFoot.y, optFoot.z)
export const materialFoot = new THREE.MeshStandardMaterial({
  color: optFoot.color,
  transparent: true,
})
export const foot = new THREE.Mesh(geometryFoot, materialFoot)
foot.name = 'foot'
