#include <unistd.h>

void putChar(char c)
{
  write(1, &c, 1);
}

int main(void)
{
  putChar('a');
}
