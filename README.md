# NullConditional.ts
magical null conditional function with typing for TypeScript

## usage

```ts
import {chain as _, resolve} from "../";

const hoge = {
    a: 1,
    b: {
        c: 2,
        d: {
            e: "text",
        }
    },
} as any;

const e = resolve(_(_(_(_(hoge).b).d).e));
console.log(e) // "text"

const f = resolve(_(_(_(_(hoge).b).d).f));
console.log(f) // null
```
