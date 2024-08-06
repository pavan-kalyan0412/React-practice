import React from 'react'

function Hero({heroname}) {
    if(heroname === "hulk") {
        throw new Error('NOT A HERO')
    }
  return (
    <div>
        {heroname}
    </div>
  )
}

export default Hero