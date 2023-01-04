
import { MetaTags } from "react-meta-tags";
import MainSection from "./sections/main_section";
import ProjectsSection from "./sections/portfolio_section";
import WorkSection from "./sections/work_section";

export default function MainPage() {

    return (
        <>
            <MetaTags>
                <title>Home | Paras Rai</title>
            </MetaTags>
            <MainSection />
            <WorkSection />
            <ProjectsSection />
        </>

    );
}