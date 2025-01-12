/**
 * Generates a random string ID of a specified length using a provided set of characters.
 *
 * @function makeId
 * @param {number} [length=10] - Desired length of the generated ID (default is 10).
 * @param {string} [chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"] - Set of characters to use for generating the ID (default includes uppercase, lowercase letters, and digits).
 * @returns {string} - A randomly generated string ID.
 *
 * @example
 * makeId(); // Generates a random ID with default length (10) and character set.
 * makeId({ length: 5 }); // Generates a random ID of length 5.
 * makeId({ length: 8, chars: "ABCDEF012345" }); // Generates a random ID of length 8 using custom characters.
 */
export function makeId({
    length = 10,
    chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
}: {
    length?: number;
    chars?: string;
} = {}) {
    let result = "";

    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return result;
}