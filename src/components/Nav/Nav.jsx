import React from 'react'
import "./nav.css"
import { FiHome } from "react-icons/fi"
import { FiUser } from "react-icons/fi"
import { AiOutlineFolderOpen } from "react-icons/ai"
import { FaBusinessTime } from "react-icons/fa"
import { AiOutlineContacts } from "react-icons/ai"
import { FaHandshake } from "react-icons/fa"
import { useState } from 'react'

const Nav = () => {
  const [activeNav,setActivenav] = useState("/#");
  return (
    <nav>
      <a href="/#" onClick={()=>setActivenav("/#")}  className={activeNav ==="/#"?'active':''}><FiHome/></a>
      <a href="/#about" onClick={()=>setActivenav("/#about")} className={activeNav ==="/#about"?'active':''}><FiUser /></a>
      <a href="/#portfolio" onClick={()=>setActivenav("/#portfolio")} className={activeNav ==="/#portfolio"?'active':''}><AiOutlineFolderOpen/></a>
      <a href="/#experience" onClick={()=>setActivenav("/#experience")} className={activeNav ==="/#experience"?'active':''}><FaBusinessTime/></a>
      <a href="/#services" onClick={()=>setActivenav("/#services")} className={activeNav ==="/#services"?'active':''}><FaHandshake/></a>
      <a href="/#contact" onClick={()=>setActivenav("/#contact")} className={activeNav ==="/#contact"?'active':''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav