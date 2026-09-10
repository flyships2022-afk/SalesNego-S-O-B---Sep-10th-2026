import React from 'react';
import { useNavigation } from '../context/NavigationContext';

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  imgClassName?: string;
  variant?: 'auto' | 'white';
}

export const SalesNegoLogo: React.FC<LogoProps> = ({
  className = '',
  showTagline = false,
  imgClassName = 'h-10 sm:h-12 md:h-14 lg:h-16 w-auto',
  variant = 'auto',
}) => {
  const { navigate } = useNavigation();

  return (
    <button
      onClick={() => navigate('/')}
      className={`inline-flex flex-col items-start group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#103CE7] rounded-lg transition-opacity ${className}`}
      aria-label="SalesNego - Return to homepage"
    >
      <div className="flex items-center gap-2.5">
        {variant === 'white' ? (
          /* Explicit crisp white logo for dark surfaces (e.g. Footer) in both modes */
          <img
            src="/salesnego-logo-2.png"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src =
                'https://ik.imagekit.io/4rtwqlnkg/SalesNego%20Orginal%20Logos/2.png?updatedAt=1788234930847';
            }}
            alt="SalesNego"
            className={`${imgClassName} object-contain transition-transform duration-200 group-hover:scale-102`}
            loading="eager"
          />
        ) : (
          /* Auto mode for Header: Dark logo on crisp white header in Light Mode, white logo on dark header in Dark Mode */
          <>
            <img
              src="/salesnego-logo-1.png"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src =
                  'https://ik.imagekit.io/4rtwqlnkg/SalesNego%20Orginal%20Logos/1.png?updatedAt=1788234930371';
              }}
              alt="SalesNego"
              className={`${imgClassName} object-contain dark:hidden transition-transform duration-200 group-hover:scale-102`}
              loading="eager"
            />
            <img
              src="/salesnego-logo-2.png"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.onerror = null;
                target.src =
                  'https://ik.imagekit.io/4rtwqlnkg/SalesNego%20Orginal%20Logos/2.png?updatedAt=1788234930847';
              }}
              alt="SalesNego"
              className={`${imgClassName} object-contain hidden dark:block transition-transform duration-200 group-hover:scale-102`}
              loading="eager"
            />
          </>
        )}
      </div>

      {showTagline && (
        <span
          className={`text-[11px] font-semibold tracking-normal mt-1.5 ${
            variant === 'white'
              ? 'text-[#CBD5E1]'
              : 'text-slate-600 dark:text-[#CBD5E1]'
          }`}
        >
          B2B Commercial Execution
        </span>
      )}
    </button>
  );
};
