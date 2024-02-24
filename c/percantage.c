#include <stdio.h>

int main(){
  int maxScore = 100;
  int userScore = 20;
  float percantage = (float) userScore / maxScore * 100.00;
  printf("User's percantage is %.2f", percantage);
  return 0;
}
