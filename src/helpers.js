const toMinutes = (ms) => {
  return `${Math.floor((ms/1000) / 60)}:${Math.floor(((ms/1000) % 60) + 1)}`
}

export {toMinutes}
