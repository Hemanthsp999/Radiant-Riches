import { useParallax } from "react-scroll-parallax";

const Parallax = () => {
  const parallax = useParallax({
    rotate: [0, 360],
  })
  return <div ref={parallax.ref}/>
}

export default Parallax;
