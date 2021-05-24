import Link from 'next/link'

export default function Main(){
    return(
        <div className="mx-auto w-max opacity-95 flex items-center">
            <div className="w-full h-62 font-serif transition ease-in ">
                <h1 className="text-6xl text-white flex-wrap w-9/12 text-center">
                    My name is Vinicius, but you can call me 
                    <p className="text-purple-500 text-center">`Vibe`</p>
                    junior web-dev
                </h1>
                <Link href="/contact">
                <button className="border-purple-600 border p-3 w-9/12 text-2xl mt-10 
                text-white hover:bg-purple-500 transition ease-in duration-500 hover:text-black 
                hover:animate-pulse">
                <a>Contact me!</a></button>
                </Link>
                
            </div>
        </div>
    )
}