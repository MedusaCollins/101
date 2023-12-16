# Bir spor kulübünde yüzme, hantbol, basketbol, futbol, cimnastik branşları bulunmaktadır.
#yüzme 6< erkek/kız
#hantbol 8< erkek/kız
#Basketbol 20,30 erkek/kız
#futbol sadece lisans sertifikası olanlar kulübe yazılabilmektedir.
#enes, ufuk, nihal, ulaş, burak, ipek, özden, caner, isimlerinden erkek ve kız olanlar, input alanında otomatik tespit edilerek giriş yapabilirler
#cimnastikte alım yok

#Bir spor kulübüne kayıt olmak isteyen bir kişinin ismi listede varsa ve kayıt olmak istediği branşın şartlarını sağladığı durumda kayıt işleminin gerçekleşmesi için gerekli kodları yazınız.

from rich.console import Console
from rich.table import Table

spor_kulubu = {
    "üye" : {"erkek": ["enes","ufuk","ulaş","burak","caner"], "kadın": ["ipek","özden", "nihal"]},
    "branş": {
        "yüzme": {"yaş": [0, 6], "cinsiyet": ["erkek", "kadın"], "sertifika": False},
        "hentbol": {"yaş": [0, 8], "cinsiyet": ["erkek", "kadın"], "sertifika": False},
        "basketbol": {"yaş": [20, 30], "cinsiyet": ["erkek", "kadın"], "sertifika": False},
        "Futbol": {"yaş": [20, 30], "cinsiyet": ["erkek", "kadın"], "sertifika": True},
    }
}

def tablo_olustur(title, columns, rows):
    tablo = Table(title=title)
    for column in columns:
        tablo.add_column(column)
    for row in rows:
        tablo.add_row(*row, style="bold green")
    return tablo

üye_rows = []
for cinsiyet, isimler in spor_kulubu["üye"].items():
    üye_rows.append([cinsiyet.capitalize(), ", ".join([isim.capitalize() for isim in isimler])])

branş_rows = []
for branş, detaylar in spor_kulubu["branş"].items():
    yaş = f"{detaylar['yaş'][0]}-{detaylar['yaş'][1]}"
    cinsiyet = "/".join(detaylar['cinsiyet'])
    sertifika = "Var" if detaylar['sertifika'] else "Yok"
    branş_rows.append([branş.capitalize(), yaş, cinsiyet.capitalize(), sertifika])



green, red = "\033[32m", "\033[31m"
console = Console()
console.print(tablo_olustur("Kayıt olması gerekenler", ["Cinsiyet", "İsimler"], üye_rows), 
              tablo_olustur("Branşlar", ["Branş", "Yaş", "Cinsiyet", "Sertifika Zorunluluğu"], branş_rows), 
              justify="center")

isim, yas, brans, sertifika = [item.strip() for item in input("Lütfen sırasıyla isim, yaş, branş ve sertifikanızın olup olmadığını(e/h) aralarına virgül bırakarak yazınız: ").split(',')]

if isim not in spor_kulubu["üye"]["erkek"] and isim not in spor_kulubu["üye"]["kadın"]:
    print(f"{red}İsminiz listede bulunmadığı için kaydınızı gerçekleştiremeyiz.")
else:
    if brans not in spor_kulubu["branş"]:
        print(f"{red}Girdiğiniz branş bulunmamaktadır.")
    else:
        if int(yas) < spor_kulubu["branş"][brans]["yaş"][0] or int(yas) > spor_kulubu["branş"][brans]["yaş"][1]:
            print(f"{red}{brans} kulübüne yaşınızın ötürü katılamazsınız.")
        else:
            if isim in spor_kulubu["üye"]["erkek"] and "erkek" not in spor_kulubu["branş"][brans]["cinsiyet"] and isim in spor_kulubu["üye"]["kadın"] and "kadın" not in spor_kulubu["branş"][brans]["cinsiyet"]:
                print(f"{red}{brans} kulübe cinsiyetinizin ötürü katılamazsınız.")
            else:
                if sertifika.upper() == "E" and spor_kulubu["branş"][brans]["sertifika"] == True or spor_kulubu["branş"][brans]["sertifika"] == False:
                    print(f"{green}{isim.capitalize()}, {brans} kulübüne kaydınız başarıyla gerçekleşmiştir.")
