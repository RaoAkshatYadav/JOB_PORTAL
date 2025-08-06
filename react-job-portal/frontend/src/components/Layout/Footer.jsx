import React, { useContext } from 'react'
import {Context} from "../../main"
import {Link} from "react-router-dom"
import { FaGithub , FaLinkedin} from "react-icons/fa"
import { SiLeetcode } from "react-icons/si";
import { RiInstagramFill} from "react-icons/ri"
import { FaXTwitter } from 'react-icons/fa6';
function Footer() {
  const {isAuthorized}  = useContext(Context)
  return (
    <footer className= {isAuthorized ? "footerShow" : "footerHide"}>
<div>&copy; All Rights Reserved by Akshat Yadav.</div>
<div>
  <Link to={'https://github.com/RaoAkshatYadav'} target='github'><FaGithub></FaGithub></Link>
  <Link to={'https://x.com/iam_akshagtyadav'} target='X'><FaXTwitter></FaXTwitter></Link>
  <Link to={'https://www.linkedin.com/in/akshat-yadav-3b1665233?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'} target='linkedin'><FaLinkedin></FaLinkedin></Link>
  <Link to={'https://www.instagram.com/iam_akshatyadav/'} target='instagram'><RiInstagramFill></RiInstagramFill></Link>
</div>
      
    </footer>
  )
}

export default Footer