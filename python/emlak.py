from rich.console import Console
from rich.table import Table


class Houses:
    def __init__(self):
        self.house = []

    def add_house(self):
        self.saleOrRental = input("Evin durumu(Kiralık ya da Satılık): ")
        self.price = int(input("Evin fiyatı: "))
        self.rooms = input("Oda Sayısı: ")
        self.city = input("İl: ")
        self.county = input("İlçe: ")
        if self.house:
            last_house = self.house[-1]
            self.id = last_house["id"] + 1
        else:
            self.id = 1
        self.house.append(
            {
                "saleOrRental": self.saleOrRental,
                "price": self.price,
                "rooms": self.rooms,
                "city": self.city,
                "county": self.county,
                "id": self.id,
            }
        )
        print("Eviniz başarıyla eklendi.")

    def remove_house(self):
        house_id = int(input("Silmek istediğiniz evin id'sini giriniz: "))
        for house in self.house:
            if house["id"] == house_id:
                self.house.remove(house)
                break

    def list_house(self):
        filter = input(
            "Sıralama yapmak istediğiniz türü giriniz(1-id, 2-SaleOrRental, 3-Price, 4-Rooms, 5-City, 6-County): "
        )
        if filter == "1":
            self.house.sort(key=lambda x: x["id"])
        elif filter == "2":
            self.house.sort(key=lambda x: x["saleOrRental"])
        elif filter == "3":
            self.house.sort(key=lambda x: x["price"])
        elif filter == "4":
            self.house.sort(key=lambda x: x["rooms"])
        elif filter == "5":
            self.house.sort(key=lambda x: x["city"])
        elif filter == "6":
            self.house.sort(key=lambda x: x["county"])

        Tlist = Table(title="Houses")
        Tlist.add_column("id", style="cyan")
        Tlist.add_column("saleOrRental", style="magenta")
        Tlist.add_column("price", style="green")
        Tlist.add_column("rooms", style="yellow")
        Tlist.add_column("city", style="blue")
        Tlist.add_column("county", style="red")
        for house in self.house:
            Tlist.add_row(
                house["id"],
                house["Kiralık/Satılık"],
                house["Fiyat"],
                house["Oda Sayısı"],
                house["İl"],
                house["İlçe"],
            )
        Console().print(Tlist)


realtor = Houses()
while True:
    process = input(
        "Yapmak istediğiniz işlemi giriniz(1-Ekleme, 2-Çıkarma, 3-Listeleme, 4-Çıkış yap): "
    )
    if process == "1":
        realtor.add_house()
    elif process == "2":
        realtor.remove_house()
    elif process == "3":
        realtor.list_house()
    elif process == "4":
        print("Çıkış yapılıyor...")
        break
