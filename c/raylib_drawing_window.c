#include "raylib.h"

int main(void)
{
  const int swidth = 800;
  const int sheight = 450;
  int posX = 0;
  InitWindow(swidth, sheight, "Raylib test");

  SetTargetFPS(60);

  while (!WindowShouldClose())
  {
    posX+= 10;
    if(posX>800) posX = -300;
    BeginDrawing();

      ClearBackground(RAYWHITE);
      DrawText("Congrats! You created your first window!", posX, 200, 20, LIGHTGRAY);

    EndDrawing();

  }

  CloseWindow();

  return 0;
}
