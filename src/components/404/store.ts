const randomVector = (r: number) => [r / 2 - Math.random() * r, r / 2 - Math.random() * r, r / 2 - Math.random() * r]
const randomEuler = () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI]
const data = Array.from({ length: 100 }, (r = 10) => ({ random: Math.random(), position: randomVector(r), rotation: randomEuler() }))

export { data }