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

### Dropping lower-order terms

**Rule.** If $h(n) = O(g(n))$, then:

$$
g(n) + h(n) = \Theta(g(n))
$$

In other words, a term that grows no faster than $g(n)$ (such as $h(n)$ in this case) can be dropped from the sum. In particular, for a polynomial, only the highest-order term matters: $2n^2 + 3n + 5 = \Theta(2n^2)$. Since $\Theta(2n^2) = \Theta(n^2)$ by [dropping a constant inside the notation](#constant-inside-the-notation), $2n^2 + 3n + 5 = \Theta(n^2)$.

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

#### A specific case, step by step

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
