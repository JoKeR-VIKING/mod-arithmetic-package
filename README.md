# Modular Arithmetic Package

![Modular Arithmetic Package Logo](https://images.unsplash.com/photo-1608792992053-f397e328a56d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

A versatile JS package for modular arithmetic operations.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [License](#license)

## Introduction

Welcome to the Modular Arithmetic Package! This package provides a set of functions and tools for performing modular arithmetic operations. Whether you're working on cryptography, number theory, or any other field that involves modular arithmetic, this package is designed to simplify your tasks and provide efficient and reliable solutions.

Key features include:

- Addition, subtraction, multiplication, and exponentiation in modular arithmetic.
- Modular inverses and modular exponentiation.
- Compatibility with large integers and customizable modulus values.

## Installation

To install the package, use the following npm command:

```bash
npm install mod-arithmetic-package
```

## Usage

To use the package in your JS project, import the `mod-arithmetic-package` module:

```js
import { mod_add } from 'mod-arithmetic-package';
```

## Examples

- Performing modular addition
  - ```js
    import { mod_add } from 'mod-arithmetic-package';
    
    let a = 2, b = 3, MOD = 5;
    
    console.log(mod_add(a, b, MOD)) // -> 0;
    console.log(mod_add(a, b)) // MOD=1e9+7 by default -> 5;
    ```
- Performing modular subtraction
  - ```js
    import { mod_sub } from 'mod-arithmetic-package';
    
    let a = 1, b = 3, MOD = 1e9 + 7;
    
    console.log(mod_sub(a, b, MOD)) // -> 1000000005;
    console.log(mod_sub(a, b)) // MOD=1e9+7 by default -> 1000000005;
    ```
- Performing modular multiplication
  - ```js
    import { mod_mul } from 'mod-arithmetic-package';
    
    let a = 1, b = 3, MOD = 2;
    
    console.log(mod_mul(a, b, MOD)) // -> 1;
    console.log(mod_mul(a, b)) // MOD=1e9+7 by default -> 3;
    ```
- Performing modular division
  - ```js
    import { mod_div } from 'mod-arithmetic-package';
    
    let a = 1, b = 2, MOD = 1e9 + 7;
    
    console.log(mod_div(a, b, MOD)) // -> 500000004;
    console.log(mod_div(a, b)) // MOD=1e9+7 by default -> 500000004;
    ```
- Performing multiplicative modular inverse
  - ```js
    import { mod_inv } from 'mod-arithmetic-package';
    
    let a = 5, MOD = 1e9 + 7;
    
    console.log(mod_inv(a, MOD)) // -> 400000003;
    console.log(mod_inv(a)) // MOD=1e9+7 by default -> 400000003;
    ```
- Performing binary exponentiation (modular power)
  - ```js
    import { mod_pow } from 'mod-arithmetic-package';
    
    let a = 2, b = 32, MOD = 1e9 + 7;
    
    console.log(mod_pow(a, b, MOD)) // -> 294967268;
    console.log(mod_pow(a, b)) // MOD=1e9+7 by default -> 294967268;
    ```
    
## License

This package is licensed under the MIT License. Feel free to use it in your projects.