// types/project.ts
export type ProjectCategory =
    | 'computer-science'
    | 'electronics'
    | 'automobile'
    | 'software'
    | 'iot'
    | 'robotics';

export interface Project {
    id: string;
    name: string;
    description: string;
    category: ProjectCategory;
    imageUrl?: string;
    technologies: string[];
    githubUrl?: string;
    liveDemoUrl?: string;
    featured: boolean;
}

export interface ProjectCardProps {
    project: Project;
    onExplore: (projectId: string) => void;
}