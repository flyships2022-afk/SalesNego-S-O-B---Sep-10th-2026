import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { RoutePath } from '../types';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: RoutePath | string;
  targetElementId?: string;
  children: React.ReactNode;
}

export const Link: React.FC<LinkProps> = ({
  to,
  targetElementId,
  children,
  onClick,
  href,
  ...rest
}) => {
  const { navigate } = useNavigation();
  const destination = to || href || '/';

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }

    // Only intercept normal left clicks without modifier keys
    if (
      !e.defaultPrevented &&
      e.button === 0 &&
      !e.metaKey &&
      !e.altKey &&
      !e.ctrlKey &&
      !e.shiftKey &&
      (!rest.target || rest.target === '_self')
    ) {
      // Check if it's an internal route
      if (typeof destination === 'string' && destination.startsWith('/')) {
        e.preventDefault();
        navigate(destination as RoutePath, targetElementId);
      }
    }
  };

  return (
    <a href={destination} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};
