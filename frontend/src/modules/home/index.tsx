import Skills from "./section/skills";
import About from "./section/about";
import Header from "./section/header";
import SubHeader from "./section/subheader";
import RecentProjects from "./section/recent-projects";
import Certification from "./section/certification";
import LineWaves from "@/components/LineWaves";

const Home = () => (
    <>
        <div className="absolute md:block md:absolute overflow-hidden inset-0 z-0 w-full h-full">
            <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent to-white dark:to-black" />
            <LineWaves
                speed={0.3}
                innerLineCount={12}
                outerLineCount={15}
                warpIntensity={1}
                rotation={-45}
                edgeFadeWidth={0}
                colorCycleSpeed={5}
                brightness={0.05}
                color1="#ffffff"
                color2="#ffffff"
                color3="#ffffff"
                enableMouseInteraction
                mouseInfluence={2}
            />
        </div>
        <Header />
        <main className="flex flex-col gap-12 py-14 md:gap-24">
            <SubHeader />
            <RecentProjects />
            <About />
            <Skills />
            <Certification />
        </main>
    </>
);

export default Home;
