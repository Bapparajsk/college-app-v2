// theme/categoryThemes.ts
import { ProjectCategory } from '../types/project';

export interface CategoryTheme {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    buttonColor: string;
    icon: string;
}

export const getCategoryDisplayName = (category: ProjectCategory): string => {
    const names: Record<ProjectCategory, string> = {
        'computer-science': 'Computer Science',
        'electronics': 'Electronics',
        'automobile': 'Automobile',
        'software': 'Software',
        'iot': 'IoT',
        'robotics': 'Robotics'
    };
    return names[category];
};