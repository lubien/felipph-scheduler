const execa = require('execa')
const SHOULD_STOP = 'SHOULD_STOP'

const scheduler = (fn, n) => {
  async function schedule(fn) {
    const res = await fn()

    console.log(`Response was ${res}`)

    if (res !== SHOULD_STOP) {
      console.log('== Continue ==')
      return schedule(fn)
    } else {
      console.log('== Kill ==')
    }
  }
  return Promise.all(Array.from(Array(n), () =>
    schedule(fn)
  ))
}

scheduler(script, 3)

function script() {
  return execa('node', ['other.js'])
    .then(r => r.stdout)
}

