export const depresyonTest = {
  id: 'depresyon',
  title: 'Beck Depresyon',

  minValue: 0,
  maxValue: 3,

  instruction:
    'Merhaba, aşağıda gruplar halinde cümleler verilmektedir. Öncelikle her gruptaki cümleleri dikkatle okuyarak, BUGÜN DÂHİL GEÇEN HAFTA içinde kendinizi nasıl hissettiğinizi en iyi anlatan cümleyi seçiniz.',

  options: [
    { value: 0, label: '0' },
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
  ],

  result: {
    type: 'range',
    ranges: [
      {
        min: 0,
        max: 9,
        title: 'Minimal düzey',
        message:
          'Yanıtlarınız depresif belirtilerin günlük yaşamınızda belirgin bir şekilde öne çıkmadığını göstermektedir.',
      },
      {
        min: 10,
        max: 18,
        title: 'Hafif düzey',
        message:
          'Yanıtlarınız zaman zaman depresif duygu ve düşünceler yaşadığınızı göstermektedir. Bu durum günlük yaşamınızı bazı dönemlerde etkiliyor olabilir.',
      },
      {
        min: 19,
        max: 29,
        title: 'Orta düzey',
        message:
          'Yanıtlarınız depresif duygu ve düşüncelerin daha sık ve belirgin şekilde yaşandığını göstermektedir. Bu belirtiler günlük yaşamınızı ve işlevselliğinizi etkiliyor olabilir. Yaşadığınız durumu bir psikolojik danışman veya ruh sağlığı uzmanıyla değerlendirmeniz faydalı olabilir.',
      },
      {
        min: 30,
        max: 63,
        title: 'Şiddetli düzey',
        message:
          'Yanıtlarınız depresif belirtilerin yoğun ve belirgin olduğunu göstermektedir. Bu belirtiler günlük yaşamınızı ve işlevselliğinizi önemli ölçüde etkiliyor olabilir. Bir ruh sağlığı uzmanından psikolojik destek almanız ve yaşadığınız durumu bir uzmanla değerlendirmeniz önemlidir.',
      },
    ],
  },

  questions: [
    {
      id: 1,
      text: 'Kendimi üzüntülü ve sıkıntılı hissetmiyorum.',
      options: [
        { value: 0, label: 'Kendimi üzüntülü ve sıkıntılı hissetmiyorum.' },
        { value: 1, label: 'Kendimi üzüntülü ve sıkıntılı hissediyorum.' },
        {
          value: 2,
          label: 'Hep üzüntülü ve sıkıntılıyım. Bundan kurtulamıyorum.',
        },
        {
          value: 3,
          label: 'O kadar üzüntülü ve sıkıntılıyım ki artık dayanamıyorum.',
        },
      ],
    },

    {
      id: 2,
      text: 'Gelecek hakkında mutsuz ve karamsar değilim.',
      options: [
        {
          value: 0,
          label: 'Gelecek hakkında mutsuz ve karamsar değilim.',
        },
        {
          value: 1,
          label: 'Gelecek hakkında karamsarım.',
        },
        {
          value: 2,
          label: 'Gelecekten beklediğim hiçbir şey yok.',
        },
        {
          value: 3,
          label:
            'Geleceğim hakkında umutsuzum ve sanki hiçbir şey düzelmeyecekmiş gibi geliyor.',
        },
      ],
    },

    {
      id: 3,
      text: 'Kendimi başarısız bir insan olarak görmüyorum.',
      options: [
        {
          value: 0,
          label: 'Kendimi başarısız bir insan olarak görmüyorum.',
        },
        {
          value: 1,
          label:
            'Çevremdeki birçok kişiden daha çok başarısızlıklarım olmuş gibi hissediyorum.',
        },
        {
          value: 2,
          label:
            'Geçmişe baktığımda başarısızlıklarla dolu olduğunu görüyorum.',
        },
        {
          value: 3,
          label: 'Kendimi tümüyle başarısız biri olarak görüyorum.',
        },
      ],
    },

    {
      id: 4,
      text: 'Birçok şeyden eskisi kadar zevk alıyorum.',
      options: [
        {
          value: 0,
          label: 'Birçok şeyden eskisi kadar zevk alıyorum.',
        },
        {
          value: 1,
          label: 'Eskiden olduğu gibi her şeyden hoşlanmıyorum.',
        },
        {
          value: 2,
          label: 'Artık hiçbir şey bana tam anlamıyla zevk vermiyor.',
        },
        {
          value: 3,
          label: 'Her şeyden sıkılıyorum.',
        },
      ],
    },

    {
      id: 5,
      text: 'Kendimi herhangi bir şekilde suçlu hissetmiyorum.',
      options: [
        {
          value: 0,
          label: 'Kendimi herhangi bir şekilde suçlu hissetmiyorum.',
        },
        {
          value: 1,
          label: 'Kendimi zaman zaman suçlu hissediyorum.',
        },
        {
          value: 2,
          label: 'Çoğu zaman kendimi suçlu hissediyorum.',
        },
        {
          value: 3,
          label: 'Kendimi her zaman suçlu hissediyorum.',
        },
      ],
    },

    {
      id: 6,
      text: 'Bana cezalandırılmışım gibi geliyor.',
      options: [
        {
          value: 0,
          label: 'Bana cezalandırılmışım gibi geliyor.',
        },
        {
          value: 1,
          label: 'Cezalandırılabileceğimi hissediyorum.',
        },
        {
          value: 2,
          label: 'Cezalandırılmayı bekliyorum.',
        },
        {
          value: 3,
          label: 'Cezalandırıldığımı hissediyorum.',
        },
      ],
    },

    {
      id: 7,
      text: 'Kendimden memnunum.',
      options: [
        {
          value: 0,
          label: 'Kendimden memnunum.',
        },
        {
          value: 1,
          label: 'Kendi kendimden pek memnun değilim.',
        },
        {
          value: 2,
          label: 'Kendime çok kızıyorum.',
        },
        {
          value: 3,
          label: 'Kendimden nefret ediyorum.',
        },
      ],
    },

    {
      id: 8,
      text: 'Başkalarından daha kötü olduğumu sanmıyorum.',
      options: [
        {
          value: 0,
          label: 'Başkalarından daha kötü olduğumu sanmıyorum.',
        },
        {
          value: 1,
          label:
            'Zayıf yanlarım veya hatalarım için kendi kendimi eleştiririm.',
        },
        {
          value: 2,
          label: 'Hatalarımdan dolayı ve her zaman kendimi kabahatli bulurum.',
        },
        {
          value: 3,
          label: 'Her aksilik karşısında kendimi hatalı bulurum.',
        },
      ],
    },

    {
      id: 9,
      text: 'Kendimi öldürmek gibi düşüncelerim yok.',
      options: [
        {
          value: 0,
          label: 'Kendimi öldürmek gibi düşüncelerim yok.',
        },
        {
          value: 1,
          label:
            'Zaman zaman kendimi öldürmeyi düşündüğüm olur. Fakat yapmıyorum.',
        },
        {
          value: 2,
          label: 'Kendimi öldürmek isterdim.',
        },
        {
          value: 3,
          label: 'Fırsatını bulsam kendimi öldürürdüm.',
        },
      ],
    },

    {
      id: 10,
      text: 'Her zamankinden fazla içimden ağlamak gelmiyor.',
      options: [
        {
          value: 0,
          label: 'Her zamankinden fazla içimden ağlamak gelmiyor.',
        },
        {
          value: 1,
          label: 'Zaman zaman içinden ağlamak geliyor.',
        },
        {
          value: 2,
          label: 'Çoğu zaman ağlıyorum.',
        },
        {
          value: 3,
          label: 'Eskiden ağlayabilirdim şimdi istesem de ağlayamıyorum.',
        },
      ],
    },

    {
      id: 11,
      text: 'Şimdi her zaman olduğumdan daha sinirli değilim.',
      options: [
        {
          value: 0,
          label: 'Şimdi her zaman olduğumdan daha sinirli değilim.',
        },
        {
          value: 1,
          label: 'Eskisine kıyasla daha kolay kızıyor ya da sinirleniyorum.',
        },
        {
          value: 2,
          label: 'Şimdi hep sinirliyim.',
        },
        {
          value: 3,
          label:
            'Bir zamanlar beni sinirlendiren şeyler şimdi hiç sinirlendirmiyor.',
        },
      ],
    },

    {
      id: 12,
      text: 'Başkaları ile görüşmek, konuşmak isteğimi kaybetmedim.',
      options: [
        {
          value: 0,
          label: 'Başkaları ile görüşmek, konuşmak isteğimi kaybetmedim.',
        },
        {
          value: 1,
          label: 'Başkaları ile eskiden daha az konuşmak, görüşmek istiyorum.',
        },
        {
          value: 2,
          label: 'Başkaları ile konuşma ve görüşme isteğimi kaybetmedim.',
        },
        {
          value: 3,
          label: 'Hiç kimseyle konuşmak görüşmek istemiyorum.',
        },
      ],
    },

    {
      id: 13,
      text: 'Eskiden olduğu gibi kolay karar verebiliyorum.',
      options: [
        {
          value: 0,
          label: 'Eskiden olduğu gibi kolay karar verebiliyorum.',
        },
        {
          value: 1,
          label: 'Eskiden olduğu kadar kolay karar veremiyorum.',
        },
        {
          value: 2,
          label: 'Karar verirken eskisine kıyasla çok güçlük çekiyorum.',
        },
        {
          value: 3,
          label: 'Artık hiç karar veremiyorum.',
        },
      ],
    },

    {
      id: 14,
      text: 'Aynada kendime baktığımda değişiklik görmüyorum.',
      options: [
        {
          value: 0,
          label: 'Aynada kendime baktığımda değişiklik görmüyorum.',
        },
        {
          value: 1,
          label: 'Daha yaşlanmış ve çirkinleşmişim gibi geliyor.',
        },
        {
          value: 2,
          label: 'Görünüşümün çok değiştiğini ve çirkinleştiğimi hissediyorum.',
        },
        {
          value: 3,
          label: 'Kendimi çok çirkin buluyorum.',
        },
      ],
    },

    {
      id: 15,
      text: 'Eskisi kadar iyi çalışabiliyorum.',
      options: [
        {
          value: 0,
          label: 'Eskisi kadar iyi çalışabiliyorum.',
        },
        {
          value: 1,
          label: 'Bir şeyler yapabilmek için gayret göstermem gerekiyor.',
        },
        {
          value: 2,
          label:
            'Herhangi bir şeyi yapabilmek için kendimi çok zorlamam gerekiyor.',
        },
        {
          value: 3,
          label: 'Hiçbir şey yapamıyorum.',
        },
      ],
    },

    {
      id: 16,
      text: 'Her zamanki gibi iyi uyuyabiliyorum.',
      options: [
        {
          value: 0,
          label: 'Her zamanki gibi iyi uyuyabiliyorum.',
        },
        {
          value: 1,
          label: 'Eskiden olduğu gibi iyi uyuyamıyorum.',
        },
        {
          value: 2,
          label:
            'Her zamankinden 1-2 saat daha erken uyanıyorum ve tekrar uyuyamıyorum.',
        },
        {
          value: 3,
          label:
            'Her zamankinden çok daha erken uyanıyor ve tekrar uyuyamıyorum.',
        },
      ],
    },

    {
      id: 17,
      text: 'Her zamankinden daha çabuk yorulmuyorum.',
      options: [
        {
          value: 0,
          label: 'Her zamankinden daha çabuk yorulmuyorum.',
        },
        {
          value: 1,
          label: 'Her zamankinden daha çabuk yoruluyorum.',
        },
        {
          value: 2,
          label: 'Yaptığım her şey beni yoruyor.',
        },
        {
          value: 3,
          label:
            'Kendimi hemen hiçbir şey yapamayacak kadar yorgun hissediyorum.',
        },
      ],
    },

    {
      id: 18,
      text: 'İştahım her zamanki gibi.',
      options: [
        {
          value: 0,
          label: 'İştahım her zamanki gibi.',
        },
        {
          value: 1,
          label: 'İştahım her zamanki kadar iyi değil.',
        },
        {
          value: 2,
          label: 'İştahım çok azaldı.',
        },
        {
          value: 3,
          label: 'Artık hiç iştahım yok.',
        },
      ],
    },

    {
      id: 19,
      text: 'Son zamanlarda kilo vermedim.',
      options: [
        {
          value: 0,
          label: 'Son zamanlarda kilo vermedim.',
        },
        {
          value: 1,
          label: 'İki kilodan fazla kilo verdim.',
        },
        {
          value: 2,
          label: 'Dört kilodan fazla kilo verdim.',
        },
        {
          value: 3,
          label: 'Altı kilodan fazla kilo verdim.',
        },
      ],
    },

    {
      id: 20,
      text: 'Sağlığım beni fazla endişelendirmiyor.',
      options: [
        {
          value: 0,
          label: 'Sağlığım beni fazla endişelendirmiyor.',
        },
        {
          value: 1,
          label:
            'Ağrı, sancı, mide bozukluğu veya kabızlık gibi rahatsızlıklar beni endişelendiriyor.',
        },
        {
          value: 2,
          label:
            'Sağlığım beni endişelendirdiği için başka şeyler düşünmek zorlaşıyor.',
        },
        {
          value: 3,
          label:
            'Sağlığım hakkında o kadar endişeliyim ki başka hiçbir şey düşünemiyorum.',
        },
      ],
    },

    {
      id: 21,
      text: 'Son zamanlarda cinsel konulara olan ilgimde bir değişme fark etmiyorum.',
      options: [
        {
          value: 0,
          label:
            'Son zamanlarda cinsel konulara olan ilgimde bir değişme fark etmiyorum.',
        },
        {
          value: 1,
          label: 'Cinsel konularla eskisinden daha az ilgiliyim.',
        },
        {
          value: 2,
          label: 'Cinsel konularla şimdi çok daha az ilgiliyim.',
        },
        {
          value: 3,
          label: 'Cinsel konulara olan ilgimi tamamen kaybettim.',
        },
      ],
    },
  ],
};
