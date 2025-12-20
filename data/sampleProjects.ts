import { MemberCardProps } from "@/components/profile/member-card";
import { ProjectCardProps } from "@/components/ui/project-card";

export const sampleProjects: ProjectCardProps[] = [
    {
        title: "Smart Home System",
        subTitle: "IoT Developer",
        tags: ["IoT", "Home Automation", "Sensors"],
        rating: 4.8,
        members: 5,
        contributors: 15,
        type: "iot",
    },
    {
        title: "E-Commerce Website",
        subTitle: "Web Developer",
        tags: ["E-Commerce", "React", "Node.js"],
        rating: 4.6,
        members: 8,
        contributors: 25,
        type: "web",    
    },
    {
        title: "Fitness Tracker App",
        subTitle: "Mobile Developer",
        tags: ["Health", "Fitness", "React Native"],
        rating: 4.7,
        members: 6,
        contributors: 18,
        type: "mobile",
    },
    {
        title: "AI Chatbot",
        subTitle: "AI Developer",
        tags: ["AI", "Chatbot", "Machine Learning"],
        rating: 4.9,
        members: 4,
        contributors: 20,
        type: "ai",
    },
    {
        title: "3D Adventure Game",
        subTitle: "Game Developer",
        tags: ["Game Development", "3D", "Unity"],
        rating: 4.5,
        members: 10,
        contributors: 30,
        type: "game",
    },
];

export const simpleMembers:MemberCardProps[] = [
    {
        name: "Alice Johnson",
        experience: "3y",
        project_count: 12,
        rating: 4.5,
        skill_avg: 8.7,
        year: "2nd",
    },
    {
        name: "Bob Smith",
        experience: "5y",
        project_count: 20,
        rating: 4.8,
        skill_avg: 9.2,
        year: "3rd",
    },
    {
        name: "Charlie Brown",
        experience: "2y",
        project_count: 8,
        rating: 4.2,
        skill_avg: 7.9,
        year: "1st",
    },
    {
        name: "David Wilson",
        experience: "4y",
        project_count: 15,
        rating: 4.6,
        skill_avg: 8.5,
        year: "2nd",
    },
]