# Transitivity

If $f(n)$ is bounded by $g_1(n)$ and $g_1(n)$ is bounded by $g_2(n)$, then $f(n)$ is bounded by $g_2(n)$. The middle function drops out. The rule holds for all three notations.

Here, the second bound compares two reference functions, as in the [sum rule](04-sum-rule.md): $g_1(n) = O(g_2(n))$ means that $g_2(n)$ grows at least as fast as $g_1(n)$.

| Notation | If | Then | Example |
|---|---|---|---|
| Big O | $f(n) = O(g_1(n))$ and $g_1(n) = O(g_2(n))$ | $f(n) = O(g_2(n))$ | $n = O(n^2)$ and $n^2 = O(n^3)$, so $n = O(n^3)$ |
| Big Omega | $f(n) = \Omega(g_1(n))$ and $g_1(n) = \Omega(g_2(n))$ | $f(n) = \Omega(g_2(n))$ | $n^3 = \Omega(n^2)$ and $n^2 = \Omega(n)$, so $n^3 = \Omega(n)$ |
| Big Theta | $f(n) = \Theta(g_1(n))$ and $g_1(n) = \Theta(g_2(n))$ | $f(n) = \Theta(g_2(n))$ | $2n^2 + n = \Theta(n^2 + n)$ and $n^2 + n = \Theta(n^2)$, so $2n^2 + n = \Theta(n^2)$ |

## Big O

**Rule.** If $f(n) = O(g_1(n))$ and $g_1(n) = O(g_2(n))$, then:

$$
f(n) = O(g_2(n))
$$

**Proof.** By the definition of Big O, there are positive constants $a$, $b$, $n_1$, and $n_2$ such that:

$$
0 \le f(n) \le a \cdot g_1(n) \quad \text{for all } n \ge n_1
$$

$$
0 \le g_1(n) \le b \cdot g_2(n) \quad \text{for all } n \ge n_2
$$

Both hold for all $n \ge n_0 = \max(n_1, n_2)$.

**Step 1: turn $g_1(n)$ into $g_2(n)$.** Multiply both sides of $g_1(n) \le b \cdot g_2(n)$ by $a$, which is positive, so the inequality keeps its direction:

$$
a \cdot g_1(n) \le a \cdot b \cdot g_2(n)
$$

**Step 2: chain the inequalities.** The left part, $0 \le f(n)$, comes from the bound for $f(n)$. For all $n \ge n_0$:

$$
0 \le f(n) \le a \cdot g_1(n) \le a \cdot b \cdot g_2(n) = (a \cdot b) \cdot g_2(n)
$$

This is the definition of Big O with $c = a \cdot b$. Therefore $f(n) = O(g_2(n))$. $\blacksquare$

The proof never uses any specific $f(n)$, only the fact that $f(n) \in O(g_1(n))$. So every function in $O(g_1(n))$ is also in $O(g_2(n))$:

$$
\text{if } g_1(n) = O(g_2(n)), \text{ then } O(g_1(n)) \subseteq O(g_2(n))
$$

For example, since $n = O(n^2)$, every function in $O(n)$ is also in $O(n^2)$.

## Big Omega and Big Theta

The rule also holds for Big Omega and Big Theta, as the table shows. We only prove the Big O version here.
