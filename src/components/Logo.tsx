import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon';
}

export const Logo = ({ className, size = 'md', variant = 'full' }: LogoProps) => {
  const sizes = {
    sm: { icon: 'w-8 h-8', text: 'text-lg' },
    md: { icon: 'w-10 h-10', text: 'text-xl' },
    lg: { icon: 'w-14 h-14', text: 'text-2xl' },
  };

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {/* Logo Icon - Abstract tank/cylinder shape */}
      <svg
        viewBox="0 0 48 48"
        className={cn(sizes[size].icon, 'flex-shrink-0')}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background shape - rounded rectangle */}
        <rect
          x="2"
          y="2"
          width="44"
          height="44"
          rx="8"
          className="fill-accent"
        />
        
        {/* Abstract tank silhouette */}
        <path
          d="M14 12C14 10.8954 14.8954 10 16 10H32C33.1046 10 34 10.8954 34 12V14C34 14 36 15 36 18V34C36 36.2091 34.2091 38 32 38H16C13.7909 38 12 36.2091 12 34V18C12 15 14 14 14 14V12Z"
          className="fill-white"
        />
        
        {/* Tank top detail - oval */}
        <ellipse
          cx="24"
          cy="14"
          rx="8"
          ry="3"
          className="fill-accent/30"
        />
        
        {/* Water level indicator lines */}
        <path
          d="M16 22H32M16 27H32M16 32H28"
          className="stroke-accent"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      {/* Brand text */}
      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span className={cn(
            'font-display font-black tracking-tight text-foreground',
            sizes[size].text
          )}>
            ROTO
          </span>
          <span className="text-[0.6rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            Tank Solutions
          </span>
        </div>
      )}
    </div>
  );
};
