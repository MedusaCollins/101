class Solution:
    def get_minimizer(self, iterations: int, learning_rate: float, init: int) -> float:
        for _ in range(iterations):
            d = 2 * init
            init = init - learning_rate * d;
        return round(init, 5);


print(Solution().get_minimizer(2, 0.01, 1));
