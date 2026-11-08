# Multiple Variables

So far, every running time has depended on a single input size $n$. Some functions take several inputs whose sizes vary independently, so their running time depends on more than one variable. For two inputs of sizes $n$ and $m$, we write $T(n, m)$.

For example, both functions below take two lists. Let $n$ be the length of `a` and $m$ the length of `b`:

```python
def print_both(a, b):
    for x in a:
        print(x)
    for y in b:
        print(y)

def print_pairs(a, b):
    for x in a:
        for y in b:
            print(x, y)
```

Counting calls to `print`:

- `print_both` runs one loop after the other, so $T(n, m) = n + m$.
- `print_pairs` runs the inner loop $m$ times for each of the $n$ values of `x`, so $T(n, m) = n \cdot m$.

## Big Theta with two variables

The definition of Big Theta extends to two variables with one more threshold, $m_0$. For a function $g(n, m)$:

```math
\Theta(g(n, m)) = \{\, f(n, m) : \text{there exist positive constants } c_1, c_2, n_0, \text{ and } m_0 \text{ such that } 0 \le c_1 \cdot g(n, m) \le f(n, m) \le c_2 \cdot g(n, m) \text{ for all } n \ge n_0 \text{ and } m \ge m_0 \,\}
```

As before, $f(n, m)$ is the analyzed function and $g(n, m)$ is the reference function. The bounds only have to hold once **both** inputs are large enough. Big O and Big Omega extend in the same way: each keeps its one-sided inequality and gets the extra threshold $m_0$.

For `print_both`, $f(n, m) = n + m$. Choose $g(n, m) = n + m$, $c_1 = c_2 = 1$, and $n_0 = m_0 = 1$. The chain to verify is:

$$
0 \le 1 \cdot (n + m) \le n + m \le 1 \cdot (n + m)
$$

For all $n \ge 1$ and $m \ge 1$, each part holds:

- $0 \le n + m$, because $n \ge 1$ and $m \ge 1$.
- $1 \cdot (n + m) \le n + m$, because the two sides are equal.
- $n + m \le 1 \cdot (n + m)$, for the same reason.

So $T(n, m) = \Theta(n + m)$.

For `print_pairs`, $f(n, m) = n \cdot m$. With $g(n, m) = n \cdot m$ and the same constants, the chain is:

$$
0 \le 1 \cdot (n \cdot m) \le n \cdot m \le 1 \cdot (n \cdot m)
$$

Here $0 \le n \cdot m$ because $n \ge 1$ and $m \ge 1$, and the other two parts hold because their sides are equal. So $T(n, m) = \Theta(n \cdot m)$.

As with one variable, Big Theta gives both bounds at once: $T(n, m) = O(n + m)$ and $T(n, m) = \Omega(n + m)$ for `print_both`, and $T(n, m) = O(n \cdot m)$ and $T(n, m) = \Omega(n \cdot m)$ for `print_pairs`.

## Keep both variables

When we [drop lower-order terms](03-dropping-lower-order-terms.md), we know which term grows faster. With two independent inputs, we don't: either $n$ or $m$ can be much larger than the other. So neither variable can be dropped.

For example, `print_both` is not $O(n)$. If `a` has one element and `b` has a million, almost all the work comes from `b`, but $O(n)$ ignores $m$ completely.

**Proof that $n + m \ne O(n)$.** Suppose $n + m = O(n)$. Then there are positive constants $c$, $n_0$, and $m_0$ such that, for all $n \ge n_0$ and $m \ge m_0$:

$$
n + m \le c \cdot n
$$

1. The inequality must hold for every $m \ge m_0$, so fix $n = n_0$:

$$
n_0 + m \le c \cdot n_0
$$

2. Subtract $n_0$ from both sides:

$$
m \le c \cdot n_0 - n_0 = (c - 1) \cdot n_0
$$

3. The right side is a constant, but $m$ can be any value $m \ge m_0$. Choosing $m$ larger than both $m_0$ and $(c - 1) \cdot n_0$ breaks the inequality in step 2.

No constants work, so $n + m \ne O(n)$. $\blacksquare$

**Conclusion.** Since $n + m \ne O(n)$, the upper bound required by Big Theta fails, so $n + m \ne \Theta(n)$. The lower bound does hold: with $c = 1$ and $n_0 = m_0 = 1$, for all $n \ge 1$ and $m \ge 1$:

$$
0 \le 1 \cdot n \le n + m
$$

So $n + m = \Omega(n)$. The variable $n$ alone gives a lower bound but not a tight one.

By the same argument with the roles of $n$ and $m$ swapped, $n + m \ne O(m)$. The same holds for products: $n \cdot m$ is neither $O(n)$ nor $O(m)$.

## When one input is known to be smaller

Sometimes the problem tells us how the inputs relate. For example, when searching for a pattern of length $m$ in a text of length $n$, a match is only possible if $m \le n$. With $1 \le m \le n$, the bounds simplify:

| Running time | Big O | Big Omega | Big Theta |
|---|---|---|---|
| $n + m$ | $O(n)$ | $\Omega(n)$ | $\Theta(n)$ |
| $n \cdot m$ | $O(n^2)$ | $\Omega(n)$ | neither $\Theta(n)$ nor $\Theta(n^2)$ |

The sum is dominated by the larger input, so $m$ drops out. The product is only trapped between $n$ and $n^2$: where it falls depends on $m$, so $\Theta(n \cdot m)$ remains the tight bound.

We don't prove these bounds here. Each one follows from the definitions, like the proofs above.

## Graphs

Graphs are the most common place where two sizes appear. A graph has $V$ vertices and $E$ edges, and the two can vary independently: a graph with many vertices may have few edges, or many. An algorithm that visits every vertex once and follows every edge once does work proportional to both, so its running time is $\Theta(V + E)$. As with $n + m$, neither term can be dropped in general.
