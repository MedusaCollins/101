import re

textList = [
    {
        "title": "Python Programlama",
        "description": "Python ile programlama öğrenmek çok keyiflidir.",
    },
    {
        "title": "Veri Bilimi",
        "description": "Veri bilimi, verilerden anlamlı bilgiler elde etme sürecidir.",
    },
    {
        "title": "Makine Öğrenimi",
        "description": "Makine öğrenimi algoritmaları verilerden öğrenme yeteneğine sahiptir.",
    },
    {
        "title": "Yapay Zeka",
        "description": "Yapay zeka, insan benzeri zekaya sahip bilgisayar sistemlerinin alanıdır.",
    },
    {
        "title": "Web Geliştirme",
        "description": "Web geliştirme, internet üzerinde siteler oluşturma sürecidir.",
    },
]


def search_keywords(search_string, textList):
    results = []

    for text in textList:
        title_match = len(
            re.findall(rf"\b{search_string}\b", text["title"], re.IGNORECASE)
        )
        desc_match = len(
            re.findall(rf"\b{search_string}\b", text["description"], re.IGNORECASE)
        )
        total_match = title_match + desc_match

        if total_match > 0:
            results.append(
                {
                    "title": text["title"],
                    "description": text["description"],
                    "match_count": total_match,
                }
            )

    sorted_results = sorted(results, key=lambda x: x["match_count"], reverse=True)
    return sorted_results


search_string = input("Aranacak Kelimeyi Girin: ")

results = search_keywords(search_string, textList)

if results:
    print("En Alakalı Sonuçlar:")
    for index, result in enumerate(results, start=1):
        print(f"{index}. Başlık: {result['title']}, Açıklama: {result['description']}")
else:
    print("Arama Sonucu Bulunamadı.")
