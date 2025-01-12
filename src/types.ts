

/**
 * Combines two types by replacing properties of type A with properties from type B.
 * The properties in B will override those in A where there is overlap.
 *
 * @type Override<A, B>
 * @template A - The base type whose properties are to be overridden.
 * @template B - The type containing properties that will override those in A.
 * @example
 * type A = { name: string; age: number };
 * type B = { age: string };
 * type C = Override<A, B>; // { name: string; age: string }
 */
export type Override<A, B> = Omit<A, keyof B> & B;

/**
 * Represents a dictionary (or map) where the keys are strings and values are of type T.
 * Defaults to any type if T is not specified.
 *
 * @type Dict<T>
 * @template T - The type of the values in the dictionary (default is `any`).
 * @example
 * const numberDict: Dict<number> = { a: 1, b: 2 }; // Dictionary with number values.
 */
export type Dict<T = any> = Record<string, T>;

/**
 * Transforms all properties of a type into a union with null.
 * Each key in the object can either have its original type or be null.
 *
 * @type Nullable<T>
 * @template T - The type whose properties will be made nullable.
 * @example
 * type Person = { name: string; age: number };
 * type NullablePerson = Nullable<Person>; // { name: string | null; age: number | null }
 */
export type Nullable<T> = { [k in keyof T]: k | null }