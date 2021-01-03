export class Circle {
  private x: number
  private y: number
  private radius: number
  private c: CanvasRenderingContext2D
  private color: string
  private speedX = (Math.random() - 0.5) * 1
  private speedY = (Math.random() - 0.5) * 1

  constructor(context: CanvasRenderingContext2D) {
    const colors = [
      "#e1f5fe",
      "#fffde7",
      "#7aeef1",
      "#a7ffeb",
      "#ffff8d",
      "#ea80fc",
      "#ff8a80",
    ]

    this.x = Math.random() * innerWidth
    this.y = Math.random() * innerHeight
    this.radius = Math.random() * 3
    this.c = context
    this.color = colors[Math.floor(Math.random() * colors.length)]
  }

  draw() {
    this.c.beginPath()
    this.c.fillStyle = this.color

    this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    this.c.fill()
    this.c.stroke()
  }

  update() {
    if (this.y > window.innerHeight - 30 || this.y < -30)
      this.speedY = -this.speedY
    if (this.x > window.innerWidth - 30 || this.x < -30)
      this.speedX = -this.speedX

    this.x += this.speedX
    this.y += this.speedY

    this.draw()
  }
}

export default Circle
