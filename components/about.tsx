import Picture from "./picture";
const tools = ["Tailwind", "Nextjs", "Figma", "React"];
const resources = [
  "SEO",
  "Google business management",
  "Shots",
  "Spline",
  "Framer",
];

export default function About() {
  return (
    <section
      className="max-w-[1300px] m-auto px-6 lg:pt-32 pt-20 snap-section md:flex justify-center"
      id="about"
    >
      <div className="md:w-1/2">
        <div>
          <div className="w-10 border border-custom-green-400" />
          <p className="pb-6 text-5xl font-thin tracking-wider lg:pb-0">
            About me
          </p>
        </div>
        <div className="overflow-hidden md:mr-6 rounded-3xl max-w-[500px] m-auto md:mx-0 lg:max-w-[600px] my-6">
          <Picture
            src="./profile.PNG"
            className="h-full overflow-hidden scale-[1.02] "
            alt="profile picture"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center text-lg md:w-1/2 md:pr-6">
        <p>
          Hello my name is Kulbir Singh, and I am a full stack web developer
          from Montreal. I hold a diploma in web development from Concordia
          University and gained extensive experience in IOS apps, web apps, and
          UI/UX design at Carbonia. I am dedicated to providing exceptional web
          experiences while ensuring a standard of excellence in my work. With
          my expertise in building complex web applications from front-end to
          back-end, I provide innovative solutions for clients across
          industries.
        </p>
        <div className="text-lg">
          <p className="pt-6 text-xl">Tools I use:</p>
          <div className="flex flex-wrap -translate-x-1.5 py-1.5">
            {tools.map((tool) => {
              return (
                <div key={tool} className="p-3 px-1.5">
                  <p className="inline p-3 py-2 text-base shadow-md bg-custom-green-300">
                    {tool}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="pt-3 text-xl">Useful resources:</p>
          <div className="flex flex-wrap -translate-x-1.5 py-1.5">
            {resources.map((tool) => {
              return (
                <div key={tool} className="p-3 px-1.5">
                  <p className="inline p-3 py-2 text-base shadow-md bg-custom-green-300">
                    {tool}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
