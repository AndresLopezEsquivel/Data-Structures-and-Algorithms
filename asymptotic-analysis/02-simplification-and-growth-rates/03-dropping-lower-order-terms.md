# Dropping Lower-Order Terms

**Rule.** If $h(n) = O(g(n))$, then:

$$
g(n) + h(n) = \Theta(g(n))
$$

In other words, a term that grows no faster than $g(n)$ (such as $h(n)$ in this case) can be dropped from the sum. In particular, for a polynomial, only the highest-order term matters: $2n^2 + 3n + 5 = \Theta(2n^2)$. Since $\Theta(2n^2) = \Theta(n^2)$ by [dropping a constant inside the notation](02-dropping-constant-factors.md#constant-inside-the-notation), $2n^2 + 3n + 5 = \Theta(n^2)$.

**Proof.** Since $h(n) = O(g(n))$, there are positive constants $c$ and $n_0$ such that:

$$
0 \le h(n) \le c \cdot g(n) \quad \text{for all } n \ge n_0
$$

We also assume $g(n) \ge 0$, which always holds for running times and memory usage.

- **Lower bound:** add $g(n)$ to both sides of $0 \le h(n)$, which gives $g(n) \le g(n) + h(n)$.
- **Upper bound:** add $g(n)$ to both sides of $h(n) \le c \cdot g(n)$, then factor out $g(n)$:

$$
g(n) + h(n) \le g(n) + c \cdot g(n) = (1 + c) \cdot g(n)
$$

Combining both bounds, for all $n \ge n_0$:

$$
0 \le 1 \cdot g(n) \le g(n) + h(n) \le (1 + c) \cdot g(n)
$$

This is the definition of Big Theta with $c_1 = 1$ and $c_2 = 1 + c$. Therefore $g(n) + h(n) = \Theta(g(n))$. $\blacksquare$

## A specific case, step by step

The following case shows the rule in action, including how a bound in terms of $n$ becomes a bound in terms of $n^2$.

**Claim:** If $T(n) = 2n^2 + h(n)$ with $h(n) \in O(n)$, then $T(n) = \Theta(n^2)$.

**Proof.** We need positive constants $c_1$ and $c_2$ such that $c_1 \cdot n^2 \le T(n) \le c_2 \cdot n^2$ for all large enough $n$. Since $h(n) \in O(n)$, there are positive constants $c$ and $n_0$ such that:

$$
0 \le h(n) \le c \cdot n \quad \text{for all } n \ge n_0
$$

**Step 1: lower bound.** Add $2n^2$ to both sides of $0 \le h(n)$:

$$
2n^2 \le 2n^2 + h(n) = T(n)
$$

**Step 2: upper bound.** Add $2n^2$ to both sides of $h(n) \le c \cdot n$:

$$
T(n) = 2n^2 + h(n) \le 2n^2 + c \cdot n
$$

**Step 3: turn $n$ into $n^2$.** We replace $c \cdot n$ with the larger $c \cdot n^2$, so the upper bound becomes a single multiple of $n^2$. This is allowed because we only need an upper bound.

1. Start from $1 \le n$ and multiply both sides by $n$, which is positive, so the inequality keeps its direction: $n \le n^2$.
2. Multiply both sides by $c$, which is also positive: $c \cdot n \le c \cdot n^2$.
3. Add $2n^2$ to both sides: $2n^2 + c \cdot n \le 2n^2 + c \cdot n^2$.
4. Chain this with Step 2, then factor out $n^2$:

$$
T(n) \le 2n^2 + c \cdot n \le 2n^2 + c \cdot n^2 = (2 + c) \cdot n^2
$$

**Step 4: combine.** Steps 1 to 3 hold whenever both $n \ge n_0$ and $n \ge 1$, that is, for all $n \ge \max(n_0, 1)$:

$$
2n^2 \le T(n) \le (2 + c) \cdot n^2
$$

This is the definition of Big Theta with $c_1 = 2$ and $c_2 = 2 + c$. Therefore $T(n) = \Theta(n^2)$. $\blacksquare$

**Example.** Take $h(n) = 3n + 5$. Since $3n + 5 \le 8n$ for all $n \ge 1$, we have $c = 8$ and $n_0 = 1$, so:

$$
2n^2 \le 2n^2 + 3n + 5 \le 10n^2 \quad \text{for all } n \ge 1
$$

At $n = 3$, the chain from Step 3 gives:

$$
T(3) = 2(9) + 3(3) + 5 = 32 \le 2(9) + 8(3) = 42 \le 2(9) + 8(9) = 90 = 10 \cdot 9
$$

The lower-order term $3n + 5$ is absorbed into the constant of the highest-order term, $2n^2$.
