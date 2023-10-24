/**
 * Solution 1: Iteration
 * @param n
 * @returns
 * Time Complexity: O(n) - This implementation uses a simple loop that iterates from 1 to n, so it performs n additions.
 * Space Complexity: O(1) - It only uses a constant amount of extra space.
 */
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Solution 2: Recursive
 * @param n
 * @returns
 * Time Complexity: O(n) - This implementation uses recursion and performs n additions.
 * Space Complexity: O(n) - The recursion stack can grow up to n levels deep, which contributes to the space complexity.
 */
function sum_to_n_b(n: number): number {
  if (n === 1) {
    return 1;
  } else {
    return n + sum_to_n_b(n - 1);
  }
}

/**
 * Solution 3: Closed-form Formula
 * @param n
 * @returns
 * Time Complexity: O(1) - This implementation uses a closed-form formula to calculate the sum directly in constant time, regardless of the value of n.
 * Space Complexity: O(1) - It only uses a constant amount of extra space.
 */
function sum_to_n_c(n: number): number {
  return (n * (n + 1)) / 2;
}

function main() {
    const testCases = [1, 5, 10, 100];

    for (const n of testCases) {
      console.log(`Testing for n = ${n}`);

      // Using solution 1 (Iteration)
      const result_a = sum_to_n_a(n);
      console.log(`Solution 1: ${result_a}`);

      // Using solution 2 (Recursive)
      const result_b = sum_to_n_b(n);
      console.log(`Solution 2: ${result_b}`);

      // Using solution 3 (Closed-form Formula)
      const result_c = sum_to_n_c(n);
      console.log(`Solution 3: ${result_c}`);

      console.log("\n");
    }
  }

  main();

