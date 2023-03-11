import { useInView } from "react-intersection-observer"

import Grow from "@mui/material/Grow"
import Slide from "@mui/material/Slide"

const EaseIn = ({
  children,
  direction = "right",
  timeout = 1000,
  triggerThreshold = 0.3,
  randomDirection
}) => {
  const { ref, inView, entry } = useInView({
    threshold: triggerThreshold,
    triggerOnce: true,
  })

  Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

  const directions = ["left", "right", "up", "down"]

  return (
    <Grow ref={ref} in={inView} timeout={timeout}>
      <div>
        <Slide in={inView} direction={randomDirection ? directions.random() : direction} timeout={timeout}>
          {children}
        </Slide>
      </div>
    </Grow>
  )
}

export default EaseIn
