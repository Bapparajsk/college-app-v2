// theme/categoryThemes.ts
import { ProjectCategory } from '../types/project';

export interface CategoryTheme {
    backgroundColor: string;
    textColor: string;
    borderColor: string;
    buttonColor: string;
    icon: string;
}

// theme/categoryThemes.ts - Updated for classic light theme
export const categoryThemes: Record<ProjectCategory, CategoryTheme> = {
    'computer-science': {
        backgroundColor: 'bg-blue-50',
        textColor: 'text-blue-600',
        borderColor: 'border-blue-200',
        buttonColor: 'bg-blue-500',
        icon: '💻'
    },
    'technology': {
        backgroundColor: 'bg-purple-50',
        textColor: 'text-purple-600',
        borderColor: 'border-purple-200',
        buttonColor: 'bg-purple-500',
        icon: '🚀'
    },
    'electronics': {
        backgroundColor: 'bg-emerald-50',
        textColor: 'text-emerald-600',
        borderColor: 'border-emerald-200',
        buttonColor: 'bg-emerald-500',
        icon: '🔌'
    },
    'electrical': {
        backgroundColor: 'bg-amber-50',
        textColor: 'text-amber-600',
        borderColor: 'border-amber-200',
        buttonColor: 'bg-amber-500',
        icon: '⚡'
    },
    'automobile': {
        backgroundColor: 'bg-red-50',
        textColor: 'text-red-600',
        borderColor: 'border-red-200',
        buttonColor: 'bg-red-500',
        icon: '🚗'
    },
    'mechanical': {
        backgroundColor: 'bg-gray-100',
        textColor: 'text-gray-600',
        borderColor: 'border-gray-300',
        buttonColor: 'bg-gray-600',
        icon: '🔧'
    },
    'software': {
        backgroundColor: 'bg-indigo-50',
        textColor: 'text-indigo-600',
        borderColor: 'border-indigo-200',
        buttonColor: 'bg-indigo-500',
        icon: '📱'
    },
    'hardware': {
        backgroundColor: 'bg-orange-50',
        textColor: 'text-orange-600',
        borderColor: 'border-orange-200',
        buttonColor: 'bg-orange-500',
        icon: '💾'
    },
    'iot': {
        backgroundColor: 'bg-cyan-50',
        textColor: 'text-cyan-600',
        borderColor: 'border-cyan-200',
        buttonColor: 'bg-cyan-500',
        icon: '🌐'
    },
    'robotics': {
        backgroundColor: 'bg-pink-50',
        textColor: 'text-pink-600',
        borderColor: 'border-pink-200',
        buttonColor: 'bg-pink-500',
        icon: '🤖'
    }
};

export const getCategoryDisplayName = (category: ProjectCategory): string => {
    const names: Record<ProjectCategory, string> = {
        'computer-science': 'Computer Science',
        'technology': 'Technology',
        'electronics': 'Electronics',
        'electrical': 'Electrical',
        'automobile': 'Automobile',
        'mechanical': 'Mechanical',
        'software': 'Software',
        'hardware': 'Hardware',
        'iot': 'IoT',
        'robotics': 'Robotics'
    };
    return names[category];
};