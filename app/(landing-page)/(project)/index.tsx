'use client'

import { CircleSmall, Plus, Sparkle } from "lucide-react";
import HomeGroup, { ProjectItem, ProjectList } from "../(component)/group";
import { AnimatedDivider } from "../../(component)/motion";

const ProjectSection = () => {
    return (
        <div className="container-small py-[40px] md:py-[80px] flex flex-col gap-[24px] md:gap-[40px]">
            <HomeGroup moreText="See More" icon={<Sparkle size={18} fill="#000" />} title="Latest Projects" moreLink="/project">
                <ProjectItem />
            </HomeGroup>
            <AnimatedDivider />
            <HomeGroup moreText="More Events" icon={<CircleSmall size={18} />} title="Events" moreLink="/event">
                <ProjectItem />
            </HomeGroup>
            <AnimatedDivider />
            <HomeGroup moreText="More Features" icon={<Plus size={18} />} title="Features" moreLink="/feature">
                <ProjectItem />
            </HomeGroup>
            <AnimatedDivider />
            <HomeGroup moreText="More Publications" icon={<Plus size={18} />} title="Publications" moreLink="/publication">
                <ProjectList />
            </HomeGroup>
            <AnimatedDivider />
            <HomeGroup moreText="More Writings" icon={<Plus size={18} />} title="Writings" moreLink="/writing">
                <ProjectList />
            </HomeGroup>
        </div>
    );
}

export default ProjectSection;
