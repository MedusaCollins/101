icerik = {
    "teknoloji": ["telefon", "bilgisayar", "tablet", "televizyon", "oyun konsolu"],
    "moda": ["giyim", "ayakkabı", "çanta", "takı"],
    "aksesuar": ["saat", "kolye", "yüzük", "şapka", "gözlük"],
    "gayrimenkul": ["ev", "araba", "dükkan", "villa", "arsa"],
}

sehirler={
        "istanbul": [*icerik["teknoloji"]],
        "ankara": [*icerik["teknoloji"], *icerik["moda"], *icerik["aksesuar"], *icerik["gayrimenkul"]],
        "izmir": [ *icerik["moda"], *icerik["aksesuar"]],
        "antalya": [*icerik["gayrimenkul"]],
        "eskişehir": [*icerik["moda"], *icerik["aksesuar"], *icerik["gayrimenkul"]],
    }

x = input("Sehir giriniz: ")
print(*sehirler[x], sep=", ")