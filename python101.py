# icerik = {
#     "teknoloji": ["telefon", "bilgisayar", "tablet", "televizyon", "oyun konsolu"],
#     "moda": ["giyim", "ayakkabı", "çanta", "takı"],
#     "aksesuar": ["saat", "kolye", "yüzük", "şapka", "gözlük"],
#     "gayrimenkul": ["ev", "araba", "dükkan", "villa", "arsa"],
# }

# sehirler={
#         "istanbul": [*icerik["teknoloji"]],
#         "ankara": [*icerik["teknoloji"], *icerik["moda"], *icerik["aksesuar"], *icerik["gayrimenkul"]],
#         "izmir": [ *icerik["moda"], *icerik["aksesuar"]],
#         "antalya": [*icerik["gayrimenkul"]],
#         "eskişehir": [*icerik["moda"], *icerik["aksesuar"], *icerik["gayrimenkul"]],
#     }

# x = input("Sehir giriniz: ")
# print(*sehirler[x], sep=", ")


# saniye = 1000
# dakika = saniye // 60
# saat = dakika // 60
# saniye = dakika % 60
# print(saat, "saat", dakika, "dakika", saniye, "saniye")

# bir konum uygulamasında, haritada gösterilen konumların başlıcaları şunlar: mecdiyeköy, etiler, levent, kadıköy, göztepe, erenköy ilçelerinin birbirlerine olan uzaklıkları
# google üzerinden tespit edilmiştir ve ardından akşam saat 18:00'da trafiğe çıkmak isteyen bir vatandaşın mecdiyeköyden kadıköye ne kadar sürede gideceğini hesaplayın
# ne kadar saat, dakika, yolculuk yapacağını hesapla (arabayla gidecek)
# kullanıcılarda sadece saniye verisi bulunuyo
#adın soyadını soracaksın, kaç saniyede gitmek istediğini yazacaksın ve hangi taşıtı kullanarak gideceğini yazacaksın
#konumdaki saatleri aldığın zamanı kaydet
#perşembe 8:00'de baktım

# konum = {
#     "mecdiyeköy-kadıköy": {"Araba": 2460, "Metro": 3240, "Yürüyerek": 10560},
#     "etiler-levent": {"Araba": 420, "Metro": 1140, "Yürüyerek": 2520},
#     "kadıköy-göztepe": {"Araba": 300, "Yürüyerek": 900},
# }

# isim = input("Adınızı giriniz: ")
# gidilecek_yer = input("lütfen gitmek istediğiniz konumu seçin. \n1. mecdiyeköy-kadıköy\n2. etiler-levent\n3. kadıköy-göztepe\n")
# if gidilecek_yer in konum:
#     siralanan_konum = sorted(konum[gidilecek_yer].items(), key=lambda x: x[1])

#     zaman = int(input(f"{gidilecek_yer}'e gitmek için ne kadar zamanınızın olduğunu lütfen saniye cinsinden yazınız.\n"))
#     if zaman < siralanan_konum[0][1]:
#         print(f"{isim}, {gidilecek_yer} konumuna gitmek için yeterli zamanın bulunmuyor.")
#     else:
#         saniye, dakika, saat = (zaman % 3600) % 60, (zaman % 3600) // 60, zaman // 3600

#         print(f"\n\n\n{isim}, sahip olduğun süre({saat} saat, {dakika} dakika, {saniye} saniye) içerisinde {gidilecek_yer} konumuna şu şekillerde gidebilirsin.\n")
#         for i in siralanan_konum:
#             if zaman > i[1]:
#                 saniye, dakika, saat = (i[1] % 3600) % 60, (i[1] % 3600) // 60, i[1] // 3600
#                 print(f"{i[0]}{' ile ' if i[0] != 'Yürüyerek' else ' '} {saat} saat, {dakika} dakika, {saniye} saniye sürecektir.")
#             else:
#                 break
# else:
#     print("Geçersiz konum!")



# Bir spor kulübünde yüzme, hantbol, basketbol, futbol, cimnastik branşları bulunmaktadır.
#yüzme 6< erkek/kız
#hantbol 8< erkek/kız
#Basketbol 20,30 erkek/kız
#futbol sadece lisans sertifikası olanlar kulübe yazılabilmektedir.
#enes, ufuk, nihal, ulaş, burak, ipek, özden, caner, isimlerinden erkek ve kız olanlar, input alanında otomatik tespit edilerek giriş yapabilirler
#cimnastikte alım yok

branslist = {
    "yüzme": 6,
    "hentbol": 8,
    "futbol": 0,
}
erkek= ["enes","ufuk","ulaş","burak","caner"]
kadin= ["ipek","özden"]

isim= input("isim giriniz: ")
yas= int(input("yaş giriniz: "))
brans= input("hangi branşa girmek istiyorsunuz: ")

if (isim in erkek or isim in kadin):
    if brans in branslist and yas <= branslist[brans] and brans != "basketbol" and brans != "futbol":
        print("Kulübe katılabilirsiniz.")
    elif brans == "futbol":
        sertifika = input("sertifikanız var mı[E/H]: ")
        if sertifika.upper() == "E":
            print("Kulübe katılabilirsiniz.")
        else:
            print("Bu kulübe sertifika olmadan katılamazsınız.")
    elif brans == "basketbol" and yas <= 30 and yas >= 20:
        print("Basketbol kulübüne katılabilirsiniz.")
            
    elif brans in branslist and yas > branslist[brans] or brans == "basketbol" and yas > 30 or brans == "basketbol" and yas < 20:
        print("Kulübe yaşınızın ötürü katılamazsınız.")
        
    elif brans == "cimnastik":
        print("kulübe alım yoktur.")
    else:
        print("Girdiğiniz branş bulunmamaktadır.")
else:
    print("İsminiz listede bulunmadığı için kaydınızı gerçekleştiremeyiz.")