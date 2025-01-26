/**
 * Return an array of the given value.
 * @param {T | T[]} value The value to return as an array.
 * @returns {T[]}
 */
export function toArray(value) {
	return Array.isArray(value) ? value : [value];
}
