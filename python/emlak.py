class Houses:
    def __init__(self):
        self.house = []
    
    def add_house(self):
        self.saleOrRental = input("Satılık, Kiralık Durumu: ")
        self.price = int(input("Fiyat: "))
        self.rooms = input("Oda Sayısı: ")
        self.city = input("Şehir: ")
        self.county = input("İlçe: ")
        if self.house:
            last_house = self.house[-1]
            self.id = last_house["id"] + 1
        else:
            self.id = 1
        self.house.append({"saleOrRental": self.saleOrRental, "price": self.price,"rooms": self.rooms, "city": self.city, "county": self.county, "id": self.id})

    
    def remove_house(self):
        house_id = int(input("Silmek istediğiniz evin id'sini giriniz: "));
        for house in self.house:
            if house["id"] == house_id:
                self.house.remove(house)
                break

    def list_house(self):
        for house in self.house:
            print(house["id"], house["saleOrRental"], house["price"], house["rooms"], house["city"], house["county"], sep=", ")


realtor = Houses()


while True:
    process = input("Yapmak istediğiniz işlemi giriniz(1-Ekleme, 2-Çıkarma, 3-Listeleme, 4-Çıkış yap): ")

    if (process == "1"):
        print("ekle")
        realtor.add_house()
    elif (process == "2"):
        print("Çıkar")
        realtor.remove_house()
    elif (process == "3"):
        print("Listeleme")
        #burayı nasıl yapıcaz filtreyi
        realtor.list_house()
    elif (process == "4"):
        print("Kaybol gelme. ")
        break

    
    
        

    