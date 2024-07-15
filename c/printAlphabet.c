#include <unistd.h>

void printAlphabet(void)
{
  char a;
  a = 'a';
  while (a <= 'z')
  {
    write(1,&a,1);
    a++;
  }
}

void printReverseAlphabet(void)
{
  char z;
  z = 'z';
  while (z >= 'a')
  {
    write(1,&z,1);
    z--;
  }
}

int main(void)
{
  printAlphabet();
  write(1,"\n",1);
  printReverseAlphabet();
}
