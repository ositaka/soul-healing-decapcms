import Image from 'next/image'
import classes from './HeroImage.module.css'

export default function HeroImage({ image }) {
  return (
    <div className={classes.heroImage}>
      <Image fill priority src={image} sizes="100vw" alt="" />
    </div>
  )
}