# reflect-circular-dependency

I don't get why only one of the dependencies is undefined. And, why is this and not the other one.
The output is:
```
yarn run v1.22.5
$ node -r ts-node/register index.ts
Just evaluating action property
Just evaluating user property
[class User]
undefined
✨  Done in 2.04s.
```
