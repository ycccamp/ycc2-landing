import React from 'react'

import { NextPage } from 'next'

import Front2020 from '../templates/front-2020/components'

export const Fluid = React.createContext<any>(null)

const IndexPage: NextPage = props => {
  return (
    <Fluid.Provider value={props}>
      <Front2020 />
    </Fluid.Provider>
  )
}

IndexPage.getInitialProps = async () => {
  const generateFluid = (src: string) => {
    const images = require(`../../assets/image/2020/${src}?resize&sizes[]=200&sizes[]=400&sizes[]=600`)
    const webP = require(`../../assets/image/2020/${src}?webp`)
    const trace = require(`../../assets/image/2020/${src}?trace`).trace

    const res = {
      src: images.src,
      srcSet: images.srcSet,
      srcWebp: webP,
      tracedSVG: trace,
      aspectRatio: images.width / images.height,
      sizes: `(max-width: 600px) 100vw, 600px`,
    }

    return res
  }

  return {
    logo: generateFluid('logo.png'),
    gallery: {
      main: generateFluid('gallery-1.jpg'),
      sub: [
        generateFluid('gallery-2.jpg'),
        generateFluid('gallery-3.jpg'),
        generateFluid('gallery-4.jpg'),
        generateFluid('gallery-5.jpg'),
      ],
    },
    track: {
      programming: generateFluid(`track-programming.png`),
      design: generateFluid(`track-design.png`),
      creative: generateFluid(`track-creative.png`),
    },
    schedule: [
      generateFluid(`schedule-0.png`),
      generateFluid(`schedule-1.png`),
      generateFluid(`schedule-2.png`),
      generateFluid(`schedule-3.png`),
    ],
  }
}

export default IndexPage
