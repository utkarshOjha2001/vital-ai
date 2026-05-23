// import NextAuth, { DefaultSession } from "next-auth";
// import { JWT } from "next-auth/jwt";
interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    width?: string;
    height?: string;
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'none';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    fullWidth?: boolean;
    className?: string;
}

interface CustomChipProps {
    variant?: 'primary' | 'secondary' | 'neutral' | 'none';
    className?: string;
    title?: string;
    size?: 'sm' | 'md' | 'lg';
}

interface CustomCardProps {
    variant?: 'primary' | 'secondary' | 'natural' | 'danger' | 'none';
    width?: string;
    height?: string;
    className?: string;
    children?: React.ReactNode;
}

interface ITypingTextProps {
    text: string;
    speed?: number;
    className?: string;
}

//store
interface BearState {
    bears: number;
    increaseBears: () => void;
    removeAllBears: () => void;
    updateBears: (newBears: number) => void;
  }