export default function add (...args) {
  const result = args.reduce(
    (prev, current) => parseFloat(prev) + parseFloat(current),
    0
  )
  if (isNaN(result)) {
    throw TypeError(
      'The add function can only be called with numeric parameters'
    )
  }
  return result
}
