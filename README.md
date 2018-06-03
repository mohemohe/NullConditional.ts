# NullConditional.ts
magical null conditional function for TypeScript

## usage

```ts
import {chain as _, resolve} from "../";

const hoge: ITestObject = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: "text",
        }
    },
};

const e = resolve(_(_(_(_(object).b).d).e));
console.log(e) // "text"

const f = resolve(_(_(_(_(object).b).d).f));
console.log(f) // null
```