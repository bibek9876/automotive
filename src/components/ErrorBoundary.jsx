// @ts-check

'use client';

import Link from 'next/link';
import { Component } from 'react';

import { reportError } from '@/lib/monitoring';

/**
 * @extends {Component<{ children: import('react').ReactNode }, { hasError: boolean }>}
 */
export default class ErrorBoundary extends Component {
  /** @override */
  state = {
    hasError: false,
  };

  /**
   * @returns {{ hasError: boolean }}
   */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  /**
   * @override
   * @param {Error} error
   * @param {import('react').ErrorInfo} errorInfo
   * @returns {void}
   */
  componentDidCatch(error, errorInfo) {
    reportError(error, {
      source: 'ErrorBoundary',
      extra: {
        componentStack: errorInfo.componentStack,
      },
    });
  }

  /**
   * @returns {void}
   */
  handleRetry = () => {
    this.setState({ hasError: false });
  };

  /**
   * @override
   * @returns {import('react').ReactNode}
   */
  render() {
    if (this.state.hasError) {
      return (
        <main className="section-stack bg-[var(--color-navy)] px-4 py-20 text-[var(--color-ink)]">
          <section className="section-shell">
            <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
              <p className="section-label text-[11px] font-semibold">Site Error</p>
              <h1 className="section-heading mt-4 text-[var(--color-ink)]">
                Something went wrong on this page
              </h1>
              <p className="section-copy mt-6">
                Try reloading this section. If the problem continues, head back home or contact the
                workshop directly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  onClick={this.handleRetry}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-brand-hover)]"
                >
                  Retry
                </button>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-ink-soft)] px-6 py-3.5 text-sm font-semibold text-[var(--color-ink)] transition duration-300 hover:bg-[var(--color-hover-overlay)]"
                >
                  Go home
                </Link>
              </div>
            </div>
          </section>
        </main>
      );
    }

    return this.props.children;
  }
}
