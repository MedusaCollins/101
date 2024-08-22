#include <stdio.h>

int main(int argc, char *argv[])
{
  if(argc > 1)
  {
    printf("Girilen ilk argüman: %s \n",argv[1]);
    printf("Girilen argüman sayısı: %i \n",argc);
  }
}
