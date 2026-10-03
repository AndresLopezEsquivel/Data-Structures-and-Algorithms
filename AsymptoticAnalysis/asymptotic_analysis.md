# Asymptotic Notation

Asymptotic notation:

* Applies to functions.
* Is usually applied to functions that characterize the running times of algorithms.
* Can be applied to functions that characterize some other aspect of algorithms, such as the amount of space they use.


# $\Theta$, $O$, and $\Omega$ Notations

<center>
<img src='./img/GraphicRepresentation_BigTheta_BigO_BigOmega.png' alt='Graphic Representation of Big Theta, Big O, and Big Omega'>

*Introduction to Algorithms, 3rd Edition, by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein*. *(a)* Big-Theta (Θ), *(b)* Big-O (O), *(c)* Big-Omega (Ω)
</center>

Before getting into the formal definitions of $\Theta$, $O$, and $\Omega$, from an algorithms standpoint:

* $f(n)$: Algorithm's resource-usage function (usually running time or space).
  * It can be seen as a cost function indicating how much resource an algorithm uses for a given $n$.
* $g(n)$: A reference function that we compare $f(n)$ against.
  * It is a reference function used to describe $f$'s growth rate.

The behavior of $f(n)$ (let's say $f$ represents running time) depends not only on the size of the input, but also on the input itself. Sorting is a perfect example: insertion sort is $\Theta(n)$ on already-sorted arrays, but $\Theta(n^2)$ on reverse-sorted arrays. We could have many already-sorted arrays of different sizes and still have $f(n) = \Theta(n)$ for all of them, or we could have many reverse-sorted arrays of different sizes and still have $f(n) = \Theta(n^2)$ for all of them.


## Big-Theta

For positive constants $c_1$, $c_2$, and $n_0$, $\Theta(g(n))$ is the <u>set of functions</u>:

$$
\Theta(g(n)) = \{ f(n) \mid 0 \leq C_1 \cdot g(n) \leq f(n) \leq C_2 \cdot g(n), \forall n \geq n_0 \}
$$

Since $\Theta(g(n))$ is a set of functions, we could write $f(n) \in \Theta(g(n))$, but we abuse equality notation and write $f(n) = \Theta(g(n))$. $\Theta$ provides an <u>asymptotically tight bound</u> (asymptotically bounds a function from above and below).

For any two functions $f(n)$ and $g(n)$, $f(n) = \Theta(g(n))$ if and only if $f(n) = O(g(n))$ and $f(n) = \Omega(g(n))$.

$$
\Theta(g(n)) \subseteq O(g(n)) \cap \Omega(g(n))
$$

## Big-O

For positive constants $c$ and $n_0$, $O(g(n))$ is the <u>set of functions</u>:

$$
O(g(n)) = \{ f(n) \mid 0 \leq f(n) \leq C \cdot g(n), \forall n \geq n_0 \}
$$

Since $O(g(n))$ is a set of functions, we could write $f(n) \in O(g(n))$, but we abuse equality notation and write $f(n) = O(g(n))$. $O$ provides an <u>asymptotically upper bound</u> (asymptotically bounds a function from above).

## Big-Omega

For positive constants $c$ and $n_0$, $\Omega(g(n))$ is the <u>set of functions</u>:

$$
\Omega(g(n)) = \{ f(n) \mid 0 \leq C \cdot g(n) \leq f(n), \forall n \geq n_0 \}
$$

Since $\Omega(g(n))$ is a set of functions, we could write $f(n) \in \Omega(g(n))$, but we abuse equality notation and write $f(n) = \Omega(g(n))$. $\Omega$ provides an <u>asymptotically lower bound</u> (asymptotically bounds a function from below).

## Worst-Case, and Best-Case Analysis

**$O$, $\Theta$, and $\Omega$ don’t mean “worst/average/best”**. They only describe **upper/lower/tight asymptotic bounds** of *whatever function you apply them to*.

* If you apply them to the **worst-case** time $T_{\text{worst}}(n)$, then:

  * $T_{\text{worst}}(n)\in O(g(n))$ is an upper bound on the worst case.
  * $T_{\text{worst}}(n)\in \Omega(g(n))$ is a lower bound on the worst case (i.e., the worst case is at least that big).

* If you apply them to the **best-case** time $T_{\text{best}}(n)$, then:

  * $T_{\text{best}}(n)\in O(g(n))$ is an upper bound on the best case.
  * $T_{\text{best}}(n)\in \Omega(g(n))$ is a lower bound on the best case.

So “Big-O = worst-case” is a *common usage habit* (people often choose to upper-bound the worst-case), not what the notation means. And “Big-$\Omega$ = best-case” is especially misleading: $\Omega$ is used for **lower bounds**, often to prove a problem/algorithm can’t be faster than $g(n)$ in the worst case—nothing to do with “best” unless you explicitly bind $T_{\text{best}}$.

Quick example: insertion sort best-case is $\Theta(n)$, so it’s also $O(n)$ and $\Omega(n)$. Here $O(\cdot)$ is describing **best-case**, not worst-case, because the underlying function is $T_{\text{best}}(n)$.


**Resources:**

* Introduction to Algorithms, 3rd Edition, by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein
