#include <stdio.h>

int main(){
 // int i;
 // int myArray[] = {10,20,30,40,50,60};
 // int length = sizeof(myArray) / sizeof(myArray[0]);

 // for(i=0; i < length; i++){
 //   printf("%d\n", myArray[i]);
 // }

 //int ages[] = {20,30,40,50,60,70,80};
 // int agesLength = sizeof(ages) / sizeof(ages[0]);
 // float avg, sum;
 // int i;

 // for(i=0; i<agesLength;i++){
 //   sum+=ages[i];
 // }
 // avg = sum / agesLength;
 // printf("The average age is: %.2f\n", avg);

  //lowest age in the list
  int ages[] = {20, 22, 18, 35, 48, 26, 87, 70};
  int agesLength = sizeof(ages) / sizeof(ages[0]);
  int i;
  int lowestAge = ages[0];
  for(i=0; i<agesLength; i++){
    if(lowestAge > ages[i]){
      lowestAge = ages[i];
    }
  }
  printf("Lowest age is: %d\n", lowestAge);

}
