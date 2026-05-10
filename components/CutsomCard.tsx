import { variantStyles } from '@/constants/cardConstants';
import clsx from "clsx";

const CustomCard = ({
    variant = 'primary',
    width,
    height,
    className,
    children,
}: CustomCardProps) => {
    return (
        <div
           className={clsx(
    `
    p-4
    transition-all
    duration-500
    `,
    variantStyles[variant as keyof typeof variantStyles],
    width,
    height,
    className
  )}
        >
            {children}
        </div>
    );
};

export default CustomCard;