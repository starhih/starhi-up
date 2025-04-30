import { ReactNode } from 'react';

/**
 * Base props interface for all components
 */
export interface BaseComponentProps {
  className?: string;
  children?: ReactNode;
}

/**
 * Props interface for components with an ID
 */
export interface IdentifiableComponentProps extends BaseComponentProps {
  id?: string;
}

/**
 * Props interface for components that can be disabled
 */
export interface DisableableComponentProps extends BaseComponentProps {
  disabled?: boolean;
}

/**
 * Props interface for components that can have a loading state
 */
export interface LoadableComponentProps extends BaseComponentProps {
  isLoading?: boolean;
}

/**
 * Props interface for components with error handling
 */
export interface ErrorHandlingComponentProps extends BaseComponentProps {
  error?: string | null;
  onError?: (error: Error) => void;
}

/**
 * Props interface for data-driven components
 */
export interface DataComponentProps<T> extends BaseComponentProps {
  data?: T;
  isLoading?: boolean;
  error?: string | null;
  onError?: (error: Error) => void;
}
