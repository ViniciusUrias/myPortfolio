import Layout from "../components/Layout";
import Image from 'next/image'
export default function Work() {

    const images = [
      {
        'id': 1,
        'description': 'IP Tracker made with React and React-LeafLet',
        'imageUrl': 'https://repository-images.githubusercontent.com/359850900/61b1b000-ba35-11eb-8477-f9613733f01d',
        'url': 'https://github.com/ViniciusUrias/leaflet-ip-tracker-react'

      },
      {
        'id': 2,
        'description': 'YouTube home screen clone with React',
        'imageUrl': 'https://repository-images.githubusercontent.com/348525947/3a2c0900-ba70-11eb-8466-c56fc1adb348',
        'url': 'https://github.com/ViniciusUrias/YouTubeClone'
      },
      {
        'id': 3,
        'description': 'Link Shortner made with React',
        'imageUrl': 'https://repository-images.githubusercontent.com/360566815/bf8d0480-bc8e-11eb-8e9f-297512ca5837',
        'url': 'https://github.com/ViniciusUrias/linkShortner'
      },
      {
        'id': 4,
        'description': 'Flutter app with Firebase Messaging',
        'imageUrl':'https://i.ytimg.com/vi/sioEY4tWmLI/maxresdefault.jpg',
        'url':'https://github.com/ViniciusUrias/flutterExampleWithFirebase'
      },
      {
        'id': 5,
        'description': 'Pokedex made with vue.js',
        'imageUrl': 'https://camo.githubusercontent.com/37afeeb365003b21e6c77bdccd72bb9ba26ac684d655a8d7c36b9c0e83f13234/68747470733a2f2f692e696d6775722e636f6d2f4b34416b37486b6c2e706e673f31',
        'url': 'https://github.com/ViniciusUrias/VuePokedex'
      },
      {
        'id': 6,
        'description': 'Landing Page made with TailWindCSS',
        'imageUrl': "https://repository-images.githubusercontent.com/370402838/c0716680-bc8d-11eb-8693-92fc326eea79",
        'url': 'https://github.com/ViniciusUrias/espressoLandingPage'
      },
      // {
      //   'id': 7,
      //   'description': 'React Native App for finding lost pets',
      //   'imageUrl': 'https://repository-images.githubusercontent.com/337597319/ec421b80-bc90-11eb-9c11-032d559e397e',
      //   'url': 'https://github.com/ViniciusUrias/ReactNativePet'
      // }

  ];

  return (
    <Layout>
      <div className="grid grid-cols-1 h-max w-full overflow-x-hidden p-10  mt-5 grid-rows-1 gap-12
      sm:grid-cols-2 sm:grid-rows-3
      ">
        {images.map((item, index) => {
          return (
            <div className=" w-full">
            <div key={item.id} className=" rounded-md h-full bg-opacity-50  w-max mx-auto  bg-darkPurple hover:bg-opacity-100  shadow-2xl
            xs:w-8/12 ">
              <div className="flex text-white text-lg w-full text-center uppercase justify-center pt-2 xs:break-words">
                <h1 className="">{item.description}</h1>
              </div>
              <div className="flex  h-full">
              <img src={item.imageUrl} className=" h-4/5 w-full object-contain "/>
              </div>
              <div className="hidden justify-center -mt-10 text-white xs:break-words sm:flex ">
                <a href={item.url} target="_blank">
                  <p className="hover:text-purple-500 duration-700 pt-2">{item.url}</p>
                </a>
                
              </div>
            </div>
            </div>
          );
        })}
      </div>
    </Layout>
  );
      }
