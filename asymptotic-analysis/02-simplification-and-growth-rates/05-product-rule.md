# Product Rule

If $f_1(n)$ is bounded by $g_1(n)$ and $f_2(n)$ is bounded by $g_2(n)$, then their product is bounded by the product $g_1(n) \cdot g_2(n)$. Unlike the sum rule, we don't need to know which reference function grows faster. The rule holds for all three notations.

| Notation | If | Then | Example |
|---|---|---|---|
| Big O | $f_1(n) = O(g_1(n))$ and $f_2(n) = O(g_2(n))$ | $f_1(n) \cdot f_2(n) = O(g_1(n) \cdot g_2(n))$ | $O(n) \cdot O(n) = O(n^2)$ |
| Big Omega | $f_1(n) = \Omega(g_1(n))$ and $f_2(n) = \Omega(g_2(n))$ | $f_1(n) \cdot f_2(n) = \Omega(g_1(n) \cdot g_2(n))$ | $\Omega(n) \cdot \Omega(n^2) = \Omega(n^3)$ |
| Big Theta | $f_1(n) = \Theta(g_1(n))$ and $f_2(n) = \Theta(g_2(n))$ | $f_1(n) \cdot f_2(n) = \Theta(g_1(n) \cdot g_2(n))$ | $\Theta(1) \cdot \Theta(n) = \Theta(n)$ |

## Big O

**Rule.** If $f_1(n) = O(g_1(n))$ and $f_2(n) = O(g_2(n))$, then:

$$
f_1(n) \cdot f_2(n) = O(g_1(n) \cdot g_2(n))
$$

**Proof.** By the definition of Big O, there are positive constants $a$, $b$, $n_1$, and $n_2$ such that:

$$
0 \le f_1(n) \le a \cdot g_1(n) \quad \text{for all } n \ge n_1
$$

$$
0 \le f_2(n) \le b \cdot g_2(n) \quad \text{for all } n \ge n_2
$$

Both hold for all $n \ge n_0 = \max(n_1, n_2)$. We replace one factor at a time. Multiplying both sides of an inequality by a number keeps its direction only if that number is at least $0$, so each step checks this.

**Step 1: replace $f_1(n)$.** Multiply both sides of $f_1(n) \le a \cdot g_1(n)$ by $f_2(n)$. This is safe because $f_2(n) \ge 0$, by the left part of its bound:

$$
f_1(n) \cdot f_2(n) \le a \cdot g_1(n) \cdot f_2(n)
$$

**Step 2: replace $f_2(n)$.** Multiply both sides of $f_2(n) \le b \cdot g_2(n)$ by $a \cdot g_1(n)$. This is safe because $0 \le f_1(n) \le a \cdot g_1(n)$, so $a \cdot g_1(n) \ge 0$:

$$
a \cdot g_1(n) \cdot f_2(n) \le a \cdot g_1(n) \cdot b \cdot g_2(n)
$$

**Step 3: chain the inequalities, then regroup.**

$$
f_1(n) \cdot f_2(n) \le a \cdot g_1(n) \cdot f_2(n) \le a \cdot g_1(n) \cdot b \cdot g_2(n) = (a \cdot b) \cdot g_1(n) \cdot g_2(n)
$$

**Step 4: check the lower condition.** Both $f_1(n)$ and $f_2(n)$ are at least $0$, so their product is too. For all $n \ge n_0$:

$$
0 \le f_1(n) \cdot f_2(n) \le (a \cdot b) \cdot g_1(n) \cdot g_2(n)
$$

This is the definition of Big O with $c = a \cdot b$. Therefore $f_1(n) \cdot f_2(n) = O(g_1(n) \cdot g_2(n))$. $\blacksquare$

As with the sum rule, the proof also shows that $O(g_1(n)) \cdot O(g_2(n)) = O(g_1(n) \cdot g_2(n))$. With notation on both sides, "=" means [the left side is a subset of the right side](01-notation-inside-expressions.md#the-two-meanings-of-):

```math
\{\, f_1(n) \cdot f_2(n) : f_1(n) \in O(g_1(n)),\ f_2(n) \in O(g_2(n)) \,\} \subseteq O(g_1(n) \cdot g_2(n))
```

The proof never uses any specific $f_1(n)$ or $f_2(n)$, so it covers every possible pair.

## Big Omega and Big Theta

The rule also holds for Big Omega and Big Theta, as the table shows. We only prove the Big O version here.
