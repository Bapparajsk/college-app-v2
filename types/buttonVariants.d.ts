
type ButtonKeys = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'default';

export type ButtonVariants = {
    [key in ButtonKeys]: {
        default: string;
        hovered: string;
        pressed: string;
        text: string;
        border?: string;
    };
}