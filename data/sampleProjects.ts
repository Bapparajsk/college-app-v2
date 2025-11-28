// data/sampleProjects.ts
import { Project } from '../types/project';

export const sampleProjects: Project[] = [
    {
        id: '1',
        name: 'Smart Home Automation',
        description: 'An IoT-based home automation system that allows users to control home appliances remotely using a mobile application.',
        category: 'iot',
        technologies: ['React Native', 'Node.js', 'MQTT', 'Arduino', 'ESP32'],
        featured: true,
        githubUrl: 'https://github.com/example/smart-home',
        liveDemoUrl: 'https://example.com/demo'
    },
    {
        id: '2',
        name: 'Autonomous Vehicle Navigation',
        description: 'Computer vision and machine learning based navigation system for autonomous vehicles with real-time obstacle detection.',
        category: 'automobile',
        technologies: ['Python', 'OpenCV', 'TensorFlow', 'ROS', 'LiDAR'],
        featured: true,
        githubUrl: 'https://github.com/example/autonomous-vehicle'
    },
    {
        id: '3',
        name: 'Power Grid Monitoring',
        description: 'Real-time monitoring system for electrical power grids with predictive maintenance and fault detection capabilities.',
        category: 'electrical',
        technologies: ['C++', 'Python', 'SCADA', 'Modbus', 'SQL'],
        featured: false
    },
    {
        id: '4',
        name: 'Medical Robotics Arm',
        description: 'Precision robotic arm for medical applications with haptic feedback and AI-assisted movement patterns.',
        category: 'robotics',
        technologies: ['C++', 'ROS', 'Python', 'OpenCV', 'Arduino'],
        featured: true
    },
    {
        id: '5',
        name: 'Blockchain Voting System',
        description: 'Secure and transparent voting system built on blockchain technology for election integrity.',
        category: 'computer-science',
        technologies: ['Solidity', 'Web3.js', 'React', 'Node.js', 'Ethereum'],
        featured: false
    }
];