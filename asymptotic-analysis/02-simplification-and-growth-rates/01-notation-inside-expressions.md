# Asymptotic Notation Inside an Expression

## Anonymous functions

So far, asymptotic notation has appeared alone on the right-hand side, as in $f(n) = O(g(n))$. It can also appear inside an expression:

$$
T(n) = 2n^2 + O(n)
$$

Here, $O(n)$ stands for some function in the set $O(n)$ that we don't bother to name, called an **anonymous function**:

$$
T(n) = 2n^2 + O(n) \quad \text{means} \quad T(n) = 2n^2 + h(n) \text{ for some } h(n) \in O(n)
$$

For example, $h(n)$ could be $3n + 5$ or $7$, since both are in $O(n)$. We don't need to know $h(n)$ exactly, only how fast it grows.

## Notation on both sides

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

## The two meanings of "="

Since both sides of $2n^2 + O(n) = O(n^2)$ are sets of functions, "=" here means "is a subset of" ($\subseteq$), not "is an element of" ($\in$). So "=" has two meanings, depending on what's on the left:

| Left side | "=" means | Example |
|---|---|---|
| A single function | $\in$ | $2n + 1 = O(n)$ |
| An expression containing $O$, $\Omega$, or $\Theta$ | $\subseteq$ | $2n^2 + O(n) = O(n^2)$ |

In both cases, the equation reads left to right only.
