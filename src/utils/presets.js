export default Object.freeze([
  {
    name: "Plant Nature",
    lsystem: {
      axiom: "m{0x594d30, 0.9, 0} A{0.2}",
      productions:
        "A{r} -> l{0.2, r, r} +x +y +z [ [ A{r/2} ] -x A{r/2} ] -x -y -z l{0.2, r, r} [ -x l{0.2, r, r/2} A{r/2} m{0xf695c3, 0.7, 0, false, true, false, true, 0.8, 0} sphere ] +x A{r/2}\nl{a, b, c} -> l{a*2.5, b, c}\nl{a, b, c} -> l{a*2, b, c}\nsphere -> sphere{random()/7+0.3}",
      iterations: 4,
    },
    defaults: { length: 0.2, angle: 25, radius: 0.05, size: 0.3 },
    environment: {
      autoRotate: true,
      modelAngle: 0,
      envName: "Sunset",
    },
  },
  {
    name: "Plant Dark",
    lsystem: {
      axiom: "m{0xffffff, 0.1, 0} A{0.2}",
      productions:
        "A{r} -> l{0.2, r, r} +x +y +z [ [ A{r/2} ] -x A{r/2} ] -x -y -z l{0.2, r, r} [ -x l{0.2, r, r/2} A{r/2} sphere ] +x A{r/2}\nl{a, b, c} -> l{a*2.5, b, c}\nl{a, b, c} -> l{a*2, b, c}\nsphere -> sphere{random()/7+0.1}",
      iterations: 4,
    },
    defaults: { length: 0.2, angle: 25, radius: 0.05, size: 0.3 },
    environment: {
      autoRotate: true,
      modelAngle: 0,
      envName: "Dark Neon",
    },
  },
  {
    name: "Hilbert curve",
    lsystem: {
      axiom: "X",
      productions:
        "X -> +x -z X l +x -z X l X +y l +x +z +z X l X -x l -y +z +z X l X +y l +z X +y +z",
      iterations: 3,
    },
    defaults: { length: 1, angle: 90, radius: 0.2, size: 0.3 },
    environment: {
      autoRotate: false,
      modelAngle: 45,
      envName: "Sky",
    },
  },
  {
    name: "Hilbert curve smooth",
    lsystem: {
      axiom: "t{0.5} s X e",
      productions:
        "X -> +x -z X f +x -z X f X +y f +x +z +z X f X -x f -y +z +z X f X +y f +z X +y +z",
      iterations: 3,
    },
    defaults: { length: 1, angle: 90, radius: 0.2, size: 0.3 },
    environment: {
      autoRotate: false,
      modelAngle: 45,
      envName: "Dark Neon",
    },
  },
  {
    name: "Sierpinski Pyramid",
    lsystem: {
      axiom: "m{0xffffff, 0.9, 0.9, true} f{8/2} cone{8, 8, 3}",
      productions:
        "cone{s, s} -> f{s/4} cone{s/2, s/2, 3} f{-s/2} [ +x{90} f{s*sin(pi/6)} -x{90} cone{s/2, s/2, 3} ] [ +z{120} +x{90} f{s*sin(pi/6)} -x{90} cone{s/2, s/2, 3} ] [ -z{120} +x{90} f{s*sin(pi/6)} -x{90} cone{s/2, s/2, 3} ] f{s/4}",
      iterations: 3,
    },
    defaults: { length: 1, angle: 90, radius: 0.2, size: 0.3 },
    environment: {
      autoRotate: false,
      modelAngle: 60,
      envName: "Dark Neon",
    },
  },
]);