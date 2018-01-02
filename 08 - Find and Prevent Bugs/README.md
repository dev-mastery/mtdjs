## Key Takeaways

Positive Tests ensure our code works under ideal circumstances, Negative Tests ensure our code works in less than ideal circumstances.  


Negative Tests are better at helping us discover and fix bugs than positive tests<sup>1</sup>.  


Asserting values that can change often but that don't have a significant impact on the functionality of our system will lead to fragile or brittle tests that need constant updates.

## Further Reading

*   [[1] Effects of Negative Testing on TDD: An Industrial Experiment](https://www.researchgate.net/publication/236893415_Effects_of_Negative_Testing_on_TDD_An_Industrial_Experiment)<span>
*   [Documentation for .toThrow()](https://facebook.github.io/jest/docs/en/expect.html#tothrowerror)
*   [Documentation for Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
*   [Documentation for isNaN()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN)
*   [Documentation for parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)