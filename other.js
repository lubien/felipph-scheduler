const SHOULD_STOP = 'SHOULD_STOP'

const wait = Math.random() * 1000

setTimeout(() => {
  if (wait > 500) {
    console.log(SHOULD_STOP)
  } else {
    console.log(wait)
  }
}, wait)
