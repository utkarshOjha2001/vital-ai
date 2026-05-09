interface ButtonProps {
    text: string;
    handleClick: () => void;
    width?: string;
    height?: string;
    type?: 'primary' | 'secondary' | 'danger' | 'submit' | 'reset';
}