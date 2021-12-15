const products = [
  //guitars
  {
    name: "Gibson Les Paul Classic",
    description:
      "The Gibson Les Paul™ Classic combines the early 60's style Les Paul model with some functional and time-tested modifications. As expected, the LP Classic is crafted with a mahogany back and maple top coupled with a slim taper mahogany neck and bound, rosewood fingerboard. BurstBucker™ 61R & 61T zebra, open-coil pickups provide classic Gibson tones from the era with a bit of extra punch thanks to the open coils. The control assembly features 4 push-pull pots which provide choices of coil tapping, phase switching, and pure bypassing for functional and versatile sonic variety.",
    imageurl:
      "https://cdn.imgbin.com/12/7/5/imgbin-gibson-les-paul-studio-gibson-brands-inc-gibson-les-paul-classic-guitar-guitar-cQLT15wpC5nnM31mtXEBhajE5.jpg",
    categoryName: "Guitars",
    condition: "New",
    inventory: 1,
    price: 2299,
  },
  {
    name: "Gibson 50s J-45 Original",
    description:
      "The new 50s J-45 Original model flaunts vintage-inspired detailing from the golden era of Gibson. Classic “Workhorse” materials include a Sitka Spruce top and Select Mahogany back and sides. The multi-ply top and single-ply back binding are subtly antiqued making each instrument look just like a seasoned Gibson acoustic. Appointed with cream button tuners, a 50s-era tortoise pick guard, and upgraded with an LR Baggs® VTC pickup for the best and most natural-sounding tone when amplified. ",
    imageurl:
      "https://static.gibson.com/product-images/Acoustic/ACCSRX331/Ebony/front-banner-1600_900.png",
    categoryName: "Guitars",
    condition: "Used",
    inventory: 1,
    price: 2199,
  },
  {
    name: "Fender Jason Isbell Custom Telecaster",
    description:
      "The Jason Isbell Custom Telecaster is visually striking – the Chocolate Sunburst pops against the cream double-binding of the ‘59-style Telecaster Custom body while Fender’s Road Worn® aging process gives it the look and feel of a well-used instrument. The vintage-inspired mid-’60s “C”-shaped maple neck and 21-fret rosewood fingerboard combines with the sparkling, fiery tones of the custom Jason Isbell Telecaster Pickups and the chicken-pickin’ playability of the modified bridge to create a guitar that sounds and plays as a good as it looks.",
    imageurl:
      "https://cdn.shopify.com/s/files/1/0956/3980/products/0140320364_fen_ins_frt_1_rr_2400x787.png?v=1610375728",
    categoryName: "Guitars",
    condition: "New",
    inventory: 1,
    price: 1545,
  },
  {
    name: "Fender Player Stratocaster Electric Guitar",
    description:
      "The inspiring sound of a Stratocaster is one of the foundations of Fender. Featuring this classic sound—bell-like high end, punchy mids and robust low end, combined with crystal-clear articulation—the Player Stratocaster is packed with authentic Fender feel and style. It’s ready to serve your musical vision, it’s versatile enough to handle any style of music and it’s the perfect platform for creating your own sound.",
    imageurl:
      "https://www.kindpng.com/picc/m/772-7727562_fender-player-stratocaster-electric-guitar-hd-png.png",
    categoryName: "Guitars",
    condition: "New",
    inventory: 1,
    price: 899,
  },
  {
    name: "Diamon Guitars Barchetta STF",
    description:
      "The BARCHETTA combines a classic style with a modern update. Beautiful enough to be classic, modern enough to be aggressive, the BARCHETTA has a wide variety of colors and configurations to go from casual, to black tie, to black t-shirt. The BARCHETTA is what happens when a guitar grows up. The pinnacle of refinement and power, it's the S-Class AMG of guitars. Sleek, elegant, and FAST.The LT models afford you the opportunity for a guitar built to the same quality as our highest end guitars but at a more affordable price-point. Features a bolt-on neck and Diamond Custom Pickups optimized for our guitars and for the best amplifier performance.",
    imageurl:
      "https://images.squarespace-cdn.com/content/v1/578da7ec197aea33c80451b5/1480452419314-RWI5XZV84U2C8FCHYIX4/image-asset.png",
    categoryName: "Guitars",
    condition: "New",
    inventory: 10,
    price: 749,
  },
  {
    name: "Lakland USA Series 65-T Guitar",
    description:
      "The Lakland USA 65-T Deluxe Sweetwater Exclusive is handcrafted in America to deliver elegant vintage visuals and optimized playing feel while its state-of-the-art electronics serve up the versatile tonal range today’s guitarists demand. This impeccable solidbody electric guitar is an instant classic constructed from premium tonewoods, including a swamp ash body topped with eye-popping flame maple and a roasted quartersawn maple neck crowned with a ebony fingerboard.",
    imageurl:
      "https://www.lakland.com/wp-content/uploads/2018/12/65-T-Tranlucent-Red_clipped_rev_2.png",
    categoryName: "Guitars",
    condition: "New",
    inventory: 10,
    price: 2400,
  },
  {
    name: "Martin Guitars Road Series | GPC-11E",
    description:
      "With a gorgeous glossed Sitka spruce top and sapele back and sides, this solid wood Grand Performance model with cutaway is a great sounding guitar at an affordable price. New to this model are stunning mother-of-pearl pattern fingerboard and rosette inlays with a multi-stripe rosette border. It has an FSC® Certified Richlite® fingerboard and bridge, satin finish body, and a hand-rubbed neck finish. Also new to this model is the Fishman® MX-T electronics package with a built-in soundhole tuner that auto mutes the audio output so you can tune up any time without using a pedal.",
    imageurl:
      "https://www.martinguitar.com/dw/image/v2/BGJT_PRD/on/demandware.static/-/Library-Sites-MartinSharedLibrary/default/dw535a639b/images/homepage/guitar-guide/road-series.png",
    categoryName: "Guitars",
    condition: "New",
    inventory: 10,
    price: 999,
  },
  {
    name: "Reverend Charger 290",
    description:
      "Fat, raw and bluesy but with just the right amount of bite to cut through the mix. This is the workhorse guitar that is clean and twangy enough for country, but thick enough for rock.",
    imageurl:
      "https://reverendguitars.com/wp-content/uploads/2021/07/reverend_charger-290_midnight_black_guitar_front.png",
    categoryName: "Guitars",
    condition: "New",
    inventory: 10,
    price: 1199,
  },
  {
    name: "Gretsch Guitars G5420T Electromatic® Hollow Body Single-Cut with Bigsby®",
    description:
      "Alive and resonant, the G5420T has fully hollow build with a true Filter'Tron™ voice that explodes with huge punch and clear, strong presence. Like all Electromatic guitars, it delivers the fearless and electrifying authenticity that has set Gretsch apart as the quintessential rock ‘n’ roll guitars from the very beginning. It’s the sound of honor itself—play proud.",
    imageurl:
      "https://e7.pngegg.com/pngimages/124/653/png-clipart-gretsch-g5420t-electromatic-semi-acoustic-guitar-electric-guitar-gretsch-guitar-accessory-gretsch.png",
    categoryName: "Guitars",
    condition: "New",
    inventory: 10,
    price: 850,
  },
  {
    name: "Knaggs Tier 2 Severn Chocolate / Creme",
    description:
      "Classic, time-honored appeal with an innovative, modern spin: that's what Joe Knaggs is all about. With 20 years under his belt as the head of the R & D and the Private Stock Department at Paul Reed Smith, it's no wonder that Knaggs guitars are hand-built perfection. The first thing we always notice is the sheer attention to detail -- not a single facet of these instruments goes overlooked. The craftsmanship is first rate. Plug it in, and it only gets better; these guitars maintain all the vintage tones you need, handle modern gain like you'd expect and sustain for days thanks to the exceptional Alder body and Flame Maple top. Outfitted with top-quality Seymour Duncan pickups in a SSS configuration, the tonal possibilities are limitless. You've got to play one!",
    imageurl:
      "https://www.guitar-planet.co.uk/wp-content/uploads/2016/08/Knaggs-Severn-T2-Trem-Hollowbody-Chocolate-Creme.png",
    categoryName: "Guitars",
    condition: "New",
    inventory: 10,
    price: 5750,
  },
  {
    name: "Jackson Warrior JS32 Electric Guitar",
    description:
      "The formidable Warrior™ JS32 has a poplar body and a bolt-on maple speed neck with graphite reinforcement for rock-solid stability. Hosting 24 jumbo frets and pearloid sharkfin inlays, the 12”-16” compound radius fully bound rosewood fingerboard creates the ideal playing surface for fat riffs and easy chording near the nut while gradually flattening in the upper registers for lightning-quick solos and wide bends without fear of fretting out.A pair of Jackson high-output humbucking pickups with ceramic magnets cranks out clear tone with plenty of girth, and can be shaped with a three-way toggle switch and single volume and tone controls. The Warrior JS32 also features a Jackson-branded Floyd Rose double-locking tremolo bridge and die-cast tuners.",
    imageurl:
      "https://cdn.imgbin.com/25/13/7/imgbin-jackson-dinky-jackson-king-v-jackson-kelly-jackson-rhoads-jackson-guitars-guitar-iw7Y8x7sQVrs8h4Vyg1wtKJDS.jpg",
    categoryName: "Guitars",
    condition: "New",
    inventory: 10,
    price: 350,
  },
  {
    name: "Jackson X Series Kelly KEX Electric Guitar",
    description:
      "X Series Kelly models exude metal sophistication, while also delivering massive sound and reliable performance at an exceptional value.The KEX features lightwood and resonant poplar body-wings, one-piece through-body maple neck with graphite reinforcement and scarf joint, and a 12”-16” compound radius laurel fingerboard with 24 jumbo frets and pearloid sharkfin inlays.Ready to roar, the KEX is also equipped with a pair of volcanic Jackson high-output humbucking pickups, single volume and tone controls, three-way toggle switch and a Floyd Rose Special double-locking tremolo system, providing amazing tone, exceptional dynamic response and reliable performance.The KEX is available in Gloss Black with eye-catching gold hardware and white binding along the body, neck and Jackson pointed 6-in-line headstock. Case sold separately.",
    imageurl:
      "https://w7.pngwing.com/pngs/148/125/png-transparent-jackson-guitars-jackson-dinky-jackson-js22-jackson-js32-dinky-dka-jackson-soloist-electric-guitar-guitar-accessory-string-instrument-acoustic-electric-guitar.png",
    categoryName: "Guitars",
    condition: "New",
    inventory: 10,
    price: 699,
  },
  //drums
  {
    name: "Gretsch Catalina Maple Silver sparkle 6-Piece Shell Pack",
    description:
      "From its sleek, innovative hardware designs and legendary Gretsch-formula shell, Catalina Maple is a favorite among players that want a terrific sounding Gretsch drum set with ergonomically satisfying playing experience and a fresh, contemporary look.",
    imageurl:
      "https://images.reverb.com/image/upload/s--DDLjauuB--/f_auto,t_large/v1537388722/dev0hoowwuzlunbgfgrf.jpg",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 1119,
  },
  {
    name: "Gretsch Custom USA Round Badge Caribbean Twilight 5-piece Shell Pack",
    description:
      "Heritage Build authentically recaptures the classic look and vibe from the revered Gretsch days of the Big Band and Jazz era. The classic G5472 double-ended lug, fitted with our extra-long tension rods, enriches the look of any Nitron, Satin or Gloss finish on your custom Gretsch drum kit. ",
    imageurl:
      "https://www.gretschdrums.com/sites/default/files/styles/portfolio_portrait_full/public/drums/usa-custom-gallery/USACustomCaribbeanTwilight.png?itok=QpWiOXTx",
    categoryName: "Drums",
    condition: "Used",
    inventory: 1,
    price: 3400,
  },
  {
    name: "Ludwig Classic Maple Pro Beat 5-piece Shell Pack",
    description:
      "Classic Maple series drums have been the professional choice for over 20 years. Its full tonality, rich sustain, and exceptional versatility has made these drums the premier choice for any performance application.",
    imageurl:
      "https://www.ludwig-drums.com/application/files/cache/0d7bb2496318bfb8fbbb2a421c4fbaa0.jpg",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 1011,
  },
  // Band / Orchestra
  {
    name: "Bach 18037 Professional Bb Trumpet",
    description:
      "The Bach 180 series trumpets are the number one selling professional trumpets in the world. The 18037 features a #37 one-piece hand-hammered professional bell that produces a warm sound with great projection allowing this instrument to work well in multiple musical settings—from jazz to concert or solo playing.",
    imageurl:
      "https://www.conn-selmer.com/application/files/8815/0722/9036/18037.png",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 3019,
  },
  {
    name: "Allora ACL-250 Student Series Clarinet",
    description:
      "The Allora ACL-250 has an ABS plastic body with a smooth finish, nickel-plated nickel silver keys, a fixed thumb rest with neck strap ring and Pisoni pads. Comes with an upgraded nylon polyfoam case and a three-year warranty.",
    imageurl:
      "https://media.guitarcenter.com/is/image/MMGS7/J51109000000000-00-720x720.jpg",
    categoryName: "Band",
    condition: "Used",
    inventory: 1,
    price: 175,
  },
  {
    name: "Prelude by Conn-Selmer AS711 Student Alto Saxophone",
    description:
      "This beginner's model from Conn-Selmer, the Prelude Alto Saxophone, is built to be durable and easy to play. It features a gold lacquer body with high F#, rocking table keys, and articulated C#. Includes case, mouthpiece, cap, and ligature.",
    imageurl:
      "https://media.musicarts.com/is/image/MMGS7/Prelude-by-Conn-Selmer-AS711-Student-Model-Alto-Saxophone/585558000000000-00-250x250.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 975,
  },
  // keyboard / synths
  {
    name: "Nord Stage 3 Keyboard",
    description:
      "Our outstanding new flagship instrument features our latest award-winning technologies including the Nord Lead A1 Synth Engine with sample playback, our acclaimed Nord C2D organ, a greatly enhanced Piano Section and extensive hands-on Effects - all in one exceptional performance keyboard.",
    imageurl:
      "https://www.nordkeyboards.com/sites/default/files/files/products/nord-stage-3/images/models-stage3-88-revb.jpg",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 4800,
  },
  {
    name: "Yamaha EZ-300 Keyboard",
    description:
      "EZ-300 is a 61-key, touch-sensitive keyboard—specially equipped with lighting keys, and designed as an entry portable keyboard model for the first-time players. Stylish and comprehensive, it allows you to practice, play and perform with a variety of lesson functions and authentic instrument sounds.",
    imageurl:
      "https://www.yamaha.com/yamahavgn/PIM/Images/ez-300_detail06_5c21239d586292cef740b246009a5d85.png?_ga=2.108831554.1564538047.1638376634-424214226.1638376634",
    categoryName: "Keyboards",
    condition: "Used",
    inventory: 1,
    price: 400,
  },
  {
    name: "Yamaha CEL-56 Glockenspiel",
    description: "Professional model equipped with a soft pedal.",
    imageurl:
      "https://www.yamaha.com/yamahavgn/PIM/Images/CEL-56P_540x540_735x735_d5dd4b16e6705e566f63a43cc7c0af46.jpg",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 33280,
  },
  // accessories
  {
    name: "Monster Cable Monster Rock 1/4 inch Instrument Cable 6 ft.",
    description:
      "Monster Rock is a high-performance, application-specific cable designed to enhance the sonic bite and character of your instrument. Multi-gauge wire networks maximize your guitar's tone. Cut through the mix with Monster Rock.",
    imageurl:
      "https://i5.walmartimages.com/asr/1f63b4c8-e1d0-431e-bc0b-b0c81f4dc901_1.26ef1431d23f15df4686282a1353e777.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF",
    categoryName: "Accessories",
    condition: "New",
    inventory: 1,
    price: 84,
  },
  {
    name: "Boss DB-90 Dr. Beat Metronome",
    description:
      "The Boss DB-90 Dr. Beat Metronome features Rhythm Coach functions with an onboard microphone, a reference-tone function for tuning, an instrument input, MIDI input, and other handy tools.",
    imageurl:
      "https://media.guitarcenter.com/is/image/MMGS7/213017000000000-00-2000x2000.jpg",
    categoryName: "Accessories",
    condition: "Used",
    inventory: 1,
    price: 99,
  },
  {
    name: "Musician's Gear Guitar Stand",
    description:
      "Made to exacting specs with soft black neoprene rubber tubing to protect guitar. Folds up for easy transport. Not for nitrocellulose-finish guitars.",
    imageurl:
      "https://target.scene7.com/is/image/Target/GUEST_6560a448-880f-4dea-b37c-e397baf5a8be?fmt=webp&wid=1400&qlt=80",
    categoryName: "Accessories",
    condition: "Used",
    inventory: 1,
    price: 8,
  },
];

module.exports = { products };
