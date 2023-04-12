import React from 'react'
import css from './Footer.module.scss'
import { motion } from 'framer-motion'
import { footerVariants, staggerChildren } from '../../utils/motion'
const Footer = () => {
  return (
    <motion.section 
    variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}> 
        <motion.div
            variants={footerVariants}
         className={`innerwidth yPaddings flexCenter ${css.container}`}>

            <div className={css.left}>
                <span className='primaryText'>
                    Let's make something <br />  amazing together.
                </span>
                <span className='primaryText'>
                    Start By <a href="mailto:khintheigar1@gmail.com">Saying Hi</a>
                </span>
            </div>
            <div className={css.right}>
                <div className={css.info}>
                    <span className='secondaryText'>Information</span>
                    <p>No 20, Shwe Hnin Si Street, Sanchaung Yangon</p>
                </div>
                <div className={css.menu}>
                    <li>Service</li>
                    <li>Work</li>
                    <li>Notes</li>
                    <li>Experience</li>
                </div>
            </div>
        </motion.div>
    </motion.section>
  )
}

export default Footer
