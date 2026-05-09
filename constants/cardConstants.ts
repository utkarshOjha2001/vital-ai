export const variantStyles = {
    primary: `
    relative
    overflow-hidden

    rounded-[28px]

    bg-[rgba(10,25,47,0.72)]
    backdrop-blur-2xl

    border
    border-cyan-500/10

    shadow-[0_8px_40px_rgba(0,212,255,0.08)]

    text-[#D7E7FF]

    before:absolute
    before:inset-0
    before:bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.06),transparent)]
    before:pointer-events-none
  `,

    secondary: `
    relative
    overflow-hidden

    rounded-[24px]

    bg-[rgba(8,20,40,0.82)]
    backdrop-blur-xl

    border
    border-cyan-400/20

    shadow-[0_0_30px_rgba(0,212,255,0.12)]

    text-[#D7E7FF]

    before:absolute
    before:inset-0
    before:bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.04),transparent)]
    before:pointer-events-none
  `,

    danger: `
    relative
    overflow-hidden
    bg-[#242736]
    rounded-[24px]
    backdrop-blur-2xl

    border
    border-red-300/20

    shadow-[0_8px_32px_rgba(255,120,120,0.08)]

    text-[#f8afa7]

    before:absolute
    before:inset-0
    before:bg-[linear-gradient(to_bottom_right,rgba(255,255,255,0.05),transparent)]
    before:pointer-events-none
  `,
    natural: `
    relative
    overflow-hidden

    rounded-[26px]

    bg-[#0B1728]

    border
    border-white/[0.06]

    text-[#D7E7FF]

    shadow-[0_2px_12px_rgba(0,0,0,0.12)]

    backdrop-blur-lg
  `,
};


export const sizeStyles = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-5 text-base',
    lg: 'h-12 px-7 text-lg',
}