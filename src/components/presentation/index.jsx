import { Expo, gsap } from 'gsap';
import React, { useEffect, useState } from 'react'
import Cards from './Cards';

const Presentation = () => {


    const [activeSlide, setActiveSlide] = useState(0);

    const [presentationData, setpresentationData] = useState([
        {
            "title": "Alper Koşay",
            "content": "İnternet Programcılığı Proje Ödevi",
            listContent: [
                {
                    title: "Sınıf: 12 / B Bilişim"
                },
                {
                    title: "Numara: 2287"
                }
            ],
            "centered": true
        },
        {
            "title": "PHP ve MySQL Programlama",
            "content": "Bu sunumda PHP ve MySQL programlamaları hakkında genel bir bakış sunulacak."
        },
        {
            "title": "PHP Nedir?",
            "content": "PHP, sunucu taraflı bir programlama dilidir. Dinamik web siteleri ve web uygulamaları oluşturmak için kullanılır. PHP, HTML içinde kod yazmak için kullanılabilir veya ayrı bir dosyada çalıştırılabilir."
        },
        {
            "title": "MySQL Nedir?",
            "content": "MySQL, açık kaynaklı bir veritabanı yönetim sistemidir. Veritabanlarını oluşturmak, yönetmek ve veri depolamak için kullanılır. MySQL, PHP ile birlikte kullanılarak dinamik web siteleri ve uygulamaları oluşturmak için ideal bir seçenektir."
        },
        {
            "title": "PHP ve MySQL İlişkisi",
            "content": "PHP ve MySQL, birlikte kullanıldığında, dinamik web siteleri ve uygulamaları oluşturmak için güçlü bir kombinasyon oluşturur. PHP ile veritabanı bağlantısı kurmak için MySQL veritabanı sürücüsü kullanılır."
        },
        {
            "title": "PHP Kurulumu",
            "content": "PHP'yi indirmek ve yüklemek için resmi PHP web sitesini ziyaret edebilirsiniz. Ayrıca, Apache veya Nginx web sunucuları gibi diğer yazılımlarla birlikte de kurulabilir."
        },
        {
            "title": "MySQL Kurulumu",
            "content": "MySQL'i indirmek ve yüklemek için resmi MySQL web sitesini ziyaret edebilirsiniz. Ayrıca, çeşitli web barındırma sağlayıcıları MySQL sunucuları da sağlayabilir."
        },
        {
            "title": "MySQL Veritabanı Oluşturma",
            "content": "MySQL'de veritabanı oluşturmak için MySQL komut satırını veya bir MySQL yönetim aracını kullanabilirsiniz. Veritabanı oluştururken, veritabanı adı, karakter kümesi ve diğer ayarları belirleyebilirsiniz."
        },
        {
            "title": "PHP ve MySQL Bağlantısı",
            "content": "PHP ile MySQL veritabanına bağlanmak için mysqli veya PDO sürücüsü kullanılabilir. Bağlantı bilgileri (sunucu adı, kullanıcı adı, şifre, vb.) belirtilir ve bağlantı başlatılır."
        },
        {
            "title": "Veri Ekleme",
            "content": "PHP ile MySQL'e veri eklemek için INSERT INTO sorgusu kullanılır. Veritabanı bağlantısı kurulur, SQL sorgusu hazırlanır ve sorgu MySQL üzerinde çalıştırılır. Veri eklerken, belirtilen tabloya uygun olarak sütun adları ve değerler belirtilmelidir."
        },
        {
            "title": "Veri Okuma",
            "content": "PHP ile MySQL'den veri okumak için SELECT sorgusu kullanılır. Veritabanı bağlantısı kurulur, SQL sorgusu hazırlanır ve sorgu MySQL üzerinde çalıştırılır. Okunan veriler sonuç kümesinde saklanır ve PHP kodu tarafından işlenebilir."
        },
        {
            "title": "Veri Güncelleme",
            "content": "PHP ile MySQL'de veri güncellemek için UPDATE sorgusu kullanılır. Veritabanı bağlantısı kurulur, SQL sorgusu hazırlanır ve sorgu MySQL üzerinde çalıştırılır. Güncelleme yaparken, hangi tablo, sütun ve değerlerin güncellenmesi gerektiği belirtilir."
        },
        {
            "title": "Veri Silme",
            "content": "PHP ile MySQL'de veri silmek için DELETE FROM sorgusu kullanılır. Veritabanı bağlantısı kurulur, SQL sorgusu hazırlanır ve sorgu MySQL üzerinde çalıştırılır. Silme işleminde, hangi tablodan hangi verilerin silineceği belirtilir."
        },
        {
            "title": "Veri Filtreleme",
            "content": "PHP ile MySQL'den veri filtrelemek için WHERE ifadesi kullanılır. WHERE ifadesi, bir SQL sorgusunu filtrelemek için kullanılır. Bu sayede, belirli kriterlere uyan veriler seçilebilir. Örneğin, WHERE ad='Ali' ifadesi, 'ad' sütunu 'Ali' olan tüm kayıtları döndürür."
        },
        {
            "title": "Veri Sıralama",
            "content": "PHP ile MySQL'de veri sıralamak için ORDER BY ifadesi kullanılır. ORDER BY ifadesi, bir SQL sorgusunu belirli bir sütuna göre sıralamak için kullanılır. Örneğin, ORDER BY tarih ifadesi, 'tarih' sütununa göre kayıtları sıralar."
        },
        {
            "title": "SQL Sorguları",
            "content": "SQL, veritabanlarına erişmek için kullanılan bir programlama dili ve MySQL için standart bir dil olarak kabul edilir. SQL, veri ekleme, okuma, güncelleme, silme, sıralama, filtreleme ve daha birçok işlem yapmak için kullanılır."
        },
        {
            "title": "PHP ile SQL Sorguları Çalıştırma",
            "content": "PHP ile SQL sorgularını çalıştırmak için, mysqli veya PDO sürücüsü kullanılabilir. Sorgu, SQL dilinde yazılır ve MySQL'de çalıştırılır. Sonuç kümesi PHP kodu tarafından işlenebilir."
        },
        {
            "title": "PDO ve mysqli Farkı",
            "content": "PDO (PHP Data Objects) ve mysqli, PHP'de MySQL veritabanlarına erişmek için kullanılan iki sürücüdür. PDO, farklı veritabanı türleriyle çalışmak için tasarlanmıştır ve daha yüksek bir uyumluluk sağlar. Mysqli ise sadece MySQL için tasarlanmıştır ve daha yüksek performans sunar."
        },
        {
            "title": "Veritabanı Güvenliği",
            "content": "Veritabanı güvenliği, verilerin kötü amaçlı kullanımlardan korunması için önemlidir. PHP ile MySQL'de, SQL enjeksiyonu gibi saldırılara karşı korunmak için, kullanıcı girişi gibi verilerin doğrulanması yapılmalı, PDO veya mysqli gibi güvenli sürücüler kullanılmalı ve veritabanı erişim izinleri kontrol edilmelidir."
        },
        {
            "title": "Veritabanı Yedekleme",
            "content": "Veritabanı yedekleme, verilerin kaybolmasını önlemek ve veritabanının eski durumuna geri dönülebilmesini sağlamak için önemlidir. MySQL'de veritabanı yedeklemek için, mysqldump komutu kullanılabilir. Bu komut, veritabanını bir SQL dosyasına dışa aktarır ve yedekleme için kullanılabilir."
        },
        {
            "title": "Veritabanı İyileştirme",
            "content": "Veritabanı performansını iyileştirmek için, gereksiz sütunlar veya tablolar silinebilir, gereksiz indeksler kaldırılabilir ve veritabanı tabloları bölünebilir. Ayrıca, sorguların hızlandırılması için, sütunları doğru şekilde indekslemek ve sorguları optimize etmek de önemlidir."
        },
        {
            "title": "Veritabanı Ölçeklendirme",
            "content": "Veritabanı ölçeklendirme, büyüyen bir veritabanı için performans ve güvenilirlik sağlamak için önemlidir. Bunun için, dikey ölçeklendirme (daha güçlü donanım kullanımı) veya yatay ölçeklendirme (daha fazla sunucu kullanımı) gibi yöntemler kullanılabilir."
        },
        {
            "title": "PHP Framework'leri ve MySQL",
            "content": "PHP Framework'leri, PHP'de web uygulamaları geliştirmek için kullanılan araçlardır. Bu framework'lerin birçoğu, MySQL veritabanları ile uyumludur ve veritabanı işlemleri için hazır fonksiyonlar sunarlar. Örneğin, Laravel framework'ü, Eloquent ORM adlı bir veritabanı kütüphanesi kullanır."
        },
        {
            "title": "MySQL Hosting Hizmetleri",
            "content": "MySQL veritabanlarını barındırmak yerine, bir MySQL hosting hizmeti kullanmak da tercih edilebilir. Bu hizmetler, veritabanınızı sunucularında barındırarak, yedekleme, güvenlik ve ölçeklendirme gibi işlemleri sizin yerinize gerçekleştirirler. Popüler MySQL hosting hizmetleri arasında Amazon RDS, Google Cloud SQL, DigitalOcean ve Heroku gibi seçenekler bulunmaktadır."
        },
        {
            "title": "Sunuma katıldığınız için teşekkürler.",
            "content": "Bu site ⚛︎React.js ile benim tarafımdan yapılmıştır.",
            "listContent": [
                {
                    linkUrl: "https://alperkosay.com",
                    title: "İnternet Sitem: alperkosay.com"
                }
            ],
            "centered": true
        }
    ]);


    useEffect(() => {

        const tl = gsap.timeline();
        tl.fromTo(".side-bar",
            {
                x: "-100%",
            },
            {
                x: 0,
                delay: .5,
                duration: .4
            }
        )


        tl.fromTo(".presentation-section",
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: .7
            }
        )

        tl.fromTo(".slide-list li",
            {
                opacity: 0,
                x: "-100%",
            },
            {
                opacity: 1,
                x: 0,
                stagger: .14,
                duration: .5,
            }
        )



    }, [])

    return (

        <>

            <div className='flex flex-row h-[100svh] bg-[#242424] overflow-hidden'>
                <aside className='side-bar shadow-lg h-[100svh] w-24 overflow-y-auto overflow-x-hidden bg-violet-900 absolute left-0 top-0 scroll'>
                    <nav className='flex flex-col align-center  h-full w-full '>
                        <ul className='slide-list p-3 flex flex-col align-center gap-y-4 font-bold text-white text-center text-lg'>
                            {
                                presentationData.length > 0 &&
                                presentationData.map((data, index) => (


                                    <li
                                        key={index}
                                        className={` cursor-pointer border rounded-md transition-colors duration-500 p-3 py-5 ${index === activeSlide && "bg-white text-violet-900 "}`}
                                        onClick={() => setActiveSlide(index)}
                                    >

                                        {
                                            index !== 0 &&
                                            <div className='absolute left-1 top-1'>
                                                <span className='text-[11px] line-clamp-1 leading-none text-left'>{data.title}</span>

                                            </div>
                                        }
                                        {index + 1}
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </aside>
                <main className='w-full h-full pl-24'>

                    <section className='presentation-section h-full'>
                        <div className="container mx-auto h-full">
                            {
                                presentationData.map((data, index) => (

                                    activeSlide === index &&
                                    <Cards
                                        key={index}
                                        title={data.title}
                                        content={data.content}
                                        centered={data.centered}
                                        listContent={data.listContent}
                                        activeSlide={activeSlide}
                                    />

                                ))
                            }
                        </div>
                    </section>

                    <p className='copy absolute right-3 bottom-3 text-white text-xs z-0'>
                        Developed by ❤ Alper Koşay
                    </p>
                </main>
            </div >

        </>

    )
}

export default Presentation