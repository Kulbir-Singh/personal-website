// import Head from "next/head";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import AboutMe from "../components/aboutMe";
// import Credentials from "../components/credentials";
// import Freelance from "../components/freelance";
// import Hero from "../components/hero";
// import Navbar from "../components/navbar";
// import PageTemplate from "../components/pageTemplate";
// import styles from "../styles/Home.module.css";
// import { useWindowSize } from "../utils/getWindowDimensions";
// import Contact from "../components/contact";

// export default function Home() {
//   const size = useWindowSize();

//   const [desktopView, setDesktopView] = useState(size?.width > 1023);

//   useEffect(() => {
//     setDesktopView(size?.width > 1023);
//   }, [size?.width]);

//   return (
//     <div>
//       <Head>
//         <title>Kulbir Singh</title>
//         <meta name="description" content="Kulbir Singh - portfolio" />
//       </Head>

//       <main className="relative z-0 flex flex-col w-full h-full bg-custom-black">
//         {
//           <PageTemplate>
//             {desktopView ? (
//               <div className="flex w-full overflow-hidden">
//                 <Hero />
//                 <AboutMe />
//                 <Credentials />
//                 <Contact />
//               </div>
//             ) : (
//               <div className="h-full lg:hidden scroll-smooth">
//                 <Navbar />
//                 <Hero />
//                 <AboutMe />
//                 <Freelance />
//                 <div className="bg-white/[.05]">
//                   <Credentials />
//                 </div>{" "}
//                 <Contact />
//               </div>
//             )}
//           </PageTemplate>
//         }
//       </main>
//     </div>
//   );
// }
import React from "react";

export default function Template() {
  return <div>template</div>;
}
