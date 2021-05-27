import Layout from "../components/Layout";
import { useState } from "react";


export default function Contact() {
  const [mailForm, setMailForm] = useState('');
  const [mailMsg, setMailMsg] = useState('');
  const [visible, setVisible] = useState(false);


  const handleSubmit = (e) => { 
    e.preventDefault()
    console.log('Sending')
  let data = {
      mailForm,
      mailMsg,
    }
  fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) =>{
      console.log(res)
      if(res.status === 200){
        setMailMsg('')
        setMailForm('')
        setVisible(true)
      }
    })
  }
 
  console.log(mailForm, mailMsg)



  
  return (
    <Layout>
      <div className="flex flex-col justify-center  items-center h-screen w-full ">
      <h1 className="block w-full text-center text-white text-3xl  hover:text-purple-500 duration-700 font-bold mb-6">
            Contact Me
          </h1>
        <div className="w-7/12 bg-darkPurple rounded-lg  shadow-2xl p-8 m-4">
          
          <form action="/" method="post">
            <div className="flex flex-col mb-4">
              <label className="mb-2 font-bold text-lg text-white">
                Email
              </label>
              <input
                className="border py-2 px-3 text-grey-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
                type="email"
                onChange={(e)=>{setMailForm(e.target.value)}}
                name="email"
                id="email"
                
              />
            </div>
            <div className="flex flex-col  mb-4">
              <label className="mb-2 font-bold text-lg text-white">
                Message
              </label>
              <textarea
                
                className="border items-start py-2 px-3 h-64 resize-none focus:outline-none focus:ring-2 focus:ring-purple-600 text-grey-800 text-left inline-flex break-words "  
                type="text"
                name="message"
                onChange={(e)=>{setMailMsg(e.target.value)}}
                id="message"
              />
            </div>
            <button
              className="block bg border-purple-600 border  w-1/2 
              text-white hover:bg-almostBlack transition ease-in duration-500 hover:text-white 
              hover:animate-pulse uppercase text-lg mx-auto p-4 rounded"
              type="submit"
              onClick={(e) => {handleSubmit(e)}}
            >
              Send
            </button>
          </form>
          
        </div>
        {visible? 
        <h1 className="block w-full text-center text-white text-3xl  hover:text-purple-500 duration-700 font-bold mb-6">
        Thank you!
      </h1>
      :<></> }
          
      </div>
    </Layout>
  );
}
