# Bir emlak şirketi için(dünya üzerinde 26 ülkede şubesi var, her ülke için 10 adet farklı lokasyonlarda olan şubesi var(örneğin amerika, virgina))
# # google a girip 26 dünya ülkesinde 10 şehirde farklı şube atamaları yapılacak.(2 şube aynı şehirde olmayacak.)

# Bu şubelerin içerisinde kiralık ve satılık olan iş yerleri ve konutlar(ev) var, bu kategorilerin belirli bir lokasyona göre kiralama ve satılık bedelleri var.
# Müşterinin isteği ise her lokasyonun kullanabileceği ve dünya üzerinde birbirlerini görebileceği bir program yazmamız.
# # Losangelosta olan birisi ingilteredeki evlerin ve iş yerlerinin fiyatlarını sorgulayabilmeliyim.

# O lokasyondaki kiralık iş yeri, satılık iş yeri, kiralık ev, satılık ev fiyatlarını en ucuzdan en pahalıya veya en pahalıdan en ucuza sıralamasını isimleriyle beraber yapabilen
# bir fonksiyon olması gerekli.

# 26 ülkede şubesi bulunan ve her ülke için 10 farklı bayisi bulunan bir emlak şirketi var.
# londra seçilirse kiralık mı satılık mı iş yeri mi ev mi diye soracak.
import difflib

real_estate_data = {
    "Usa": {
        "New york": {
            "Residential": {
                "For Rent": [
                    {"location": "Manhattan", "price": 3000, "sellerPhone": 11111111},
                    {"location": "Brooklyn", "price": 2500, "sellerPhone": 22222222},
                ],
                "For Sale": [
                    {"location": "Queens", "price": 500000, "sellerPhone": 33333333},
                    { "location": "Bronx", "price": 400000, "sellerPhone": 44444444 },
                ],
            },
            "Commercial": {
                "For Rent": [
                    {"location": "Downtown", "price": 5000, "sellerPhone": 55555555},
                    {"location": "Midtown", "price": 7000, "sellerPhone": 66666666},
                ],
                "For Sale": [
                    {"location": "Harlem", "price": 1000000, "sellerPhone": 77777777},
                    {
                        "location": "Upper East Side",
                        "price": 1200000,
                        "sellerPhone": 88888888,
                    },
                ],
            },
        },
        "Los angeles": {
            "Residential": {
                "For Rent": [
                    {"location": "Hollywood", "price": 3500, "sellerPhone": 99999999},
                    {
                        "location": "Beverly Hills",
                        "price": 4000,
                        "sellerPhone": 10101010,
                    },
                ],
                "For Sale": [
                    {
                        "location": "Downtown LA",
                        "price": 600000,
                        "sellerPhone": 20202020,
                    },
                    {
                        "location": "Santa Monica",
                        "price": 700000,
                        "sellerPhone": 30303030,
                    },
                ],
            },
            "Commercial": {
                "For Rent": [
                    {"location": "Downtown", "price": 6000, "sellerPhone": 40404040},
                    {"location": "Hollywood", "price": 8000, "sellerPhone": 50505050},
                ],
                "For Sale": [
                    {
                        "location": "Beverly Hills",
                        "price": 1500000,
                        "sellerPhone": 60606060,
                    },
                    {
                        "location": "Venice Beach",
                        "price": 1800000,
                        "sellerPhone": 70707070,
                    },
                ],
            },
        },
    },
    "Germany": {
        "Berlin": {
            "Residential": {
                "For Rent": [
                    {"location": "Mitte", "price": 2000, "sellerPhone": 80808080},
                    {"location": "Kreuzberg", "price": 1800, "sellerPhone": 90909090},
                ],
                "For Sale": [
                    {
                        "location": "Prenzlauer Berg",
                        "price": 400000,
                        "sellerPhone": 10101011,
                    },
                    {
                        "location": "Charlottenburg",
                        "price": 500000,
                        "sellerPhone": 11111112,
                    },
                ],
            },
            "Commercial": {
                "For Rent": [
                    {
                        "location": "Friedrichshain",
                        "price": 4000,
                        "sellerPhone": 12121213,
                    },
                    {"location": "Neukölln", "price": 3500, "sellerPhone": 13131314},
                ],
                "For Sale": [
                    {"location": "Kreuzberg", "price": 800000, "sellerPhone": 14141415},
                    {"location": "Mitte", "price": 900000, "sellerPhone": 15151516},
                ],
            },
        },
    },
}
formatHelperKeywords = [
    "usa",
    "germany",
    "new york",
    "los angeles",
    "berlin",
    "kiralık",
    "satılık",
    "iş yeri",
    "konut",
]
exchangeData = {
    "Usa": {
        "currency": "$",
        "exchangeRate": 1,
    },
    "Germany": {
        "currency": "€",
        "exchangeRate":  0.93,
    }
}

def formatHelper(param):
    best_match = difflib.get_close_matches(
        param.lower(), formatHelperKeywords, n=1, cutoff=0.3
    )
    if best_match:
        best_match = best_match[0]
        return best_match.capitalize()

def calculatePrice(price, country): 
    return f"{round(price*exchangeData[country]["exchangeRate"])}{exchangeData[country]["currency"]}"
try:
    country, city, property_type, rentOrSale, order =  formatHelper(input("Lütfen bir ülke seçin (Örneğin: USA, Germany): ")), formatHelper(input("Lütfen bir şehir seçin (Örneğin: New york, Berlin): ")), formatHelper(input("Aradığınız gayrimenkul tipini seçin (Örneğin: İş yeri, Konut): ")), formatHelper(input("Kiralık mı Satılık mı: ")), input("Fiyatları küçükten büyüğe (kb) mi yoksa büyükten küçüğe (bk) mi sıralamak istersiniz? ")
    if None in [country, city, property_type, rentOrSale]:
        raise ValueError("Geçersiz girişler!")

    if property_type == "konut":
        property_type = "Residential"
    else:
        property_type = "Commercial"

    if rentOrSale == "kiralık":
        rentOrSale = "For Rent"
    else:
        rentOrSale = "For Sale"
    findValue = real_estate_data[country][city][property_type][rentOrSale]
    if order.lower() == "kb":
        sorted_list = sorted(findValue, key=lambda x: x["price"])
    else:
        sorted_list = sorted(findValue, key=lambda x: x["price"], reverse=True)

    print("\n İşte seçtiğiniz kriterlere uygun bulduğum sonuçlar :) \n")
    for item in sorted_list:
        print(
            f"Konum: {item['location']}, Fiyat: {calculatePrice(item['price'], country)}, Satıcının Telefon Numarası: {item['sellerPhone']}"
        )

except ValueError as ve:
    print(f"Hata: {ve}")
except KeyError:
    print("Veri bulunamadı!")
except Exception as e:
    print(f"Bir hata oluştu: {e}")
