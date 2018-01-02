## Key Takeaways

"Spec" is short for specification. It's an idea that comes from Behaviour Driven Development (BDD) which is an offshoot of Test Driven Development. A "spec" allows us to use test suites to programatically define a specification for the code we're writing.

Specs can and will evolve and improve over time.

We can run Jest against a specific file by invoking it directly through npx and adding a filename to the end. Like so:

```
npx jest shopping-cart.js
```

When we call the `it` function without passing a callback, Jest just skips the test.

## Frequently Asked Questions 

### When should I use the `it` function vs the `test` function? 
I prefer `it` because I find it more readable. But since they're exactly the same, which one you use is less important than being consistent. Make sure you and your team are using the same test function throughout all your test suites.