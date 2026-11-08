# Sequential and Nested Loops

Most of the running time of a function comes from its loops. This section shows how to count loop iterations and turn the count into a Big Theta bound.

## Counting the dominant operation

We don't need to count every operation a function performs. Consider:

```python
def a(n):
    total = 0
    for i in range(n):
        total += 1
    for j in range(n):
        total += 1
    return total
```

Suppose each simple line performs a constant number of basic operations: $k_1$ for `total = 0`, $k_2$ for each `total += 1`, and $k_3$ for `return total`. The two loops run `total += 1` a total of $2n$ times, so:

$$
T(n) = k_1 + 2k_2 n + k_3
$$

Dropping lower-order terms and constant factors gives $T(n) = \Theta(n)$. The lines outside the loops only add a constant, and the exact number of operations in each line only changes a constant factor. Neither affects the result.

So in practice we count only the **dominant operation**: the one that runs most often, usually the body of the innermost loop. Every other line runs at most as often, so including it would change the count by at most a constant factor. For `a`, the dominant operation is `total += 1`, which runs $2n$ times.

This only works if every line performs $O(1)$ operations. Some Python operations look simple but perform $O(n)$ operations on their own. For example, `b = a[:]` copies the whole list. We cover these later in this folder.

## Sequential code adds

When blocks of code run one after the other, their counts add. Consider:

```python
def d(n):
    total = 0
    for i in range(n):
        total += 1
    for i in range(n):
        for j in range(n):
            total += 1
    return total
```

The first loop runs `total += 1` $n$ times, and the nested loops run it $n^2$ times, so:

$$
T(n) = n + n^2
$$

[Dropping lower-order terms](../02-simplification-and-growth-rates/03-dropping-lower-order-terms.md) gives $T(n) = \Theta(n^2)$.

In general, if one block performs $f_1(n)$ operations and the next performs $f_2(n)$, together they perform $f_1(n) + f_2(n)$.

Often we only know a bound for each block, not its exact count. Then the [sum rule](../02-simplification-and-growth-rates/04-sum-rule.md) applies: the sum is bounded by whichever bound grows faster. For `d`, the first block is $\Theta(n)$ and the second is $\Theta(n^2)$. Since $n = O(n^2)$:

$$
\Theta(n) + \Theta(n^2) = \Theta(n^2)
$$

Either way, the slowest block determines the running time of sequential code.

## Nested loops multiply

When one loop runs inside another, their counts multiply. Consider:

```python
def e(n, m):
    total = 0
    for i in range(n):
        for j in range(m):
            total += 1
    return total
```

The outer loop runs $n$ times, and each pass runs the inner loop $m$ times, so:

$$
T(n, m) = nm = \Theta(nm)
$$

With two independent inputs, neither term can be dropped, as in [multiple variables](../02-simplification-and-growth-rates/09-multiple-variables.md).

Nesting doesn't automatically mean $n^2$. If the inner loop has a fixed size, the result is linear:

```python
def e2(n):
    total = 0
    for i in range(n):
        for j in range(5):
            total += 1
    return total
```

Here $T(n) = 5n = \Theta(n)$.

In general, if the outer loop runs $f_1(n)$ times and each pass of the inner loop performs $f_2(n)$ operations, together they perform $f_1(n) \cdot f_2(n)$. When we only know bounds, the [product rule](../02-simplification-and-growth-rates/05-product-rule.md) applies. For `e2`:

$$
\Theta(n) \cdot \Theta(1) = \Theta(n)
$$

This only works when every pass of the inner loop performs the same number of operations. When the inner count depends on the outer variable, we have to add the passes one by one, as in the next section.

## Triangular loops

When the inner loop depends on the outer variable, the passes have different sizes. Consider:

```python
def c(n):
    total = 0
    for i in range(n):
        for j in range(i):
            total += 1
    return total
```

On pass $i$, the inner loop runs $i$ times: $0$ times for $i = 0$, once for $i = 1$, and so on up to $n - 1$ times. We add the passes one by one and use the formula derived at the end of this section:

$$
T(n) = \sum_{i=0}^{n-1} i = 0 + 1 + \dots + (n-1) = \frac{n(n-1)}{2}
$$

For example, with $n = 3$ the inner loop runs $0 + 1 + 2 = 3$ times, and $\frac{3 \cdot 2}{2} = 3$.

This is $\Theta(n^2)$. The triangle does about half the work of a full $n \times n$ nested loop, but it is still quadratic.

### Starting the inner loop at `i`

Now the inner loop starts at `i` instead of `0`:

```python
def c2(n):
    total = 0
    for i in range(n):
        for j in range(i, n):
            total += 1
    return total
```

On pass $i$, the inner loop runs $n - i$ times: $n$ times for $i = 0$, $n - 1$ times for $i = 1$, and so on down to once for $i = n - 1$. Adding the passes:

$$
T(n) = \sum_{i=0}^{n-1} (n - i) = n + (n-1) + \dots + 1 = \frac{n(n+1)}{2}
$$

With $n = 3$, the inner loop runs $3 + 2 + 1 = 6$ times, and $\frac{3 \cdot 4}{2} = 6$.

This is also $\Theta(n^2)$.

### Comparing the two loops

The count for `c2` is larger than the count for `c` by exactly $n$:

$$
\frac{n(n+1)}{2} - \frac{n(n-1)}{2} = \frac{n^2 + n - n^2 + n}{2} = \frac{2n}{2} = n
$$

To see why, look at the values of `j` on pass $i$. In `c`, $j = 0, \dots, i - 1$, and in `c2`, $j = i, \dots, n - 1$. Together they cover $j = 0, \dots, n - 1$, which is a full pass of $n$ values. Over all $n$ passes, the two counts add up to the count of a full $n \times n$ nested loop:

$$
\frac{n(n-1)}{2} + \frac{n(n+1)}{2} = n^2
$$

### The sum $1 + 2 + \dots + n$

To find a closed form, write the sum $S = 1 + 2 + \dots + n$ twice, once forward and once backward:

$$
S = 1 + 2 + \dots + (n-1) + n
$$

$$
S = n + (n-1) + \dots + 2 + 1
$$

Adding the two lines column by column, each of the $n$ columns adds up to $n + 1$:

$$
2S = n(n+1) \implies S = \frac{n(n+1)}{2}
$$

This is the count for `c2`. For `c`, the sum stops at $n - 1$ instead of $n$, and the $0$ term adds nothing. Replacing $n$ with $n - 1$ in the formula:

$$
0 + 1 + \dots + (n-1) = \frac{(n-1)n}{2} = \frac{n(n-1)}{2}
$$
