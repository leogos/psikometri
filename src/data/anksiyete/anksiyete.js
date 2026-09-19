export const anksiyeteTest = {
  id: 'anksiyete',
  title: 'Beck Anksiyete',

  minValue: 0,
  maxValue: 3,

  instruction:
    'Aşağıda insanların kaygılı ya da endişeli oldukları zamanlarda yaşadıkları bazı belirtiler verilmiştir. Lütfen her maddeyi dikkatle okuyunuz. Daha sonra, her maddedeki belirtinin BUGÜN DAHİL SON BİR (1) HAFTADIR sizi ne kadar rahatsız ettiğini belirleyiniz.',

  options: [
    { value: 0, label: 'Hiç' },
    { value: 1, label: 'Hafif düzeyde - Beni pek etkilemedi' },
    { value: 2, label: 'Orta düzeyde - Hoş değildi ama katlanabildim' },
    { value: 3, label: 'Ciddi düzeyde - Dayanmakta çok zorlandım' },
  ],

  result: {
    type: 'range',

    ranges: [
      {
        min: 0,
        max: 9,
        title: 'Minimal düzey',
        message:
          'Yanıtlarınız kaygı belirtilerinin günlük yaşamınızda belirgin bir şekilde öne çıkmadığını göstermektedir.',
      },
      {
        min: 10,
        max: 18,
        title: 'Hafif düzey',
        message:
          'Yanıtlarınız zaman zaman kaygı belirtileri yaşadığınızı göstermektedir. Bu belirtiler bazı dönemlerde sizi rahatsız ediyor olabilir.',
      },
      {
        min: 19,
        max: 29,
        title: 'Orta düzey',
        message:
          'Yanıtlarınız kaygı belirtilerinin daha sık ve belirgin şekilde yaşandığını göstermektedir. Bu belirtiler günlük yaşamınızı ve işlevselliğinizi etkiliyor olabilir. Yaşadığınız durumu bir psikolojik danışman veya ruh sağlığı uzmanıyla değerlendirmeniz faydalı olabilir.',
      },
      {
        min: 30,
        max: 63,
        title: 'Şiddetli düzey',
        message:
          'Yanıtlarınız kaygı belirtilerinin yoğun ve belirgin şekilde yaşandığını göstermektedir. Bu belirtiler günlük yaşamınızı ve işlevselliğinizi önemli ölçüde etkiliyor olabilir. Bir ruh sağlığı uzmanından psikolojik destek almanız ve yaşadığınız durumu bir uzmanla değerlendirmeniz önemlidir.',
      },
    ],
  },

  questions: [
    {
      id: 1,
      text: 'Bedeninizin herhangi bir yerinde uyuşma veya karıncalanma',
    },
    {
      id: 2,
      text: 'Sıcak / ateş basmaları',
    },
    {
      id: 3,
      text: 'Bacaklarda halsizlik, titreme',
    },
    {
      id: 4,
      text: 'Gevşeyememe',
    },
    {
      id: 5,
      text: 'Çok kötü şeyler olacak korkusu',
    },
    {
      id: 6,
      text: 'Baş dönmesi veya sersemlik',
    },
    {
      id: 7,
      text: 'Kalp çarpıntısı',
    },
    {
      id: 8,
      text: 'Dengeyi kaybetme duygusu',
    },
    {
      id: 9,
      text: 'Dehşete kapılma',
    },
    {
      id: 10,
      text: 'Sinirlilik',
    },
    {
      id: 11,
      text: 'Boğuluyormuş gibi olma duygusu',
    },
    {
      id: 12,
      text: 'Ellerde titreme',
    },
    {
      id: 13,
      text: 'Titreklik',
    },
    {
      id: 14,
      text: 'Kontrolü kaybetme korkusu',
    },
    {
      id: 15,
      text: 'Nefes almada güçlük',
    },
    {
      id: 16,
      text: 'Ölüm korkusu',
    },
    {
      id: 17,
      text: 'Korkuya kapılma',
    },
    {
      id: 18,
      text: 'Midede hazımsızlık ya da rahatsızlık hissi',
    },
    {
      id: 19,
      text: 'Baygınlık',
    },
    {
      id: 20,
      text: 'Yüzün kızarması',
    },
    {
      id: 21,
      text: 'Terleme (sıcaklığa bağlı olmayan)',
    },
  ],
};
