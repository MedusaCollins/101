# bir konum uygulamasında, haritada gösterilen konumların başlıcaları şunlar: mecdiyeköy, etiler, levent, kadıköy, göztepe, erenköy ilçelerinin birbirlerine olan uzaklıkları
# google üzerinden tespit edilmiştir ve ardından akşam saat 18:00'da trafiğe çıkmak isteyen bir vatandaşın mecdiyeköyden kadıköye ne kadar sürede gideceğini hesaplayın
# ne kadar saat, dakika, yolculuk yapacağını hesapla
# kullanıcılarda sadece saniye verisi bulunuyo
#adın soyadını soracaksın, kaç saniyede gitmek istediğini yazacaksın ve hangi taşıtı kullanarak gideceğini yazacaksın
#perşembe 20:00

konum = {
    "mecidiyeköy-kadıköy": {"Araba": 2460, "Metro": 3240, "Yürüyerek": 10560},
    "etiler-levent": {"Araba": 420, "Metro": 1140, "Yürüyerek": 2520},
    "kadıköy-göztepe": {"Araba": 300, "Yürüyerek": 900},
}


isim = input("Adınızı giriniz: ")
gidilecek_yer = input("lütfen gitmek istediğiniz konumu seçin. \n1. mecidiyeköy-kadıköy\n2. etiler-levent\n3. kadıköy-göztepe\n")
if gidilecek_yer in konum:
    siralanan_konum = sorted(konum[gidilecek_yer].items(), key=lambda x: x[1])

    zaman = int(input(f"{gidilecek_yer}'e gitmek için ne kadar zamanınızın olduğunu lütfen saniye cinsinden yazınız.\n"))
    if zaman < siralanan_konum[0][1]:
        print(f"{isim}, {gidilecek_yer} konumuna gitmek için yeterli zamanın bulunmuyor.")
    else:
        saniye, dakika, saat = (zaman % 3600) % 60, (zaman % 3600) // 60, zaman // 3600

        print(f"\n\n\n{isim}, sahip olduğun süre({saat} saat, {dakika} dakika, {saniye} saniye) içerisinde {gidilecek_yer} konumuna şu şekillerde gidebilirsin.\n")
        for i in siralanan_konum:
            if zaman > i[1]:
                saniye, dakika, saat = (i[1] % 3600) % 60, (i[1] % 3600) // 60, i[1] // 3600
                print(f"{i[0]}{' ile ' if i[0] != 'Yürüyerek' else ' '} {saat} saat, {dakika} dakika, {saniye} saniye sürecektir.")
            else:
                break
else:
    print("Geçersiz konum!")