/**
 * `keys` returns an array with the enumerable property names of the object.
 *
 * Numeric keys are actually strings, even though the type is a literal number.
 */
export function keys<A extends object>(value: A): Array<keyof A> {
  return Object.keys(value) as Array<keyof A>
}

/** `map` transforms the values of an object using the function. */
export function map<A extends object, B>(
  value: A,
  mapfn: (field: A[keyof A], key: keyof A) => B,
): { [P in keyof A]: B } {
  const obj: { [P in keyof A]?: B } = {}
  const objKeys = keys(value)
  for (let i = 0; i < objKeys.length; i++) {
    const key = objKeys[i]
    obj[key] = mapfn(value[key], key)
  }
  return obj as { [P in keyof A]: B }
}
