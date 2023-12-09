import * as THREE from 'three'

import { optFoot, optCtrlSnake } from './options.js'
import { randomPosition, loaderModel, removeModelsById } from './global.js'
import { scene, materialFoot, geometryFoot } from './graphics.js'
import { addSizeSnake } from './snakeLogic.js'
import { appleModel } from './loaderModel.js'
import { defineNumbers } from './account.js'
import { checkRecord } from './record.js'

createFoot()
export function createFoot() {
	const foot = new THREE.Mesh(geometryFoot, materialFoot)
	foot.name = 'foot'
	foot.name = 'foot'

	optFoot.x = randomPosition()
	optFoot.y = randomPosition()

	positionValidationFoot(optFoot.x, optFoot.y)
	positionFoot(foot, optFoot.x, optFoot.y)

	removeModelsById('appleModel')

	loaderModel(
		appleModel,
		{ x: optFoot.x, y: optFoot.y, z: -0.5 },
		{ x: 2, y: 2, z: 2 },
		{ x: Math.PI / 2, y: Math.random() * Math.PI, z: 0 },
		'appleModel'
	)
}

function positionValidationFoot(x, y) {
	optCtrlSnake.body.forEach(elem => {
		if (elem.x === x && elem.y === y) {
			clearFoot()
			createFoot()
		}
	})
}

function positionFoot(elem, x, y, z = 0) {
	elem.position.set(x, y, z)
}

uppdateCaunterFoot()
checkRecord()
export function checkingTouchFood() {
	if (optCtrlSnake.body[0].x === optFoot.x && optCtrlSnake.body[0].y === optFoot.y) {
		addSizeSnake(1)
		uppdateCaunterFoot()
		checkRecord()
		clearFoot()
		createFoot()
	}
}

export function uppdateCaunterFoot() {
	defineNumbers(
		optCtrlSnake.lengthSnake,
		{
			position: {
				x: -1,
				y: 15.5,
				z: 0.2,
			},
			distanse: {
				x: 1.9,
				y: 0,
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
				z: 0,
			},
		},
		'account'
	)
}

function clearFoot() {
	for (let i = scene.children.length - 1; i >= 0; i--) {
		const foot = scene.children[i]
		if (foot.type === 'Mesh' && foot.name === 'foot') {
			scene.remove(foot)
		}
	}
}
