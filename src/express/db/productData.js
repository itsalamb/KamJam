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
  {
    name: "Yamaha Stage Custom Birch 5pc Drum Shell Pack",
    description:
      "The ultimate in tone and value for more than 30 years, the Stage Custom Birch series is great for the beginner or the working professional. The shell is a key factor in a drum's ability to 'rumble', or resonate. Accordingly, the Stage Custom employs 100% birch - a classic in the realm of high-class drum kits. With its beautiful high-gloss lacquer finish and six-ply structure, the Stage Custom Birch accurately conveys the vibrations produced at the impact surface, achieving performance that overwhelms anything in its class.",
    imageurl:
      "https://img.favpng.com/2/15/20/yamaha-stage-custom-birch-yamaha-drums-yamaha-corporation-png-favpng-54iCADnn6YSq2WC8CEn5tzZLS.jpg",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 709,
  },
  {
    name: "Alesis Nitro Mesh Electronic Drum Set",
    description:
      "The latest installment in Alesis’s value-packed Nitro series of electronic drums, the Alesis Nitro Mesh Kit, features a full set of tunable mesh drumheads to deliver a custom playing experience — a rare feat for an electric drum kit at this price point. Forty ready-made drum kits and 385 customizable drum/cymbal sounds, along with 60 play-along backing tracks and an aux input for mobile devices, make the Alesis Nitro Mesh Kit an excellent practice tool and the ultimate low-volume jamming solution. All drum stands, pedals, hardware, cables — even drumsticks — are included to have you set up and drumming in no time. Other highlights of the Alesis Nitro Mesh Kit include virtual instrument compatibility via USB and MIDI ports and a dual-zone snare pad with separate head and rim zones.",
    imageurl:
      "https://www.percussionsource.com/product/image/medium/spc47182_0.png",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 379,
  },
  {
    name: "Alesis Drums Command Mesh Kit",
    description:
      'The Command Mesh Kit features all mesh-head pads that deliver an authentic drumming experience. This kit includes an 8"mesh kick with pedal, a 10" dual-zone mesh snare drum, and three 8" dual-zone mesh toms. The set also features a 10" ride cymbal with choke, a 10" crash with choke, and a 10" hi-hat with foot pedal. The included Command Advanced Drum Module features 74 drum kits (54 preset, 20 user) with 671 sounds. You can build a custom kit from your own sounds by loading them via a USB thumb drive. Plus, with 60 play-along tracks and a built-in performance recorder, you will have an endless source of fun and creativity. All of this mounts to a premium 4-post chrome rack with non-slip clamps, providing a durable foundation that is easy to set up and move.',
    imageurl:
      "https://alesis.com/images/uploads/product-overview-images/CommandMeshKit_Ortho_web_01.png",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 799,
  },
  {
    name: 'Mapex Storm 20" Deep Black Drum-Set',
    description:
    "The Mapex-Storm series offers complete sets for the first-time player. But it is also suitable for the performing drummer who needs a second drum set that is easy to transport, easy to assemble and has a very good sound. The Mapex-Storm series, with the boilers made of poplar wood, is equipped with the Mapex SONIClear™ and therefore easy to tune. It gives the drums a lot of expression and sound at the same time. The bass drums deliver a powerful bass, while the small toms provide attack and clarity. All of the hardware in the Mapex-Storm series is double-braced and, together with the drums, offers one of the best guarantees in the industry",
    imageurl:
      "https://sc1.musik-produktiv.com/pic-010096310xl/mapex-storm-20-deep-black-drum-set.jpg",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 759,
  },
  {
    name: 'Vintage Singerland',
    description:
    "1970's Slingerland Player's Kit with original cases & Tama snare drum. Replaced front kick drum legs with Ludwig legs. Replaced cymbal holders on bass drum with DW holders. Replaced lug screws & washers on bass drum. Plays excellent.  Heads are in excellent shape.",
    imageurl:
      "https://3.bp.blogspot.com/-v19tgVQcIhA/U7xslidx8DI/AAAAAAAAAc4/yzYxy27mxXA/s1600/Slingerland+front+view+3.png",
    categoryName: "Drums",
    condition: "Used",
    inventory: 1,
    price: 1500,
  },
  {
    name: 'Ludwig Vistalite 1970s clear acrylic',
    description:
    "This Used 70's Era Ludwig Clear Vistalite Drum Set (UL4PCVC) has acrylic shells with triple flanged hoops. This Ludwig Drum Set features internal dampners on both batter and resonant heads, 2-cymbal mount brackets in the kickdrum, single sided large classic lugs in 6 lug configurations on the rack toms, an 8 lug configurtion on the floor tom, and a 10 lug configuration on the kick, and the set comes included with tom arms and floor tom legs. The kit displays chrome hardware, a clear acrylic finish, and the blue and olive ludgwig badge.",
    imageurl:
      "https://images.reverb.com/image/upload/s--Lv_tLgzB--/f_auto,t_large/v1626917962/xnzigndavpdhmjimhbh5.jpg",
    categoryName: "Drums",
    condition: "Used",
    inventory: 1,
    price: 3000,
  },
  {
    name: 'TAMA Starclassic Walnut Birch Molten Brown Burst 3 piece WBS32RZS MBR Kit',
    description:
    "The evolution of Starclassic from maple, birch, bubinga, birch/bubinga continues, and now - after intense analysis, rigorous research, development and product testing - TAMA has arrived at the latest Starclassic modern development, Starclassic Walnut/Birch.TAMA discovered the perfect ratio of walnut to birch that produced a superior quality of low-to-mid frequency warmth that perfectly complemented the clear attack and higher frequency projection of birch. The sound is familiar, but distinctively different from TAMA sounds of the past.",
    imageurl:
      "https://images.reverb.com/image/upload/s--ZjyJr00u--/f_auto,t_large/v1639521922/ngb685txwqisrfpvfrlu.jpg",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 1499,
  },
  {
    name: 'Woods Custom Drums 12/14/20 Maple/Poplar/Maple Wood Hoop Drum Set 2021',
    description:
    "Proudly made in Canada, Woods Custom Drums feature in-house drum shells and reinforcement rings from premium quality materials. Jeff Woods prefers to make his shells the classic way: thin and resonant with rerings for focus and added rigidity. Every fine detail embodies handmade, hand-selected, expertly crafted quality.",
    imageurl:
      "https://images.reverb.com/image/upload/s--jAlRDcbs--/f_auto,t_large/v1639515194/zj5ywrnsqskuttxphqjm.jpg",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 2700,
  },
  {
    name: 'Ludwig Breakbeats by Questlove 4pc Shell Pack',
    description:
    "Take your drums anywhere with Ludwig's Breakbeats. Designed with help from Questlove, this shell kit is perfect for drummers without a lot of room to spare.",
    imageurl:
      "https://images.reverb.com/image/upload/s--1xg-ZYUI--/f_auto,t_large/v1538594353/ujeonuytzfstdjrhvhbt.jpg",
    categoryName: "Drums",
    condition: "New",
    inventory: 1,
    price: 399,
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
  {
    name: "Stentor 1500-4/4 Student II Violin Outfit- Size 4/4",
    description:
      "Hand crafted with fine-grained solid spruce top, solid maple back and sides, inlaid purfling, full ebony fittings, hardwood chin rest, super sensitive red label strings, alloy tailpiece with four string adjusters, nylon tailpiece loop. polished warm brown laquer finish. outfits include octagonal wood horsehair bow with ebony frog, lightweight canvas covered case with instrument blanket and exterior shoulder rest pocket(violin/viola) or padded backpack bag (cello/bass)",
    imageurl:
      "https://images.reverb.com/image/upload/s--JwF-71S8--/a_exif,c_thumb,f_auto,fl_progressive,g_south,h_296,q_auto:eco,w_296/v1462130543/l4lpfldfiebf0zrxjbvq.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 195,
  },
  {
    name: "Gemeinhardt 2SP Artisan Student Flute with NG1 Headjoint",
    description:
      "The Gemeinhardt 2SP student flute has been the standard and reliable choice for student flutists for decades. The 2SP features the classic J1 headjoint, plateau keys, offset G, C footjoint, and durable sterling silver plating.",
    imageurl:
      "https://images.reverb.com/image/upload/s--43Q215Oi--/f_auto,t_large/v1609197582/tpnirizttuw0ihknjfws.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 479,
  },
  {
    name: "Selmer 1492B Student Oboe",
    description:
      "Featuring a high-impact plastic body, the 1492 is great for the beginning oboist. The silver plated, basic conservatory key system with newly designed French arms is fluid, light to the touch and easily maintained. The addition of highly contoured cork pads make for a student level oboe with response like no other. Range to low B.",
    imageurl:
      "https://images.reverb.com/image/upload/s--LTAl4mCU--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_1600,q_80,w_1600/v1503034732/sqm3veh6on5xbezov2nv.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 2200,
  },
  {
    name: "Yamaha Ysl354 Standard Trombone",
    description:
      "Yamaha standard trombones have laser fused pluzuma welded bells for continuous, even bell vibrations. The inner slide is drawn from chrome-plated nickel-silver for better durability and response. The outer slide is one piece drawn brass for accurate diameter and better resonance. Yamaha's unique slide lock design safely locks the slide in place.",
    imageurl:
      "https://images.reverb.com/image/upload/s--e1AWtoil--/f_auto,t_large/v1519753637/whpvrjzqa8vteecmjeyr.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 1428,
  },
  {
    name: "Yamaha YEP-321S Bb 4-valve Euphonium - Silver Plated",
    description:
      "Get Rich, Bold Tones With The Yamaha YEP-321S B-Flat 4-valve Euphonium,The Yamaha YEP-321S Euphonium Is A Responsive Horn Perfect For The Beginning Student Player. The 321 features a strong warm tone, and is easy to play, with accurate intonation.",
    imageurl:
      "https://images.reverb.com/image/upload/s--qiPRan1P--/f_auto,t_large/v1590603577/qaukfa8noxxervwqqlua.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 2909,
  },
  {
    name: 'Knilling Sebastian 15.5" Viola Outfit',
    description:
      'Sebastian instruments are notable for their exceptional construction, seasoned tonewoods, quality ebony fittings, and an attractive yet durable finish. The complete outfit includes shaped case with zippered cover and wood bow with genuine horsehair. The 15.5" body is the perfect "one-size-fits-all".',
    imageurl:
      "https://images.reverb.com/image/upload/s--cKziMQMY--/f_auto,t_large/v1637697237/kahdcqf8wcr6zjs5darp.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 399,
  },
  {
    name: 'Scherl & Roth Model R66E3 3/4 Size Upright Bass',
    description:
      "Here's a brand new Scherl & Roth 3/4 size upright bass. Please note that this listing includes bass only - no case or strings with this one.. A great smaller bass with a lot of power!",
    imageurl:
      "https://images.reverb.com/image/upload/s--M242cijT--/f_auto,t_large/v1636991254/a89gqdlh4bgchztbfkqo.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 2249,
  },
  {
    name: "Holton Model H179 'Farkas' Professional Double French Horn",
    description:
      "Holton horns offer an alternative in design that creates a great experience for the young or advanced players. This Farkas model offers independent tuning for convenience allowing the player to tune the Bb side of the horn separately from the F side.",
    imageurl:
      "https://images.reverb.com/image/upload/s--lesSvPQl--/f_auto,t_large/v1620759679/qkmxjvwbgub0ukmubgyd.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 5059,
  },
  {
    name: "Yamaha YBB-641 BBb Professional Rotary Tuba",
    description:
      "The 641 professional BBb tuba features a rotary valve configuration for a traditional Teutonic sound with the kind of precise intonation and easy playability only made possible by modern engineering expertise. It is characterized by a warm dark sound with an abundance of tonal colors.",
    imageurl:
      "https://images.reverb.com/image/upload/s--KqJT6Icv--/f_auto,t_large/v1617206917/fkf0thdxrhptglasplep.jpg",
    categoryName: "Band",
    condition: "New",
    inventory: 1,
    price: 10443,
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
  {
    name: "Sequential Take 5 Compact Five-Voice Poly Synth Synthesizer Keyboard",
    description: "A full-featured subtractive synthesizer, the Take 5 sports two VCOs and a sub oscillator per voice, a classic 4-pole, resonant analog filter from the Prophet-5 Rev 4 design, 44 full-size keys, and a premium Fatar keybed. Its clever key-split feature gives players access to a wider playable range than many other compact synths by enabling players to divide the 3.5 octave keyboard into two separate performance zones. Dual Digital effects and a dedicated overdrive, continuously variable wave shaping, and front-panel access to analog FM ensure the Take 5 can cover a wide range of sonic territory, from vintage to modern.",
    imageurl:
      "https://images.reverb.com/image/upload/s---CyJr1dK--/f_auto,t_large/v1630035057/rtolilz2qo4lraltbnt9.jpg",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 1499,
  },
  {
    name: "Waldorf M Microwave Inspired Wavetable Desktop Synth",
    description: "With M, we are musically returning to our roots by bringing back classic Microwave and ‘modern’ Microwave II tone generation as a new-generation classic hybrid wavetable synthesizer with an analogue lowpass 24 dB/Oct VCF — SSI 2144 Improved Ladder Type — with resonance and analogue saturation feature, true stereo analogue VCA with panning option, and much more to explore in a desktop-friendly form factor featuring a wide range of unique sounds. Plentiful presets — totalling 2,048 sound programs (divided into 16 banks, each with 128 sounds) — professionally programmed by world- renowned sound designers also include all of the classic Microwave sound sets, such as MW1 Factory Sound Set, MW1 Soundpool 1-5, the fat-sounding Analogue and Bassco, as well as PPG Wave 2.3 sounds cleverly converted for the original Microwave. Moreover, it also features freshly-programmed sounds utilising M’s myriad new features — from true hard Sync (when working in its Modern Microwave II/XT mode) to the ARP (arpeggiator) and MIDI-syncable global LFO (Low Frequency Oscillator). ",
    imageurl:
      "https://images.reverb.com/image/upload/s--6vGmEu1_--/f_auto,t_large/v1633471407/uesbpabcj5hdxgmmcgxe.jpg",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 2499,
  },
  {
    name: "Novation Circuit Tracks Standalone Groovebox with Synths, Drums and Sequencer",
    description: "Circuit Tracks in an all-in-one studio with two synth tracks, two MIDI tracks and four drum tracks: everything you need to create and perform music. Designed for electronic and dance music producers, the agile groovebox lets you lose yourself in a hands-on production workflow. Let your creativity thrive with the acclaimed, hands-on sequencer, with which you can create 32-step patterns, chainable for up to 256 steps sequences per track. Go off-grid with microtiming, and keep your music evolving with probability and pattern mutate. ",
    imageurl:
      "https://images.reverb.com/image/upload/s--AcrCXbAq--/f_auto,t_large/v1618343863/fkjcjxop4jtbafu3uc9q.jpg",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 399,
  },
  {
    name: "Yamaha REFACE-CP reface CP 37-Key Electric Piano Synthesizer",
    description: "Yamaha's reface series of mobile mini keyboards offer recreations of legendary Yamaha keyboards, in compact 37-key form factors. Thanks to their small size, the reface keyboards are easy to grab and take with you on the road so you're ready whenever inspiration strikes. Plus, reface keyboards feature Soundmondo integration, allowing you to discover, connect, and share reface voices with the world.",
    imageurl:
      "https://images.reverb.com/image/upload/s--R9XXtWYq--/f_auto,t_large/v1474660223/snar6fjhtzkmvukrdwje.jpg",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 379,
  },
  {
    name: "Schiller Performance Frankfurt Upright 46S Upright Piano – Ebony Satin",
    description: "Professional Upright – All of the raw materials are perfectly selected and produced. Extended length and full leverage piano action keys with BASF finish. Powerful yet compact design with a warm and clear European tone.This piano has Roslau Blue Label Strings, Made in Germany, and German VGF Felt in which helps project a full and powerfull bass, plus a crisp treble sound.This instrument incorporates a Siberian Sitka Spruce Sounding Board.. German Roslau Strings, German VGF Felt, a Friedrich Action™ and a High Specific Gravity Rim which allows the piano to emit a beautiful singing sound.",
    imageurl:
      "https://images.reverb.com/image/upload/s--FIKrmKZP--/f_auto,t_supersize/v1631540667/ybbryr2rft2mrqqhv9aw.jpg",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 3885,
  },
  {
    name: "Schiller Serenity Grand Piano Mahogany Polish",
    description: "A piano built with the highest quality during every production step. Big projection from this 5’8″ grand and an increased string length along with a Siberian Spruce sounding board make for effortless playing. Great for larger rooms and worship settings.This instrument incorporates a Siberian Sitka Spruce Sounding Board.. German Roslau Strings, German VGF Felt, a Friedrich Action™ and a High Specific Gravity Rim which allows the piano to emit a beautiful singing sound. ",
    imageurl:
      "https://images.reverb.com/image/upload/s--n0D1bi78--/f_auto,t_large/v1631513922/sakbc7vcurmweitewtxt.jpg",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 7485,
  },
  {
    name: "Behringer 2600 Semi-Modular Analog Synthesizer",
    description: "Few synthesizers are as celebrated as the original 2600, and now Behringer has brought the venerable semi-modular workhorse to the masses in an affordable 8U rackmountable format. Teeming with vintage vibe and old-school analog flair, the Behringer 2600 leans into its normalled signal path and patch-point architecture to provide intrepid synthesists with a powerful sound creation platform. Whether you’re chasing classic synth sounds or concocting future-facing musical manifestations, the Behringer 2600 arms you with a wealth of audio design tools, including three beefy VCOs, a multimode VCF, mountains of modulation, and inexhaustible routing options. With 78 faders and switches, 93 patch points, and Eurorack compatibility, the Behringer 2600 has challenged synthesists at Sweetwater to tap out its creative potential. So far, we can’t! Totally authentic and absolutely absorbing, the Behringer 2600 is a sonic wonderland for analog aficionados and modular marauders alike!",
    imageurl:
      "https://images.reverb.com/image/upload/s--zKje6dD4--/f_auto,t_large/v1629987105/fstqhjbzkeupkxjycxlg.png",
    categoryName: "Keyboards",
    condition: "New",
    inventory: 1,
    price: 706,
  },
  {
    name: "Novation Launchpad MIDI Controller mkII",
    description: "Launchpad X is the essential 64-pad MIDI grid controller for Ableton Live. It gives you everything you need to make music. Launch, play and perform your sounds and build your tracks using the large, super-sensitive RGB pads, dynamic note and scale modes, and mixer controls.",
    imageurl:
      "https://images.reverb.com/image/upload/s--kOYEg8k9--/f_auto,t_large/v1639425612/ksjdjrm8aktvvxtdlcyp.jpg",
    categoryName: "Keyboards",
    condition: "Used",
    inventory: 1,
    price: 45,
  },
  {
    name: "Wurlitzer 206A",
    description: "Wurlitzer 206A in very nice cosmetic, fully functional conditionaction feels fantastic and the speakers sound massiveplays wonderfullya couple tears along the back",
    imageurl:
      "https://images.reverb.com/image/upload/s--r1E7K8rv--/f_auto,t_large/v1639516217/jivrgqdvwczxmxadi6sf.jpg",
    categoryName: "Keyboards",
    condition: "Used",
    inventory: 1,
    price: 4000,
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
  {
    name: "Ernie Ball 2221 Regular Slinky Nickel Wound Guitar Strings - .010-.046",
    description:
      "Ernie Ball Nickel Wound Electric Guitar Strings are made from nickel plated steel wire wrapped around tin plated hex shaped steel core wire. The plain strings are made of specially tempered tin plated high carbon steel producing a well balanced tone for your guitar. Gauges .010, .013, .017, .026, .036, .046",
    imageurl:
      "https://images.reverb.com/image/upload/s--xZPIFvw7--/f_auto,t_large/v1586538813/ksgt1yhxwxu0x1ve9eno.jpg",
    categoryName: "Accessories",
    condition: "New",
    inventory: 100,
    price: 7,
  },
  {
    name: "Ernie Ball Super Slinky Nickel Wound Set, .009 - .042",
    description:
      "Ernie Ball Super Slinky Electric Strings are played by Jimmy Page, Jeff Beck, and Angus Young. These strings are precision manufactured to the highest standards and most exacting specifications to ensure consistency, optimum performance, and long life. Super Slinky wound strings are made from nickel plated steel wire wrapped around a hex shaped steel core wire.  The plain strings are made of specially tempered tin plated high carbon steel; producing a well balanced tone for your guitar. Gauges .009 .011 .016 .024w .032 .042. Part number 2223.",
    imageurl:
      "https://images.reverb.com/image/upload/s--kiL3TEqq--/f_auto,t_large/v1593029607/uuxosn0vz1lxutwj0qsb.jpg",
    categoryName: "Accessories",
    condition: "New",
    inventory: 100,
    price: 7,
  },
  {
    name: "Tama PC900S Iron Cobra Single Pedal Hard Case",
    description:
      "You know what pedals go through night after night. After being stomped on over and over, they get thrown in bags and roadcases where there's more hard rock and roll than the gig itself. That's why precision instruments like our Iron Cobras come with a specially designed protective carrying case. It's amazing no one thought of it before.PC900S for Iron Cobra Single Pedal",
    imageurl:
      "https://images.reverb.com/image/upload/s--P6HYZcJF--/f_auto,t_large/v1639542903/q7phk0pzbj5amkdi46ho.jpg",
    categoryName: "Accessories",
    condition: "Used",
    inventory: 1,
    price: 35,
  },
  {
    name: "RTOM Moongel Damper Pads - Pack of 6 - Blue",
    description:
      "When only the most effective means of controlling a percussion instrument’s sound will do, percussionists turn to the MoonGel Damper Pad.The self-adhesive gel sticks to the surface of drums, cymbals, and most percussion instruments. The possibilities are endless, by simply moving the damper pad around the surface, you can eliminate any unwanted resonance, and obtain the exact sound the situation demands.The damper pad is washable and will retain its stickiness for years of service.The MoonGel Damper Pad is made from a soft non-toxic gel, and is packaged in a durable plastic container. Drummers and sound studios around the world utilize this award-winning product.",
    imageurl:
      "https://images.reverb.com/image/upload/s--yYtsXeON--/f_auto,t_large/v1493143438/zvshqqexgud7l8kvmg0v.jpg",
    categoryName: "Accessories",
    condition: "New",
    inventory: 100,
    price: 8,
  },
  {
    name: "Vic Firth American Classic 5A Wood Tip Natural",
    description:
      'Vic Firth 5A Drumsticks are the best-selling sticks of all time and are perfect for any drummer. These sticks feature a tear drop tip and medium taper which make them great for all styles of music. Whether you are practicing rudiments on a drum pad, creating videos, performing in a stadium, the Vic Firth 5A is the "Perfect Pair". Vic Firth Drumsticks 5A are in the Vic Firth American Classic series, which are made from high-quality hickory. The hickory is very durable for wood drumsticks yet have a small amount of flex. The Vic Firth factory process produces straight sticks with an optimal moisture content to prevent warping. Whether you are buying a single pair or in bulk by the brick, these sticks are well worth the price.',
    imageurl:
      "https://images.reverb.com/image/upload/s--5EeuUdgf--/f_auto,t_large/v1587285093/k96bzsvfkf9erkepxy47.jpg",
    categoryName: "Accessories",
    condition: "New",
    inventory: 100,
    price: 12,
  },
  {
    name: "Tama RoadPro Boom Cymbals Stands (PAIR) Chrome",
    description:
      "A pair of double-braced Tama Roadpro boom stands. I've polished them already, one has some small rust spots mostly on one leg but apart from that they are very clean. Tama is known for their tough and smartly designed hardware. These can also be used as straight stands.",
    imageurl:
      "https://images.reverb.com/image/upload/s--soegNtXy--/f_auto,t_large/v1639546501/rcz5io6thqujjtgvjyjn.jpg",
    categoryName: "Accessories",
    condition: "Used",
    inventory: 1,
    price: 90,
  },
  {
    name: "Drum Workshop 9000-Series DWCP9000 Single Bass Drum Pedal",
    description:
      '9000 Pedals offer drummers an unequaled combination of speed, feel and power. Since their inception, 9000 Series pedals with Floating Rotor and Infinitely Adjustable Cam technology have given players the flexibility and versatility to take their footwork to the next level. Even so, we thought it was time to make some improvements. Introducing the upgraded 9000 and 9002. Both pedals now feature our all-new Tri-Pivot Toe Clamp System and Non-Slip Rubber Grip Base Plate for increased stability and a stronger connection between the drummer and kick drum. In addition, we added an EZ Adjust Cam to allow drummers to switch from Accelerator® to Turbo®-style sprockets, or anywhere in between, in no time! The same unmistakable feel, playability and artist-approved features, only better.',
    imageurl:
      "https://images.reverb.com/image/upload/s--DT0N0W9J--/f_auto,t_large/v1610584016/fgbrer160v8zdatvo6rv.jpg",
    categoryName: "Accessories",
    condition: "New",
    inventory: 100,
    price: 379,
  },
  {
    name: "Vandoren CR103 Traditional Bb Clarinet Reeds 3 Strength Box of 10",
    description:
      "The most widely played reeds in the world with a superiority proven over the years, these reeds suit all styles of music.Traditionals are known for their excellent response in all registers, allowing a pianissimo attack in even the highest notes.They are also extremely flexible, allowing the legato or staccato execution of large intervals while maintaining a richness of tone that gives body and clarity to the sound, which is a hallmark of Vandoren reeds.",
    imageurl:
      "https://images.reverb.com/image/upload/s--3Lpm7MvJ--/f_auto,t_large/v1478126948/csiheeuc0noyuv1hairs.jpg",
    categoryName: "Accessories",
    condition: "New",
    inventory: 100,
    price: 28,
  },
  {
    name: "University Series 1/2 Size Upright Bass Bag",
    description:
      "Our University Line bass bags feature 12mm high density foam padding, bow pocket, accessory compartments, and multiple double stitched handles for easy carrying. Fits a 1/2 size bass.",
    imageurl:
      "https://images.reverb.com/image/upload/s--d3Hk6NzJ--/f_auto,t_large/v1573171076/bek0mwmfolveiu32l42x.jpg",
    categoryName: "Accessories",
    condition: "New",
    inventory: 100,
    price: 132,
  },
  {
    name: "Bach Standard Series Trumpet Mouthpiece - Silver - 3C",
    description:
      "When selecting a mouthpiece, a brass instrumentalist should choose a solid, compact tone of large volume. A carefully selected Bach mouthpiece can help improve a players embouchure, attack, tonguing and endurance. Bach produces many different models so that each player can find the best mouthpiece for their individual embouchure.",
    imageurl:
      "https://images.reverb.com/image/upload/s--uaRMN_tS--/f_auto,t_large/v1554755373/ddtlbwoiah6gxsfznwth.jpg",
    categoryName: "Accessories",
    condition: "New",
    inventory: 100,
    price: 62,
  },
];

module.exports = { products };
