# Simplification and Growth Rates

## Asymptotic notation inside an expression

### Anonymous functions

So far, asymptotic notation has appeared alone on the right-hand side, as in $f(n) = O(g(n))$. It can also appear inside an expression:

$$
T(n) = 2n^2 + O(n)
$$

Here, $O(n)$ stands for some function in the set $O(n)$ that we don't bother to name, called an **anonymous function**:

$$
T(n) = 2n^2 + O(n) \quad \text{means} \quad T(n) = 2n^2 + h(n) \text{ for some } h(n) \in O(n)
$$

For example, $h(n)$ could be $3n + 5$ or $7$, since both are in $O(n)$. We don't need to know $h(n)$ exactly, only how fast it grows.

### Notation on both sides

Asymptotic notation can also appear on both sides of an equation:

$$
2n^2 + O(n) = O(n^2)
$$

The left side describes not one function but a whole family: every function of the form $2n^2 + h(n)$, where $h(n)$ is any function in $O(n)$. For example:

| Choose $h(n)$ | Left side becomes |
|---|---|
| $3n + 5$ | $2n^2 + 3n + 5$ |
| $7$ | $2n^2 + 7$ |
| $n$ | $2n^2 + n$ |

The equation claims that **every** function in this family is in $O(n^2)$. That's true; for example, $2n^2 + 3n + 5 \le 10n^2$ for all $n \ge 1$.

The equation reads **left to right only**. Reversed, $O(n^2) = 2n^2 + O(n)$ would claim that every function in $O(n^2)$ has the form $2n^2 + h(n)$ with $h(n) \in O(n)$, which is false.

In set notation, the equation holds left to right, but not right to left:

```math
\{\, 2n^2 + h(n) : h(n) \in O(n) \,\} \subseteq O(n^2) \quad \text{(true)}
```

```math
O(n^2) \not\subseteq \{\, 2n^2 + h(n) : h(n) \in O(n) \,\} \quad \text{(true)}
```

### The two meanings of "="

Since both sides of $2n^2 + O(n) = O(n^2)$ are sets of functions, "=" here means "is a subset of" ($\subseteq$), not "is an element of" ($\in$). So "=" has two meanings, depending on what's on the left:

| Left side | "=" means | Example |
|---|---|---|
| A single function | $\in$ | $2n + 1 = O(n)$ |
| An expression containing $O$, $\Omega$, or $\Theta$ | $\subseteq$ | $2n^2 + O(n) = O(n^2)$ |

In both cases, the equation reads left to right only.

## Simplification rules

The rules in this section let us simplify asymptotic expressions without proving every bound from the definition.

### Dropping constant factors

Multiplying a function by a positive constant doesn't change its growth rate. The rule applies in two places: to a constant in the function being analyzed, and to a constant inside the notation.

#### Constant in the function

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

#### Constant inside the notation

**Rule.** For any constant $k > 0$:

$$
O(k \cdot g(n)) = O(g(n)), \quad \Omega(k \cdot g(n)) = \Omega(g(n)), \quad \text{and} \quad \Theta(k \cdot g(n)) = \Theta(g(n))
$$

Recall from [the two meanings of "="](#the-two-meanings-of-) that, with notation on the left, "=" means $\subseteq$. For example, $O(k \cdot g(n)) = O(g(n))$ means that every function in $O(k \cdot g(n))$ is also in $O(g(n))$.

**Proof.** The constant $k$ is absorbed into the constants of the definition. Take any $f(n)$ from the set on the left. For all $n \ge n_0$:

- **Big O:** $0 \le f(n) \le c \cdot (k \cdot g(n)) = (c \cdot k) \cdot g(n)$, so $f(n) = O(g(n))$ with constant $c \cdot k$.
- **Big Omega:** $0 \le (c \cdot k) \cdot g(n) = c \cdot (k \cdot g(n)) \le f(n)$, so $f(n) = \Omega(g(n))$ with constant $c \cdot k$.
- **Big Theta:** $0 \le (c_1 \cdot k) \cdot g(n) \le f(n) \le (c_2 \cdot k) \cdot g(n)$, so $f(n) = \Theta(g(n))$ with constants $c_1 \cdot k$ and $c_2 \cdot k$.

Each new constant is a product of two positive numbers, so it's also positive, as the definitions require. $\blacksquare$

This is why we write $O(n)$, $\Omega(n)$, and $\Theta(n)$ rather than $O(2n)$, $\Omega(2n)$, and $\Theta(2n)$.
