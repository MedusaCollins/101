#include <stdio.h>

int main(){
  int i;

  //for(i = 0; i <= 2; i++){
  //  printf("Outer: %d\n", i); // execute 2 times

  //  for(j = 0; j <= 3; j++){
  //    printf("Inner: %d\n", j); // execute 6 times
  //  }
  //}
  for(i=0; i <= 10; i++){
    if(i<=4){
      continue;
    };
    printf("%d\n", i);
  }
}
