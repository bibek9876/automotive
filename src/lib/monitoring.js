// @ts-check

/**
 * @param {unknown} error
 * @param {{ source: string; extra?: Record<string, unknown> }} context
 * @returns {void}
 */
export function reportError(error, context) {
  if (process.env.NODE_ENV !== 'production') {
    console.error(`[${context.source}]`, error, context.extra ?? {});
    return;
  }

  if (typeof window !== 'undefined') {
    const maybeWindow = /** @type {{ Sentry?: { captureException?: Function } }} */ (window);
    const sentry = maybeWindow.Sentry;

    if (typeof sentry?.captureException === 'function') {
      sentry.captureException(error, {
        tags: { source: context.source },
        extra: context.extra,
      });
      return;
    }
  }

  console.error(`[${context.source}]`, error, context.extra ?? {});
}
