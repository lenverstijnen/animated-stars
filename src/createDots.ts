import Circle from "./Circle"

export const createDots = (
  numberOfDots: number,
  context: CanvasRenderingContext2D
) => {
  const dots: Circle[] = []
  for (let i = 0; i < numberOfDots; i++) {
    dots.push(new Circle(context))
  }

  return dots
}
