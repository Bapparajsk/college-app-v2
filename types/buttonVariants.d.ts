
type ButtonKeys = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'default';

export type ButtonVariants = {
    [key in ButtonKeys]: {
        default: string;
        hovered: string;
        pressed: string;
        text: string;
        border?: string;
    };
}