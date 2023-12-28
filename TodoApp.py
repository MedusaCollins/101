Todos = []

while True:
    x = input("Ne yapmak istiyorsunuz? (Ekle/Listele/Çıkış): ")
    if x == "ekle":
        y = input("Yapılacak işi giriniz: ")
        Todos.append(y)
        print("İş eklendi.")
    elif x == "listele":
        print("Yapılacaklar Listesi:")
        for i in Todos:
            print(i)
    elif x == "çıkış":
        break
    