#include <unistd.h>

void printNumbers(void)
{
  char i;
  i = 47;
  while(++i <= 57)
    write(1, &i, 1);
}

int main(void)
{
  printNumbers();
  return 0;
}
