import * as Charm from 'charm'
import * as fs from 'fs'
import * as path from 'path'

const charm = Charm()
charm.pipe(process['stdout'])

const frames = []
const folder = fs.readdirSync('./src/tiger/frames')
for(const filePath of folder) {
  frames.push(fs.readFileSync(path.join('./src/tiger/frames', filePath), 'utf8'))
}

let i = 0
setInterval(() => {
  charm.reset()
  charm.write(frames[i % frames.length])
  i++
}, 200)
