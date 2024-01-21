import uinput
import time
import sys

# Fare emülatörü oluştur
device = uinput.Device([
    uinput.BTN_LEFT,
    uinput.BTN_RIGHT,
    uinput.REL_X,
    uinput.REL_Y,
])


def moveMouse(direction, speed, duration):
    switcher = {
        "y": (uinput.REL_Y, speed),
        "x": (uinput.REL_X, speed)
    }
    func = switcher.get(direction, lambda: "Invalid direction")
    
    device.emit(*func, syn=False)
    time.sleep(duration)
    device.emit(*func)

# Komut satırı argümanlarını kontrol et
if len(sys.argv) != 4:
    print("Kullanım: python script.py <direction> <speed> <duration>")
    sys.exit(1)
    
try:
    direction = sys.argv[1] # x or y
    speed = int(sys.argv[2])
    duration = float(sys.argv[3])
except ValueError:
    sys.exit(1)

moveMouse(direction, speed, duration)