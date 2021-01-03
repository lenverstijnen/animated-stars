//instantiate canvas
import { createDots } from "./createDots"
const canvas = document.querySelector("canvas")!
canvas.width = innerWidth
canvas.height = innerHeight
const c = canvas.getContext("2d")!

const dots = createDots(1000, c)

const animate = () => {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, innerWidth, innerHeight)

  dots.forEach((dot) => {
    dot.update()
  })
}

animate()
