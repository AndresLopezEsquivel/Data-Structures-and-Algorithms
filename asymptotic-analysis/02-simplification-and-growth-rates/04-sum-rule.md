# Sum Rule

If $f_1(n)$ is bounded by $g_1(n)$ and $f_2(n)$ is bounded by $g_2(n)$, then their sum is bounded by whichever reference function grows faster. The rule holds for all three notations.

Throughout, we assume that $g_2(n)$ grows at least as fast as $g_1(n)$:

$$
g_1(n) = O(g_2(n))
$$

Here, Big O compares two reference functions: $g_1(n) = O(g_2(n))$ means that $g_2(n)$ grows at least as fast as $g_1(n)$.

| Notation | If | Then | Example |
|---|---|---|---|
| Big O | $f_1(n) = O(g_1(n))$ and $f_2(n) = O(g_2(n))$ | $f_1(n) + f_2(n) = O(g_2(n))$ | $O(n) + O(n^2) = O(n^2)$ |
| Big Omega | $f_1(n) = \Omega(g_1(n))$ and $f_2(n) = \Omega(g_2(n))$ | $f_1(n) + f_2(n) = \Omega(g_2(n))$ | $\Omega(n) + \Omega(n^3) = \Omega(n^3)$ |
| Big Theta | $f_1(n) = \Theta(g_1(n))$ and $f_2(n) = \Theta(g_2(n))$ | $f_1(n) + f_2(n) = \Theta(g_2(n))$ | $\Theta(1) + \Theta(n) = \Theta(n)$ |

## Big O

**Rule.** If $f_1(n) = O(g_1(n))$ and $f_2(n) = O(g_2(n))$, then:

$$
f_1(n) + f_2(n) = O(g_2(n))
$$

**Proof.** By the definition of Big O, there are positive constants $a$, $b$, $k$, $n_1$, $n_2$, and $n_3$ such that:

$$
0 \le f_1(n) \le a \cdot g_1(n) \quad \text{for all } n \ge n_1
$$

$$
0 \le f_2(n) \le b \cdot g_2(n) \quad \text{for all } n \ge n_2
$$

$$
0 \le g_1(n) \le k \cdot g_2(n) \quad \text{for all } n \ge n_3
$$

All three hold for all $n \ge n_0 = \max(n_1, n_2, n_3)$.

**Step 1: add the bounds for $f_1(n)$ and $f_2(n)$.**

$$
f_1(n) + f_2(n) \le a \cdot g_1(n) + b \cdot g_2(n)
$$

**Step 2: turn $g_1(n)$ into $g_2(n)$.** Multiply both sides of $g_1(n) \le k \cdot g_2(n)$ by $a$, which is positive, so the inequality keeps its direction:

$$
a \cdot g_1(n) \le a \cdot k \cdot g_2(n)
$$

**Step 3: chain the inequalities, then factor.** Step 2 says $a \cdot g_1(n) \le a \cdot k \cdot g_2(n)$, so replacing $a \cdot g_1(n)$ with $a \cdot k \cdot g_2(n)$ can only make the right side larger:

$$
f_1(n) + f_2(n) \le a \cdot g_1(n) + b \cdot g_2(n) \le a \cdot k \cdot g_2(n) + b \cdot g_2(n) = (a \cdot k + b) \cdot g_2(n)
$$

**Step 4: check the lower condition.** Both $f_1(n)$ and $f_2(n)$ are at least $0$, so their sum is too. For all $n \ge n_0$:

$$
0 \le f_1(n) + f_2(n) \le (a \cdot k + b) \cdot g_2(n)
$$

This is the definition of Big O with $c = a \cdot k + b$. Therefore $f_1(n) + f_2(n) = O(g_2(n))$. $\blacksquare$

The proof also shows that $O(g_1(n)) + O(g_2(n)) = O(g_2(n))$. With notation on both sides, "=" means [the left side is a subset of the right side](01-notation-inside-expressions.md#the-two-meanings-of-):

```math
\{\, f_1(n) + f_2(n) : f_1(n) \in O(g_1(n)),\ f_2(n) \in O(g_2(n)) \,\} \subseteq O(g_2(n))
```

In words: whichever $f_1(n)$ from $O(g_1(n))$ and $f_2(n)$ from $O(g_2(n))$ we pick, their sum is in $O(g_2(n))$. The proof never uses any specific $f_1(n)$ or $f_2(n)$, only the fact that each one is in its set, so it covers every possible pair.

## Big Omega and Big Theta

The rule also holds for Big Omega and Big Theta, as the table shows. We only prove the Big O version here.
