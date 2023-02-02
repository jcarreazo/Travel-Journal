export default function Data() {
  var Img1 = `https://s3-alpha-sig.figma.com/img/188d/a2c4/e143f205acb5ae4dc702b16f370e7994?Expires=1676246400&Signature=T6HcCB24sveVa315trC1wZdvSyZS-JjWZv65STFd42yrX-tLWXYkS-9zwRvV1gXS9Y6ZH3uukiZAPUlOcHl14NCU6UFSlpiqcnqGguQ1ZjiN4QKk7RfbhfwiyE9-1tzGY-XLxDB7U2MPsSJq6mrApuxn~xVx4moo1K6lsTkk3hHtwXT6NFdjbz8bUiLEW7t8saqQirwrDat9AACAV4cND1UOHyQwhqo7G837MbhUTrmOd~2iiw~9v16PUqjPj5onAM2Kcb~-d-7ylvwQS0B~Ov3zkoolnNiaFUu6StuUkRKeGu6e5cJt5fpzII3BKqghTK20W8ZUZvSjzafrg955Ow__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`;
  var Img2 = `https://s3-alpha-sig.figma.com/img/3e4c/42db/87935fa3908dfc212c11483e45b24be0?Expires=1676246400&Signature=SIud7SAunip5sAaEtMw~iNvPROrxO~EsRbswBjRqOMH14Fpkq6JiBFPjtKnxAEDsVtT7oJ0wh1iUbbcL97ADGR4xfLEZ6t2T9Rxk5blIAMQhLDm7fbG-Qyu24zWJ-ysjBCdoyrPIHK5IzTSb25OalYACO4Xhr1-u36n8mBBbhzpsKgnLT5xEZZ-SUnS-JgN0W6GT2e4t3iXYNAGYy082kb8u3-9FprIHxPT9-csCngPwG0D7VlisjYMARh5tm1RuUe1~7bB-iJZ8xVxIvRfBD2A4MPTdAiZgi5qGOj40vDkUrV5VbisiNhGQQDQ6eG8F6xWtWQpPp3vHxR-YkTjYYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`;
  var Img3 = `https://s3-alpha-sig.figma.com/img/3dc0/b407/33e2a0d246e011c923d00b7ea3de39f0?Expires=1676246400&Signature=EYYCXAx4jxQUdjywPm6ovD~0NRF7jxgRD3x1KrXzRd3-ekgLHuhBFLDph-zg8AavO1nFdC87D5ra3Tv6dozorfj3-IL~MdGs9EbCovamJl5PBxSZWffGSIGyaN0EWW3qagNuo13Kn0QrYWAcEvP8FD-OgDJfMhSKwQQss~HOJ0P7s~EAMXK8dfF0qWopY6UjKiJSzRY6oHkhRQL1QkFHG1Gh2ftXtPJC~AyUnW-9zbOlf~gSaOktPZ9Rc3l7yI1BOUBN3q4VhLCX~Z6djz7ZcICvMsusmcN5KW~crE-PxDS6QUMUlGsvnUwl8aGN3Vw8ImKAC-G2kzAOWbMh4idPKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4`;
  return [
    {
      Image: Img1,
      Alt: 'mount-fuji',
      Country: 'JAPAN',
      Destination: 'Mount Fuji',
      Date: '12 Jan, 2021 - 24 Jan, 2021',
      Description:
        'Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.',
    },

    {
      Image: Img2,
      Alt: 'sydney-opera-house',
      Country: 'AUSTRALIA',
      Destination: 'Sydney Opera House',
      Date: '27 May, 2021 - 8 Jun, 2021',
      Description:
        'The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th centurys most famous and distinctive buildings',
    },

    {
      Image: Img3,
      Alt: 'geiranger-fjord',
      Country: 'NORWAY',
      Destination: 'Geirangerfjord',
      Date: '01 Oct, 2021 - 18 Nov, 2021',
      Description:
        'The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.',
    },
  ];
}
