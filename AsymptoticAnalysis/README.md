# Asymptotic Analysis

In the context of algorithms, asymptotic analysis is the process of characterizing how an algorithm's running time or memory usage grows as the input size grows arbitrarily large.

We focus on large inputs because that is where efficiency, meaning how much time and memory an algorithm uses, matters most. For small inputs, almost any algorithm runs quickly, but as inputs grow, an algorithm's growth rate outweighs factors such as hardware speed or implementation details. This allows us to compare algorithms independently of the machine they run on.

## Asymptotic Notation

### Preliminaries

#### Input size $n$

$n$ denotes the **input size**, the quantity used to measure how large an input is. What $n$ represents depends on the problem: it might be the number of elements in a list, the number of characters in a string, or the number of nodes in a graph.

Importantly, $n$ captures only the **size** of the input, not its **content**. Two inputs of the same size can therefore require different amounts of time or memory to process. For example, a sorted array and a reverse-sorted array have the same size, but a sorting algorithm may take much longer on one than the other.
