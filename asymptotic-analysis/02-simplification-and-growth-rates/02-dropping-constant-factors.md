# Dropping Constant Factors

Multiplying a function by a positive constant doesn't change its growth rate. The rule applies in two places: to a constant in the function being analyzed, and to a constant inside the notation.

## Constant in the function

**Rule.** For any constant $k > 0$:

$$
k \cdot g(n) = O(g(n)), \quad k \cdot g(n) = \Omega(g(n)), \quad \text{and} \quad k \cdot g(n) = \Theta(g(n))
$$

For example, $5n^2 = \Theta(n^2)$ and $\frac{n}{2} = \Theta(n)$.

**Proof.** We use $f(n) = k \cdot g(n)$ and choose every constant in the definitions equal to $k$:

- **Big O** requires $0 \le f(n) \le c \cdot g(n)$. With $c = k$: $0 \le k \cdot g(n) \le k \cdot g(n)$.
- **Big Omega** requires $0 \le c \cdot g(n) \le f(n)$. With $c = k$: $0 \le k \cdot g(n) \le k \cdot g(n)$.
- **Big Theta** requires $0 \le c_1 \cdot g(n) \le f(n) \le c_2 \cdot g(n)$. With $c_1 = c_2 = k$: $0 \le k \cdot g(n) \le k \cdot g(n) \le k \cdot g(n)$.

In each case, the inequalities between the $k \cdot g(n)$ terms hold with equality, and $0 \le k \cdot g(n)$ holds because $k > 0$ and $g(n) \ge 0$, which is true of running times and memory usage. $\blacksquare$

## Constant inside the notation

**Rule.** For any constant $k > 0$:

$$
O(k \cdot g(n)) = O(g(n)), \quad \Omega(k \cdot g(n)) = \Omega(g(n)), \quad \text{and} \quad \Theta(k \cdot g(n)) = \Theta(g(n))
$$

Recall from [the two meanings of "="](01-notation-inside-expressions.md#the-two-meanings-of-) that, with notation on the left, "=" means $\subseteq$. For example, $O(k \cdot g(n)) = O(g(n))$ means that every function in $O(k \cdot g(n))$ is also in $O(g(n))$.

**Proof.** The constant $k$ is absorbed into the constants of the definition. Take any $f(n)$ from the set on the left. For all $n \ge n_0$:

- **Big O:** $0 \le f(n) \le c \cdot (k \cdot g(n)) = (c \cdot k) \cdot g(n)$, so $f(n) = O(g(n))$ with constant $c \cdot k$.
- **Big Omega:** $0 \le (c \cdot k) \cdot g(n) = c \cdot (k \cdot g(n)) \le f(n)$, so $f(n) = \Omega(g(n))$ with constant $c \cdot k$.
- **Big Theta:** $0 \le (c_1 \cdot k) \cdot g(n) \le f(n) \le (c_2 \cdot k) \cdot g(n)$, so $f(n) = \Theta(g(n))$ with constants $c_1 \cdot k$ and $c_2 \cdot k$.

Each new constant is a product of two positive numbers, so it's also positive, as the definitions require. $\blacksquare$

This is why we write $O(n)$, $\Omega(n)$, and $\Theta(n)$ rather than $O(2n)$, $\Omega(2n)$, and $\Theta(2n)$.
