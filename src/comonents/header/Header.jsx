import React, { useRef, useState } from "react";
import css from "../header/Header.module.scss";
import { BiMenuAltRight, BiPhoneCall} from "react-icons/bi"
import {motion} from 'framer-motion'
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from '../../hooks/useOutsideAlerter'
const Header = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    const headerShadow= useHeaderShadow();
    const menuRef= useRef()
   useOutsideAlerter(
    menuRef,
    setMenuOpen
   )
  return (
    <motion.div
    initial="hidden"
    whileInView="show"
    variants={headerVariants}
    viewport={{once:false, amount:0.25}}
     className={`paddings bg-primary ${css.wrapper}`}
     style={{boxShadow: headerShadow}}
     >

      <div className={`flexCenter innerWith ${css.container}`}>
        <div className={css.name}>Khin Theigar Kyaw</div>
        <ul
        ref={menuRef}
        style={getMenuStyles(menuOpen)}
         className={`flexCenter ${css.menu}`}>
          <li>
            <a href="#expertise">Services</a>
          </li>
          <li>
            <a href="#work">Expericence</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
              <p>+959 444 842 995</p>
              <BiPhoneCall size={"30px"}/>
            
          </li>
          
        </ul>
        {/* form media and small screen */}
        <div className={css.menuIcon}
        onClick={()=>setMenuOpen((prev)=>!prev)}>
            <BiMenuAltRight size={30}/>
          </div>
      </div>
    </motion.div>
  );
};

export default Header;
