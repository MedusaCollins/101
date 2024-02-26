#include <stdio.h>

int main(){
  //int myNum;
  //char myChar;
  //printf("Type a number and a character and press enter: ");
  //scanf("%d %c", &myNum, &myChar);

  //printf("Your number and character is: %d, %c\n", myNum, myChar);
  //return 0;
  

 //char myName[20];
 //printf("Type your name: ");
 //schanf("%s", &myName);

 //prhintf("Hello %s\n", myName);
 //return 0;


  char fullName[20];
  printf("Type your full name: ");
  fgets(fullName, sizeof(fullName), stdin);

  printf("Hello %s", fullName);
}
