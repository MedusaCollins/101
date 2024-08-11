#include <unistd.h>

void putChar(char c) {
  write(1,&c,1);
}

void putNbr(int nb) {
  if (nb < 0) {
    write(1,"-",1);
    nb *= -1;
  }

  if (nb <= 0 && nb < 10) {
    putChar(nb + 48);
  }else {
    putChar(nb / 10 + 48);
    putChar(nb % 10 + 48);
  }
}

int main(void) {
  putNbr(-9);
}
