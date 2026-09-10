import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F9FE] dark:bg-[#18181B] text-[#191919] dark:text-[#F7F9FE] p-6">
          <div className="max-w-md w-full p-6 rounded-xl bg-white dark:bg-[#27272A] border border-gray-200 dark:border-zinc-700/60 shadow-xl text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FF6004]/10 text-[#FF6004] mx-auto flex items-center justify-center font-bold text-xl">
              !
            </div>
            <h2 className="text-xl font-bold text-[#191919] dark:text-white">
              Application Notice
            </h2>
            <p className="text-sm text-[#606060] dark:text-zinc-400">
              An unexpected issue occurred while rendering.
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                if (typeof window !== 'undefined') window.location.href = '/';
              }}
              className="px-5 py-2.5 bg-[#FF6004] hover:bg-[#E05300] text-white font-semibold text-sm rounded-lg transition-colors"
            >
              Return to Homepage
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
