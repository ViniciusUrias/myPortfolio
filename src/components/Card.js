export default function Card(props){
    return(
        <div className="w-full h-full ">
            <div className="rounded-md h-full bg-opacity-50  mx-auto  bg-lightPurple hover:bg-opacity-100 duration-700 shadow-inner
            xs:w-10/12 ">
              <div className="flex text-white text-lg w-full text-center uppercase justify-center pt-2 xs:break-words">
                <h1 className="">{props.description}</h1>
              </div>
              <div className="flex mx-auto shadow-2xl  w-11/12">
              <img src={props.imageUrl} className="  w-full object-contain "/>
              </div>
              <div className="hidden justify-center mt-4 text-white xs:break-words sm:flex ">
                <a href={props.url} target="_blank">
                  <p className="hover:text-purple-500 duration-700 pt-2">{props.url}</p>
                </a>
                
              </div>
            </div>
        </div>
    )
}