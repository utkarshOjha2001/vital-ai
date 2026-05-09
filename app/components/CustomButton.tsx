import { variantStyles, sizeStyles } from "@/constants/cutsomButtonConstants";
import { clsx } from 'clsx';


const CustomButton = ({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  fullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled || loading}
      className={clsx(
        `
        rounded-md
        font-semibold
        transition-all
        duration-300
        cursor-pointer
        active:scale-[0.98]
        disabled:opacity-50
        disabled:cursor-not-allowed
        flex
        items-center
        justify-center
        gap-2
        `,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && 'w-full',
        className
      )}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
};

export default CustomButton;
