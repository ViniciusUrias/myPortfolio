import Layout from "../components/Layout";
import Image from "next/image";
import Card from "../components/Card";
export default function Work() {
  const images = [
    {
      id: 1,
      description: "IP Tracker made with React and React-LeafLet",
      imageUrl:
        "https://repository-images.githubusercontent.com/359850900/61b1b000-ba35-11eb-8477-f9613733f01d",
      url: "https://github.com/ViniciusUrias/leaflet-ip-tracker-react",
    },
    {
      id: 2,
      description: "YouTube home screen clone with React and MaterialUI",
      imageUrl:
        "https://repository-images.githubusercontent.com/348525947/3a2c0900-ba70-11eb-8466-c56fc1adb348",
      url: "https://github.com/ViniciusUrias/YouTubeClone",
    },
    {
      id: 3,
      description: "Link Shortner made with React",
      imageUrl:
        "https://repository-images.githubusercontent.com/360566815/bf8d0480-bc8e-11eb-8e9f-297512ca5837",
      url: "https://github.com/ViniciusUrias/linkShortner",
    },
    {
      id: 4,
      description: "Flutter app with Firebase Messaging",
      imageUrl: "https://i.ytimg.com/vi/sioEY4tWmLI/maxresdefault.jpg",
      url: "https://github.com/ViniciusUrias/flutterExampleWithFirebase",
    },
    {
      id: 5,
      description: "Pokedex made with vue.js",
      imageUrl:
        "https://repository-images.githubusercontent.com/331952117/bd6bb580-bedb-11eb-9c47-9ec8123cc757",
      url: 'https://github.com/ViniciusUrias/VuePokedex'
    },
    {
      id: 6,
      description: "Landing Page made with TailWindCSS",
      imageUrl:
        "https://repository-images.githubusercontent.com/370402838/c0716680-bc8d-11eb-8693-92fc326eea79",
      url: "https://github.com/ViniciusUrias/espressoLandingPage",
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
      <div
        className="grid grid-cols-1 w-full grid-flow-row overflow-x-hidden p-10  mt-5  gap-12
      "
      >
        {images.map((item) => {
          return (
            <Card
              key={item.id}
              className=""
              description={item.description}
              imageUrl={item.imageUrl}
              url={item.url}
            ></Card>
          );
        })}
        );
      </div>
    </Layout>
  );
};
