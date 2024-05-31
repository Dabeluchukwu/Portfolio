import React from 'react'
import figmaLogo from '../../../assets/icons/figma-icon.svg'
import htmlLogo from '../../../assets/icons/html-icon.svg'
import cssLogo from '../../../assets/icons/css-icon.svg'
import tailwindLogo from '../../../assets/icons/tailwind-icon.svg'
import sassLogo from '../../../assets/icons/scss-icon.svg'
import jsLogo from '../../../assets//icons/js-icon.svg'
import reactLogo from '../../../assets//icons/react-icon.svg'
import gitLogo from '../../../assets//icons/git-icon.svg'
import githubLogo from '../../../assets//icons/github-gray.svg'
import linkedin from '../../../assets//icons/linkedin-gray.svg'

// import nextLogo from '../assets/next-logo-removebg-preview.png'


function Gallery() {
  const logos = [figmaLogo, htmlLogo, jsLogo, cssLogo, tailwindLogo, reactLogo, sassLogo, githubLogo, gitLogo, linkedin];

  return (
    <section className='flex justify-between gap-[2px] border-y-[2px] '>
      {logos.map((logo, index)=> (
        <div key={index} className='flex justify-center h-full w-full'>
            <img src={logo} alt="tech-logos" className='w-40' />
        </div>

      ))}
    </section>
  )
}

export default Gallery