const fs = require('fs')
const { join } = require('path')
const sharp = require("sharp")

const { Canvas } = require('../native')
const { CanvasElement } = require('../lib/canvas-element')

const canvas = new CanvasElement(1920, 1080)

const ctx = canvas.getContext('2d')

ctx.moveTo(100, 100);
ctx.lineTo(100, 200)
ctx.moveTo(200, 200)
ctx.bezierCurveTo(300, 300, 300, 500, 200 , 700)
ctx.stroke()

const buffer = canvas.toBlob()

sharp(buffer, {
  raw: { width: 1920, height: 1080, channels: 4 }
}).png().toFile(join(process.cwd(), 'examples', 'to-blob.png'))
  .catch(e => console.error(e))
