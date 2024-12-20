
#include <stdio.h>
#include <stdbool.h>

#define MAX 100

int stack[MAX];
int top = -1;

bool isEmpty() {
    return top == -1;
}

bool isFull() {
    return top == MAX - 1;
}

void push(int data) {
    if (!isFull()) {
        stack[++top] = data;
    }
}

int pop() {
    if (!isEmpty()) {
        return stack[top--];
    }
    return -1; // Stack boşsa
}

int main() {
    int i, j;
    int a[3] = {1, 2, 3};

    for (i = 0; i < 3; i++) {
        push(a[i]);
        for(j=0;j<i;j++){
          push(a[j]);
        }
    }

    while (!isEmpty()) {
        int data = pop();
        printf("%d\n", data);
    }

    return 0;
}
