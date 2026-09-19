export const obsesyonTest = {
  id: 'obsesyon',
  title: 'Obsesif Kompulsiyon Testi',

  minValue: 0,
  maxValue: 1,

  options: [
    { value: 1, label: 'Doğru' },
    { value: 0, label: 'Yanlış' },
  ],

  result: {
    type: 'score',
    maxScore: 37,
    message:
      'Toplam puanınız 37’ye yaklaştıkça, yaşadığınız durumları bir psikolojik uzmanla değerlendirmeyi düşünebilirsiniz.',
  },

  questions: [
    {
      id: 1,
      text: 'Bana bir hastalık bulaşır korkusuyla herkesin kullandığı telefonları kullanmaktan kaçınırım.',
    },
    {
      id: 2,
      text: 'Sık sık hoşa gitmeyen şeyler düşünür, onları zihnimden uzaklaştırmakta güçlük çekerim.',
    },
    {
      id: 3,
      text: 'Dürüstlüğe herkesten çok önem veririm.',
    },
    {
      id: 4,
      text: 'İşleri zamanında bitiremediğim için çoğu kez geç kalırım.',
    },
    {
      id: 5,
      text: 'Bir hayvana dokununca hastalık bulaşır diye kaygılanırım.',
    },
    {
      id: 6,
      text: 'Sık sık havagazını, su musluklarını ve kapıları birkaç kez kontrol ederim.',
    },
    {
      id: 7,
      text: 'Değişmez kurallarım vardır.',
    },
    {
      id: 8,
      text: 'Aklıma takılan nahoş düşünceler hemen her gün beni rahatsız eder.',
    },
    {
      id: 9,
      text: 'Kaza ile bir başkasına çarptığımda rahatsız olurum.',
    },
    {
      id: 10,
      text: 'Her gün yaptığım basit günlük işlerden bile emin olamam.',
    },
    {
      id: 11,
      text: 'Çocukken annem de babam da beni fazla sıkmazlardı.',
    },
    {
      id: 12,
      text: 'Bazı şeyleri tekrar tekrar yaptığım için işimde geri kaldığım oluyor.',
    },
    {
      id: 13,
      text: 'Çok fazla sabun kullanırım.',
    },
    {
      id: 14,
      text: 'Bana göre bazı sayılar son derece uğursuzdur.',
    },
    {
      id: 15,
      text: 'Mektupları postalamadan önce onları tekrar tekrar kontrol ederim.',
    },
    {
      id: 16,
      text: 'Sabahları giyinmek için uzun zaman harcarım.',
    },
    {
      id: 17,
      text: 'Temizliğe aşırı düşkünüm.',
    },
    {
      id: 18,
      text: 'Ayrıntılara gereğinden fazla dikkat ederim.',
    },
    {
      id: 19,
      text: 'Pis tuvaletlere girmem.',
    },
    {
      id: 20,
      text: 'Esas sorunum bazı şeyleri tekrar tekrar kontrol etmemdir.',
    },
    {
      id: 21,
      text: 'Mikrop kapmaktan ve hastalanmaktan korkar ve kaygılanırım.',
    },
    {
      id: 22,
      text: 'Bazı şeyleri birden fazla kontrol ederim.',
    },
    {
      id: 23,
      text: 'Günlük işlerimi belirli bir programa göre yaparım.',
    },
    {
      id: 24,
      text: 'Paraya dokunduktan sonra ellerimi kirli hissederim.',
    },
    {
      id: 25,
      text: 'Alıştığım bir işi yaparken bile kaç kere yaptığımı sayarım.',
    },
    {
      id: 26,
      text: 'Sabahları elimi yüzümü yıkamak çok zamanımı alır.',
    },
    {
      id: 27,
      text: 'Çok miktarda mikrop öldürücü ilaç kullanırım.',
    },
    {
      id: 28,
      text: 'Her gün bazı şeyleri tekrar tekrar kontrol etmek bana zaman kaybettirir.',
    },
    {
      id: 29,
      text: 'Geceleri giyeceklerimi katlayıp asmak uzun zamanımı alır.',
    },
    {
      id: 30,
      text: 'Dikkatle yaptığım bir işin bile tam doğru olup olmadığına emin olamam.',
    },
    {
      id: 31,
      text: 'Kendimi toparlayamadığım için günler, haftalar, hatta aylarca hiçbir şeye el sürmediğim olur.',
    },
    {
      id: 32,
      text: 'En büyük mücadelelerimi kendimle yaparım.',
    },
    {
      id: 33,
      text: 'Çoğu zaman büyük bir hata ya da kötülük yaptığım duygusuna kapılırım.',
    },
    {
      id: 34,
      text: 'Sık sık kendime birşeyleri dert edinirim.',
    },
    {
      id: 35,
      text: 'Önemsiz ufak şeylerde bile karar verip işe girişmeden önce durup düşünürüm.',
    },
    {
      id: 36,
      text: 'Reklamlardaki ampuller gibi önemsiz şeyleri sayma alışkanlığım vardır.',
    },
    {
      id: 37,
      text: 'Bazen önemsiz düşünceler aklıma takılır ve beni günlerce rahatsız eder.',
    },
  ],
};
