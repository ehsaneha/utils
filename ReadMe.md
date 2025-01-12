# Utility Types and Function Documentation

This package contains a utility function for generating random string IDs and several useful TypeScript types that enhance type flexibility and reusability in TypeScript projects.

## Table of Contents

1. [Installation](#installation)
2. [Functions Overview](#functions-overview)
   - [makeId](#makeid-function)
3. [Type Definitions](#type-definitions)
   - [Override](#override-type)
   - [Dict](#dict-type)
   - [Nullable](#nullable-type)

---

## Installation

To install this package, you can use either `npm` or `yarn`:

### Using npm:

```bash
npm install @ehsaneha/utils
```

### Using yarn:

```bash
yarn add @ehsaneha/utils
```

After installation, you can import and use the utilities in your TypeScript project:

```typescript
import { makeId, Override, Dict, Nullable } from "@ehsaneha/utils";
```

---

## Functions Overview

### `makeId` Function

The `makeId` function generates a random string ID of a specified length, using a provided set of characters. It defaults to generating a 10-character string consisting of uppercase and lowercase letters and digits.

#### Parameters:

- **`length`** _(optional)_: Specifies the desired length of the generated ID. Defaults to `10`.
- **`chars`** _(optional)_: A string containing the characters to use for ID generation. Defaults to alphanumeric characters (A-Z, a-z, 0-9).

#### Returns:

- A randomly generated string ID.

#### Example Usage:

```typescript
makeId(); // Generates a random ID with the default length (10) and character set.
makeId({ length: 8 }); // Generates a random ID of length 8.
makeId({ length: 5, chars: "ABCDEF012345" }); // Generates a random ID of length 5 using custom characters.
```

---

## Type Definitions

### `Override<A, B>` Type

The `Override` type allows you to create a new type by combining two types, `A` and `B`, where the properties of `B` override the properties of `A` if they share the same keys.

#### Example:

```typescript
type A = { name: string; age: number };
type B = { age: string };
type C = Override<A, B>; // { name: string; age: string }
```

In this example, the `age` property from type `B` overrides the `age` property from type `A`.

---

### `Dict<T>` Type

The `Dict` type is a generic type representing a dictionary (or map) where the keys are strings and the values are of type `T`. If no type is provided, it defaults to `any`.

#### Example:

```typescript
const numberDict: Dict<number> = { a: 1, b: 2 }; // Dictionary with number values.
const mixedDict: Dict = { a: 1, b: "text", c: true }; // Dictionary with mixed values (default `any` type).
```

---

### `Nullable<T>` Type

The `Nullable` type converts all the properties of a type `T` into a union with `null`, allowing each key to either hold its original type or `null`.

#### Example:

```typescript
type Person = { name: string; age: number };
type NullablePerson = Nullable<Person>; // { name: string | null; age: number | null }
```

In this example, each property of the `Person` type becomes either its original type or `null`.
