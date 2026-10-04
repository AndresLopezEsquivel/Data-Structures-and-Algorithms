# Asymptotic Analysis

In the context of algorithms, asymptotic analysis is the process of characterizing how an algorithm's running time or memory usage grows as the input size grows arbitrarily large.

We focus on large inputs because that is where efficiency, meaning how much time and memory an algorithm uses, matters most. For small inputs, almost any algorithm runs quickly, but as inputs grow, an algorithm's growth rate outweighs factors such as hardware speed or implementation details. This allows us to compare algorithms independently of the machine they run on.

## Asymptotic Notation

### Preliminaries

#### Input size $n$

$n$ denotes the **input size**, the quantity used to measure how large an input is. What $n$ represents depends on the problem: it might be the number of elements in a list, the number of characters in a string, or the number of nodes in a graph.

Importantly, $n$ captures only the **size** of the input, not its **content**. Two inputs of the same size can therefore require different amounts of time or memory to process. For example, a sorted array and a reverse-sorted array have the same size, but a sorting algorithm may take much longer on one than the other.

#### Running time $T(n)$

$T(n)$ denotes the **running time** of an algorithm on an input of size $n$, measured by the number of **basic operations** it performs, such as comparisons, assignments, or arithmetic operations. Counting operations rather than seconds makes the measure independent of the machine on which the algorithm runs.

Because inputs of the same size can require different numbers of operations, we must specify which case $T(n)$ describes:

* **Worst case:** the maximum number of operations over all inputs of size $n$.
* **Best case:** the minimum number of operations over all inputs of size $n$.
* **Average case:** the expected number of operations over all inputs of size $n$, assuming a specified distribution of inputs.

Unless stated otherwise, $T(n)$ refers to the worst case, which guarantees that no input of size $n$ requires more than $T(n)$ operations.

#### Memory usage $S(n)$

$S(n)$ denotes the **memory usage** of an algorithm on an input of size $n$, measured in **units of space**, where each stored value, such as a number, a character, or a reference, counts as one unit. Counting units rather than bytes makes the measure independent of the machine on which the algorithm runs.

Unless stated otherwise, $S(n)$ refers to the worst-case **auxiliary space**: the maximum extra memory used at any point during execution, over all inputs of size $n$. This includes new variables and data structures as well as the call stack used by recursion, but excludes the space occupied by the input itself.

#### Functions $f(n)$ and $g(n)$

$f(n)$ denotes the function being analyzed. In general, $f(n)$ can be any mathematical function of $n$, but in the analysis of algorithms it is usually $T(n)$ or $S(n)$. In principle, $f(n)$ is the exact number of operations or units of space, such as $f(n) = 2n^2 + n + 1$.

$g(n)$ denotes a simpler **reference function**, such as $n$, $n \log n$, or $n^2$, used to describe how $f(n)$ grows. Rather than stating $f(n)$ exactly, we compare it against $g(n)$, ignoring constant factors and lower-order terms.

In practice, determining $f(n)$ exactly is often difficult or unnecessary: the count depends on what we consider a basic operation, and some algorithms are too complex to count precisely. Asymptotic notation lets us bound $f(n)$ by $g(n)$ without knowing $f(n)$ exactly.
