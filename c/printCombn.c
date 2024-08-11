#include <unistd.h>

void recursiveFunction(char *arr, int n, int index, char start) {
    if (index == n) {
      write(1, arr, n);
      if (arr[0] != '9' - n + 1) {
        write(1, ", ", 2);
      }
    }

    while (start <= '9') {
        arr[index] = start;
        recursiveFunction(arr, n, index + 1, start + 1);
        start++;
    }
}

int main(void) {
    int n = 2;
    char arr[n];
    recursiveFunction(arr, n, 0, '0');
}

