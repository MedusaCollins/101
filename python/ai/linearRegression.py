import numpy as np
from numpy.typing import NDArray


class Solution:
    def get_model_prediction(self, X: NDArray[np.float64], weights: NDArray[np.float64]) -> NDArray[np.float64]:
        prediction = np.matmul(X, weights);
        return np.round(prediction, 5);

    def get_error(self, model_prediction: NDArray[np.float64], ground_truth: NDArray[np.float64]) -> float:
        return np.round(np.mean(np.square(model_prediction - ground_truth)), 5);

# X= np.array([[0.3745401188473625, 0.9507143064099162, 0.7319939418114051]]);
# weights= np.array([1.0, 2.0, 3.0]);
# ground_truth= np.array([[0.59865848],[0.15601864],[0.15599452]]);
#
# model_prediction = Solution().get_model_prediction(X, weights);
# print(model_prediction);
#
# error = Solution().get_error(model_prediction, ground_truth);
# print(error);
