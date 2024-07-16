#include <unistd.h>

void isNegative(int n)
{
  if(n >= 0)
  {
    write(1, "P", 1);
  }
  else 
  {
    write(1, "N", 1);
  }
}

int main(void)
{
  isNegative(-5);
}
