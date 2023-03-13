import { useInView } from "react-intersection-observer"

import Grow from "@mui/material/Grow"
import Slide from "@mui/material/Slide"

import { Zoom } from "@mui/material"

const EaseIn = ({
  children,
  direction = "right",
  timeout = 1000,
  triggerThreshold = 1,
  randomDirection,
  triggerOnce = true,
  zoom,
}) => {
  const { ref, inView, entry } = useInView({
    threshold: triggerThreshold,
    triggerOnce,
  })

  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)]
  }

  const directions = ["left", "right", "up", "down"]

  if (zoom)
    return (
      <Zoom ref={ref} in={inView} timeout={timeout}>
        {children}
      </Zoom>
    )

  return (
    <Grow ref={ref} in={inView} timeout={timeout}>
      <div>
        <Slide
          in={inView}
          direction={randomDirection ? directions.random() : direction}
          timeout={timeout}
        >
          {children}
        </Slide>
      </div>
    </Grow>
  )
}

export default EaseIn
