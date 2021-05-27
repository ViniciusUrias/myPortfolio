import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faInstagram, faGithub, } from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
export default function Nav(){
    return (
      <div className="w-44 h-screen uppercase bg-black text-purple-500 flex-col justify-around hidden xs:flex">
        <div>
          <Link href="/">
            <a>
          <img
            src="https://i.pinimg.com/originals/4c/55/98/4c5598ecf9869c63da73aacb1ecf2243.jpg"
            alt=""
          />
           </a>
          </Link>
         
          <h1 className="font-black text-3xl bg-gradient-to-r from-purple-700 border-r-4 border-purple-700 animate-pulse text-center mx-7">
            VI
          </h1>
        </div>
        <div className="text-purple-50 text-lg flex flex-col text-center">
          <Link href="/about">
            <a className="borderItem border-t hover:text-purple-500 duration-700">
              About
            </a>
          </Link>
          <Link href="/exp">
            <a className="borderItem hover:text-purple-500 duration-700">
              Experiences
            </a>
          </Link>
          <Link href="/work">
            <a className="borderItem hover:text-purple-500 duration-700">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="borderItem hover:text-purple-500 duration-700">
              Contact
            </a>
          </Link>
        </div>

        <div className="flex text-white justify-evenly text-xl mb-32">
          <a href="https://github.com/ViniciusUrias" target="_blank">
            <FontAwesomeIcon
              className="hover:text-purple-500 duration-700"
              icon={faGithub}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/vinicius-urias-94503a202/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="hover:text-purple-500 duration-700"
              icon={faLinkedin}
            />
          </a>
          <a
            href="https://www.instagram.com/vini_uriassssssssss/"
            target="_blank"
          >
            <FontAwesomeIcon
              className="hover:text-purple-500 duration-700"
              icon={faInstagram}
            />
          </a>
        </div>
        <a href="https://wa.me/5519996555141" target="_blank">
        <h1 className="text-center text-white hover:text-purple-500 duration-700">(19)9965-5151</h1>

        </a>
        <img className="p-2 mb-5" src="frame.png"></img>
        
      </div>
    );
}