type AnyFunction = (...args: unknown[]) => unknown

export function memoize<T extends AnyFunction>(
  fn: T,
  options: { maxSize?: number } = {},
): T & { cache: Map<string, ReturnType<T>>; clear: () => void } {
  const { maxSize = 100 } = options
  const cache = new Map<string, ReturnType<T>>()

  const memoized = function (this: unknown, ...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args)

    if (cache.has(key)) {
      return cache.get(key)!
    }

    const result = fn.apply(this, args) as ReturnType<T>

    if (cache.size >= maxSize) {
      const firstKey = cache.keys().next().value
      if (firstKey !== undefined) cache.delete(firstKey)
    }

    cache.set(key, result)
    return result
  } as T & { cache: Map<string, ReturnType<T>>; clear: () => void }

  memoized.cache = cache
  memoized.clear = () => cache.clear()

  return memoized
}
