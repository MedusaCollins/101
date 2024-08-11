#include <unistd.h>

void printComb2(void) {
  char i[7];
  i[0] = '0';
  i[1] = '0';
  i[2] = ' ';
  i[3] = '0';
  i[4] = '1';
  i[5] = ',';
  i[6] = ' ';

  while(i[0] <= '9')
  {
    while(i[1] <= '9')
    {
      while(i[3] <= '9')
      {
        while(i[4] <= '9')
        {
          if ( i[0] == '9' && i[1] == '8' && i[3] == '9' && i[4] == '9' )
          {
            write(1,&i,5);
            return;
          }
          if ( (i[0] == i[3]) && (i[1] == i[4]) )
          {
            i[4]++;
            continue;
          }
          write(1,&i,7);
          ++i[4];
        }
        i[4] = '1';
        i[3]++;
      }
      i[3] = '0';
      i[1]++;
    }
    i[1] = '0';
    i[0]++;
  }
}

int main(void)
{
  printComb2();
}
