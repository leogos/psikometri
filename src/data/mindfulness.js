export const mindfulnessTest = {
  id: 'mindfulness',

  title: 'Bilinçli Farkındalık (Mindfulness)',

  minValue: 1,
  maxValue: 6,

  options: [
    {
      value: 1,
      label: 'Hemen her zaman',
    },
    {
      value: 2,
      label: 'Çoğu zaman',
    },
    {
      value: 3,
      label: 'Bazen',
    },
    {
      value: 4,
      label: 'Nadiren',
    },
    {
      value: 5,
      label: 'Oldukça seyrek',
    },
    {
      value: 6,
      label: 'Hemen hiçbir zaman',
    },
  ],

  result: {
    type: 'percentage',
  },

  questions: [
    {
      id: 1,
      text: 'Belli bir süre farkında olmadan bazı duyguları yaşayabilirim.',
    },
    {
      id: 2,
      text: 'Eşyaları özensizlik, dikkat etmeme veya başka bir şeyleri düşündüğüm için kırarım veya dökerim.',
    },
    {
      id: 3,
      text: 'Şu anda olana odaklanmakta zorlanırım.',
    },
    {
      id: 4,
      text: 'Gideceğim yere yolda olup bitenlere dikkat etmeksizin hızlıca yürüyerek gitmeyi tercih ederim.',
    },
    {
      id: 5,
      text: 'Fiziksel gerginlik ya da rahatsızlık içeren duyguları, gerçekten dikkatimi çekene kadar fark etmeme eğilimim vardır.',
    },
    {
      id: 6,
      text: 'Bir kişinin ismini bana söylendikten hemen sonra unuturum.',
    },
    {
      id: 7,
      text: 'Yaptığım şeyin farkında olmaksızın otomatiğe bağlanmış gibi yapıyorum.',
    },
    {
      id: 8,
      text: 'Aktiviteleri gerçekte ne olduklarına dikkat etmeden acele ile yerine getiririm.',
    },
    {
      id: 9,
      text: 'Başarmak istediğim hedeflere öyle çok odaklanırım ki o hedeflere ulaşmak için şu an ne yapıyor olduğumun farkında olmam.',
    },
    {
      id: 10,
      text: 'İşleri veya görevleri şu an ne yapıyor olduğumun farkında olmaksızın otomatik olarak yaparım.',
    },
    {
      id: 11,
      text: 'Kendimi bir kulaklıkla birini dinlerken aynı zamanda başka bir şeyi de yaparken bulurum.',
    },
    {
      id: 12,
      text: 'Gideceğim yerlere farkında olmadan gidiyor, sonra da oraya neden gittiğime şaşırıyorum.',
    },
    {
      id: 13,
      text: 'Kendimi gelecek veya geçmişle meşgul bulurum.',
    },
    {
      id: 14,
      text: 'Kendimi yaptığım işlere dikkatimi vermemiş bulurum.',
    },
    {
      id: 15,
      text: 'Ne yediğimin farkında olmaksızın atıştırıyorum.',
    },
  ],
};
