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
      <a href="/Portfolio/#" onClick={()=>setActivenav("/Portfolio/#")}  className={activeNav ==="/Portfolio/#"?'active':''}><FiHome/></a>
      <a href="/Portfolio/#about" onClick={()=>setActivenav("/Portfolio/#about")} className={activeNav ==="/Portfolio/#about"?'active':''}><FiUser /></a>
      <a href="/Portfolio/#portfolio" onClick={()=>setActivenav("/Portfolio/#portfolio")} className={activeNav ==="/Portfolio/#portfolio"?'active':''}><AiOutlineFolderOpen/></a>
      <a href="/Portfolio/#experience" onClick={()=>setActivenav("/Portfolio/#experience")} className={activeNav ==="/Portfolio/#experience"?'active':''}><FaBusinessTime/></a>
      <a href="/Portfolio/#services" onClick={()=>setActivenav("/Portfolio/#services")} className={activeNav ==="/Portfolio/#services"?'active':''}><FaHandshake/></a>
      <a href="/Portfolio/#contact" onClick={()=>setActivenav("/Portfolio/#contact")} className={activeNav ==="/Portfolio/#contact"?'active':''}><AiOutlineContacts/></a>
    </nav>
  )
}

export default Nav