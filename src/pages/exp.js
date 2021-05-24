import Layout from "../components/Layout";

export default function Skills(){
    return(
        <Layout>
            <div className="w-full h-full uppercase text-white text-center">
                <div className="mx-auto  w-3/5 my-20  h-11/12">
                    <h1 className="pt-2 text-4xl">Junior Developer ( 4 months )</h1>
                    <div className="borderItem">
                        <h2 className="text-2xl py-10">Activity Resume</h2>
                        <p>Maintenance of legacy systems and implementation of new techologies</p>
                    </div>
                    <div className="borderItem p-12 text-left">
                        <h2 className="mb-10">Techonolgies:</h2>
                        <h3>Front-End: React and Angular</h3>
                        <h3>Back-end: Spring Boot, NodeJS</h3>
                        <h3>CI/CD: Kubernetes, Jenkins, Docker</h3>
                        <h3>DataBases: Mysql, Oracle, MariaDB, MongoDB</h3>
                    </div>
                    <div className="mt-20 text-right">
                   
                        <a className="hover:text-purple-500 duration-700" href="http://arthais.systems/#/" target="_blank"> <h1>Here is the company´s website I started to develop</h1></a>
                   
                    </div>
                 
                </div>
            </div>
        </Layout>
    )
}