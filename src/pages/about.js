import Layout from "../components/Layout";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact, faNodeJs, faJsSquare, faDocker, faNpm, faGit, faAws, faHtml5, faCss3,} from '@fortawesome/free-brands-svg-icons'
export default function About(){
    return(
        <Layout>
           <div className="flex items-center w-full mx-auto  ">
                <div className="text-white  w-1/2 h-max flex flex-col  border-r border-purple-300 items-center px-16 space-y-3 justify-center">
                    <h2 className="text-2xl uppercase mb-5">I´m a new Front-End developer</h2>
                    <p className="text-lg uppercase">I'm graduating from college in July 2021. I've been studying development since the beginning of 2019 and I found that what I'm most interested in is front-end development</p>
                    <p className="text-lg uppercase">I am currently focusing on website development using React and NextJs, but I have also had contact with other frameworks like VueJs and Angular</p>
                    <p className="text-lg uppercase">I really like to learn new ways to style my sites, like this one, which was developed with TailWind (I'm still learning)</p>
                    <p className="text-lg uppercase">I am attentive, self-taught, organized and I have a lot of obsession with learning. I am Brazilian, but I can speak, understand and write in English as well.</p>
                </div>
                <div className="grid   mx-auto text-white w-1/2 gap-5 h-full grid-flow-row grid-cols-3 grid-rows-3">
                    <FontAwesomeIcon className="gridIcons" icon={faHtml5}/>
                    <FontAwesomeIcon className="gridIcons" icon={faCss3}/>
                    <FontAwesomeIcon className="gridIcons" icon={faJsSquare}/>
                    <FontAwesomeIcon className="gridIcons" icon={faNodeJs}/>
                    <FontAwesomeIcon className="gridIcons animation animate-spin-slow  text-blue-400" icon={faReact}/>
                    <FontAwesomeIcon className="gridIcons" icon={faDocker}/>
                    <FontAwesomeIcon className="gridIcons" icon={faNpm}/>
                    <FontAwesomeIcon className="gridIcons" icon={faAws}/>   
                    <FontAwesomeIcon className="gridIcons" icon={faGit}/>                    
                 
                </div>
           </div>
        </Layout>
    )
}