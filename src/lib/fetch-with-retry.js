// @ts-check

const DEFAULT_TIMEOUT_MS = 10000;
const DEFAULT_RETRIES = 2;

/**
 * @param {number} delayMs
 * @returns {Promise<void>}
 */
function wait(delayMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMs);
  });
}

/**
 * @param {unknown} error
 * @returns {boolean}
 */
function isAbortError(error) {
  return error instanceof Error && error.name === 'AbortError';
}

/**
 * @param {string} input
 * @param {RequestInit & { timeoutMs?: number; retries?: number }} [init]
 * @returns {Promise<Response>}
 */
export async function fetchWithRetry(input, init = {}) {
  const { timeoutMs = DEFAULT_TIMEOUT_MS, retries = DEFAULT_RETRIES, ...requestInit } = init;

  let lastError = /** @type {unknown} */ (new Error('Request failed'));

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const response = await fetch(input, {
        ...requestInit,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) {
        return response;
      }

      if (response.status < 500 || attempt === retries) {
        return response;
      }
    } catch (error) {
      clearTimeout(timeoutId);
      lastError = error;

      if (!isAbortError(error) && attempt === retries) {
        throw error;
      }

      if (isAbortError(error) && attempt === retries) {
        throw error;
      }
    }

    await wait(250 * 2 ** attempt);
  }

  throw lastError;
}
