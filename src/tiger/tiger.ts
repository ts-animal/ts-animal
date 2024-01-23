import * as Charm from 'charm'

const charm = Charm()
charm.pipe(process.stdout)

setInterval(() => {
  charm.reset()
  charm.write('*'.repeat(Math.floor(Math.random() * 10)))
}, 200)
