// @ts-ignore
import medium from "../assets/icons/MediumLogo.svg";
// @ts-ignore
import linkedin from "../assets/icons/LinkedinLogo.svg";
// @ts-ignore
import twitter from "../assets/icons/TwitterLogo.svg";
// @ts-ignore
import facebook from "../assets/icons/FacebookLogo.svg";
// @ts-ignore
import instagram from "../assets/icons/InstagramLogo.svg";

const Footer = () => {
  const item = [
    {
      title: "Çözüm ve Hizmetler",
      items: [
        "Yazılım Geliştirme",
        "Outsourcing",
        "Kalite ve Süreç Yönetimi",
        "Danışmanlık",
        "IoT Destekli Çözümler",
      ],
    },
    {
      title: "Ürünler",
      items: [
        "Eğitim Yönetim Sistemi",
        "İnsan Sermayesi Yönetim Sistemi",
        "Müşteri İlişkileri Yönetim Sistemi",
        "İçerik Yönetim Sistemi",
      ],
    },
    {
      title: "Kurumsal",
      items: ["Hakkımızda", "Belge ve Yetkinlikler", "İş Ortakları"],
    },
    {
      title: "İletişim",
      items: ["Bilgi İstek Formu", "Uzman Talep Formu"],
    },
  ]
  return (
    <div className="bg-[#f8464A] flex flex-col p-12 space-y-12">

      <div className="flex lg:flex-row flex-col gap-16">
        {item.map((item) => (
          <div className="flex flex-col gap-5">
            <p className="text-white font-bold">{item.title}</p>
            {item.items.map((item) => (
              <p className="text-white font-normal">{item}</p>
            ))}
          </div>
        ))}
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:items-center items-start text-white">
        <p>© Copyright 2010-2021 - Can Çevik</p>
        <div className="flex order-first lg:order-last">
          <img src={medium} alt="medium" className="w-8 h-8 mr-4 my-4" />
          <img
            src={linkedin}
            alt="linkedin"
            className="w-8 h-8 mr-4 my-4"
          />
          <img src={twitter} alt="twitter" className="w-8 h-8 mr-4 my-4" />
          <img
            src={instagram}
            alt="instagram"
            className="w-8 h-8 mr-4 my-4"
          />
          <img
            src={facebook}
            alt="facebook"
            className="w-8 h-8 mr-4 my-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;

