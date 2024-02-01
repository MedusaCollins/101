import subprocess
import requests

url="http://api.weatherapi.com/v1/current.json?key=<key>&q=istanbul"

response = requests.get(url)
data = response.json()
teksefer = True

def saatKontrol():
    saat = int(data['location']['localtime'].split(" ")[1].split(":")[0])
    if(saat == 8):
        return "Günaydın"
    elif(saat == 23):
        return "İyi Geceler"
    else:
        return "İyi Günler"

def tempControl():
    temp = int(data['current']['temp_c'])
    if(temp < 15):
        return "Hava soğuk"
    elif(temp > 15 and temp < 25):
        return "Hava ılık"
    else:
        return "Hava sıcak"
    
def cloudKontrol():
    cloud = int(data['current']['cloud'])
    if(cloud < 30):
        return "Güneşli"
    elif(cloud > 30 and cloud < 60):
        return "Bulutlu"
    else:
        return "Çok Bulutlu"
        

f = open("not_defteri.txt", "w")

while True:
    if(int(data['location']['localtime'].split(" ")[1].split(":")[0]) == 4 and teksefer): 
        
        localtime = data['location']['localtime'] + "(" + str(saatKontrol()) + ")"
        temp = str(data['current']['temp_c']) + "°C" + "(" + str(tempControl()) + ")"
        cloud = str(data['current']['cloud']) + "(" + str(cloudKontrol()) + ")"

        f.write(str(data['location']['name']) + "\n" + str(localtime) + "\n" + str(temp) + "\n" + str(cloud))
        f.close()
        print("dosya oluşturuldu ve datalar yerine yazıldı")
        # subprocess.Popen(['notepad.exe', 'not_defteri.txt'])
        teksefer = False
    elif(int(data['location']['localtime'].split(" ")[1].split(":")[0]) == 0):
        teksefer = True