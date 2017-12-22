## Key Takeaways

In every test, we must:

* Produce a result.
* Define what we expect that result to be.
* Throw an Error if they don't match.

Jest is a JavaScript testing framework used by Facebook that comes with everything you need to test your JavaScript code. That's why they call it "zero configuration."

Most people who've heard of Jest associate it with testing React apps, but it's a great general purpose JavaScript testing framework too.

You can read more about Jest at: [https://facebook.github.io/jest](https://facebook.github.io/jest)

npm test knows to run Jest because we set it up in our package.json. And Jest knows to run these tests because they're in a file with that includes ".test".

Jest automatically looks for any ".test" files and runs them.

The "test" function allows us to describe each test and isolate them from each other.

The expect function follows the form "expect some operation, to produce some result".

From now on, we'll be using Jest for all our tests.

## Frequently Asked Questions

**Why "Jest" and not \<Insert your favourite testing framework here\>?**

Jest works very well out-of-the-box and is actively used and maintained by a company that runs some of the most popular web apps on the planet.