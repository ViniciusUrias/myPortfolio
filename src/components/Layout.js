import Nav from '../components/Nav'

export default function Layout({children}){
    return(
       
        <div className="bg-almostBlack opacity-95 flex overflow-hidden w-screen"> 
        
           
          <Nav/>
            <div className="flex h-screen w-screen ">
             {children}
            </div>
           
        </div>
        
      
    )
}