#include <stdio.h>
#include <stdbool.h>

#define MAX 100

int queue[MAX];
int front = 0, rear = -1;

bool isEmpty() {
    return front > rear;
}

bool isFull() {
    return rear == MAX - 1;
}

void enqueue(int data) {
    if (!isFull()) {
        queue[++rear] = data;
    }
}

int dequeue() {
    if (!isEmpty()) {
        return queue[front++];
    }
    return -1; // Kuyruk boşsa
}

int main() {
    int i, j;
    int a[3] = {1, 2, 3};

    for (i = 0; i < 3; i++) {
        enqueue(a[i]); 
        for (j = 0; j < i; j++) {
                enqueue(a[j]);
        }
    }

    while (!isEmpty()) {
        int data = dequeue();
        printf("%d\n", data);
    }

    return 0;
}

