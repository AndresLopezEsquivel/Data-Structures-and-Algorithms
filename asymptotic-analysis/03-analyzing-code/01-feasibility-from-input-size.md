# Feasibility from Input Size

Interview and contest problems usually state limits on their inputs, such as $n \le 10^5$, along with a time limit. These limits tell us which running times are fast enough before we write any code.

To turn a running time into seconds, we need a rough speed. A common rule of thumb is that Python runs about $10^7$ simple operations per second. This is only an estimate: the real rate depends on the machine and on what each operation does. It is still accurate enough to separate running times that differ by a factor of 10 or more.

## Estimating the running time

Suppose a problem has $n \le 10^5$ and a time limit of 1 second. To estimate the time, we plug the largest $n$ into the running time and divide by $10^7$.

An $O(n^2)$ algorithm does about $n^2$ operations:

$$
\frac{(10^5)^2}{10^7} = \frac{10^{10}}{10^7} = 10^3 \text{ seconds}
$$

That's about 17 minutes, a thousand times over the limit.

An $O(n \log n)$ algorithm does about $n \log_2 n$ operations. With $\log_2 10^5 \approx 17$:

$$
\frac{10^5 \cdot 17}{10^7} = \frac{1.7 \cdot 10^6}{10^7} = 0.17 \text{ seconds}
$$

That fits easily. So for $n \le 10^5$, the limit alone rules out $O(n^2)$ and points to $O(n \log n)$ or faster.

## Working backward

We can also turn the question around: given a budget of $10^7$ operations (about 1 second), what is the largest $n$ each running time can handle? We set the number of operations to at most $10^7$ and solve for $n$.

For $O(n^2)$:

$$
n^2 \le 10^7 \implies n \le 10^{3.5} \approx 3162
$$

For $O(n^3)$:

$$
n^3 \le 10^7 \implies n \le 10^{7/3} \approx 215
$$

For $O(2^n)$, take $\log_2$ of both sides:

$$
2^n \le 10^7 \implies n \le 7 \log_2 10 \approx 23
$$

For $O(n \log n)$ there's no closed-form solution, so we try values instead. With $n = 5 \cdot 10^5$:

$$
5 \cdot 10^5 \cdot \log_2(5 \cdot 10^5) \approx 5 \cdot 10^5 \cdot 19 \approx 10^7
$$

For $O(n!)$, we also try values. $10! \approx 3.6 \cdot 10^6$ fits, but $11! \approx 4 \cdot 10^7$ doesn't.

Rounding these values gives the table below. The last column lists a typical algorithm with each running time.

| Running time | Largest $n$ in about 1 second | Typical example |
|---|---|---|
| $O(\log n)$ | any | Binary search |
| $O(n)$ | $10^7$ | One pass over a list |
| $O(n \log n)$ | $5 \cdot 10^5$ | Sorting |
| $O(n^2)$ | $3 \cdot 10^3$ | Two nested loops |
| $O(n^3)$ | $200$ | Three nested loops |
| $O(2^n)$ | $23$ | Trying every subset |
| $O(n!)$ | $10$ | Trying every permutation |

## Reading the table in reverse

In practice, we use the table in reverse: the limit on $n$ suggests which running time to aim for.

- $n \le 10$: $O(n!)$ may work, so trying every permutation is an option.
- $n \le 20$: $O(2^n)$ may work, so trying every subset is an option.
- $n \le 200$: $O(n^3)$ may work.
- $n \le 3000$: $O(n^2)$ may work.
- $n \le 10^5$ or $10^6$: aim for $O(n \log n)$ or $O(n)$.
- Larger $n$: aim for $O(n)$ or $O(\log n)$.

A small limit doesn't require a slow algorithm. It only tells us that a slow one is allowed, which is useful when nothing faster comes to mind.

## Limits of the estimate

The table is a guide, not a guarantee:

- **Constant factors.** Big O hides them. An algorithm with $T(n) = 50n$ is $O(n)$ but does 50 times more work than one with $T(n) = n$. Near the boundary of the table, constants decide.
- **The cost of each operation.** The estimate counts simple operations, like comparing two numbers. Some Python operations that look simple cost $O(n)$ on their own, such as slicing a list. We cover these later in this folder.
- **The language.** Compiled languages like C++ run roughly $10^8$ simple operations per second, so the same limits allow larger $n$ there.

When the estimate lands within a factor of 10 of the budget, the only way to know is to measure.
