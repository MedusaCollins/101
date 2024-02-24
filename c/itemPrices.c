#include <stdio.h>

int main() {
  // printf() displays the string inside quotation
  int items = 10;
  float price = 9.99;
  float totalCost = items * price;
  char currency = '$';

  printf("Number of items: %d\n", items);
  printf("Cost of per item: %.2f%c\n", price, currency);
  printf("Total cost: %.1f%c\n", totalCost, currency);
  return 0;
} 
