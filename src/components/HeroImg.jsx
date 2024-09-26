
import Image from 'next/image'

const HeroImg = ({ containerStyles , imgSrc }) => {
  return (
    <div className={`${containerStyles}`}>
        <Image 
        src={imgSrc}
        width={1500}
        height={1500}
        />
    </div>
  )
}

export default HeroImg