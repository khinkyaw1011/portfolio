import React from 'react'
import css from "../Hero/hero.module.scss"
import { motion } from 'framer-motion'
import {fadeIn, slideIn, staggerContainer} from '../../utils/motion'
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
       <motion.div 
       variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once:false,amount:0.25}}
       className={ `innerWidth ${css.container}`}>
        {/* upper elements */}
        <div className={css.upperElements}>
          <motion.span
          variants={fadeIn("right","tween",0.2,1)}
           className='primaryText'>Hey There,<br /> I'm Khin Theigar Kyaw
          </motion.span>
          <motion.span 
          variants={fadeIn("left","tween",0.4,1)}
          className='secondaryText'>
            I design beautiful simple <br />
            things, and I love what i do
          </motion.span>
        </div>
        {/* personal image */}
        <motion.div
        variants={fadeIn("up","tween",0.3,1)}
         className={css.person}>
        <motion.img
        variants={slideIn("up","tween",0.5,1.3)}
         src="./person.png" alt="" />
        </motion.div>
        {/* email */}
        <a className={css.email} href="mailto:khintheigar1@gmail.com">
          khintheigar1@gamil.com
        </a>
        {/* lower elements */}
        <div className={css.lowerElements}>
          <div className={css.experience}>
            <div className="primaryText">1</div>
            <div className='secondaryText'>
              <div className=''>Year</div>
              <div>Experience</div>
            </div>
          </div>
          <div className={css.certificate}>
            <img src="./certificate.png" alt=""/>
            <span>CERTIFICATE PROFATIONAL</span>
            <span>Frontend Developer</span>
          </div>
        </div>
       </motion.div>
       
    </section>
  )
}

export default Hero
