export type EventType = {
  id: string;
  day: string;
  dayOrder: number;
  date: string;
  time: string;
  endTime?: string;
  name: string;
  artist: string;
  stage: string;
  types: string[];
  sourceText?: string;
  description?: string;
};

export const events: EventType[] = [
  {
    "id": "22-05-16-00-heilig-kreuz-kirche-bitte-um-segen-f-r-das-fest",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "name": "Bitte um Segen für das Fest",
    "artist": "Bitte um Segen für das Fest",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ]
  },
  {
    "id": "22-05-16-00-impact-intro-stage-dj-mishkeen",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "name": "Intro Stage / DJ: Mishkeen",
    "artist": "Intro Stage / DJ: Mishkeen",
    "stage": "IMPACT",
    "types": [
      "Electro",
      "Hip-Hop"
    ],
    "sourceText": "Daytime: R&B / Nighttime: Grime UK Garage"
  },
  {
    "id": "22-05-16-00-rasen-in-aktion-compagnie-noire-machine",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "name": "Compagnie Noire Machine",
    "artist": "Compagnie Noire Machine",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Zirkustheater mit chinesischem Mast, Jonglage und Pantomime",
    "description": "SMILE ist eine herzerwärmende und humorvolle Zirkusperformance ohne Sprache, in dem die Zirkusartist*innen Achille Piot und Theresa Zinser einem umherfliegendem, wandelbaren Lächeln begegnen und sich auf ein gemeinsames Abenteuer mit ihm einlassen."
  },
  {
    "id": "22-05-16-00-shantytown-100-tempelhof",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "endTime": "19:00",
    "name": "100% Tempelhof",
    "artist": "100% Tempelhof",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Infostand bis 19:00"
  },
  {
    "id": "22-05-16-00-shantytown-batik-mit-blumen",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "endTime": "19:00",
    "name": "Batik mit Blumen",
    "artist": "Batik mit Blumen",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop bis 19:00"
  },
  {
    "id": "22-05-16-00-shantytown-bike-stunt-berlin",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "22-05-16-00-shantytown-die-sonderpreis-gewinner-innen-des-landeswettbewerbs-jugend-musiziert-pop-",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "name": "Die Sonderpreis-Gewinner:innen des Landeswettbewerbs Jugend musiziert (Pop)",
    "artist": "Die Sonderpreis-Gewinner:innen des Landeswettbewerbs Jugend musiziert (Pop)",
    "stage": "shantYtown",
    "types": [
      "Latin",
      "Pop"
    ],
    "sourceText": "Beats&Rhymes&Singer&Songwriter",
    "description": "„Lasst Euch überraschen, welche vielversprechenden jungen Talente aus den Kategorien Beats&Rhymes, und Singer/Songwriter Euch auf der shantYtown-Bühne einheizen werden. „"
  },
  {
    "id": "22-05-16-00-shantytown-paint-the-moment",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "endTime": "20:00",
    "name": "Paint The Moment",
    "artist": "Paint The Moment",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop bis 20:00"
  },
  {
    "id": "22-05-16-00-shantytown-sport-connection-berlin",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "endTime": "19:00",
    "name": "Sport Connection Berlin",
    "artist": "Sport Connection Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Infostand & Aktionen bis 19:00"
  },
  {
    "id": "22-05-16-00-shantytown-umsonstladen",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:00",
    "endTime": "19:00",
    "name": "Umsonstladen",
    "artist": "Umsonstladen",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Geben & Nehmen gegen die Wegwerfgesellschaft bis 19:00"
  },
  {
    "id": "22-05-16-30-rasen-in-aktion-company-haa",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:30",
    "name": "Company Haa",
    "artist": "Company Haa",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Tanz im urbanen Raum"
  },
  {
    "id": "22-05-16-30-shantytown-groove-connect",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:30",
    "name": "Groove & Connect",
    "artist": "Groove & Connect",
    "stage": "shantYtown",
    "types": [
      "Hip-Hop",
      "Performance"
    ],
    "sourceText": "Hip-Hop Tanzworkshop mit Lena Zinnen"
  },
  {
    "id": "22-05-16-45-shantytown-seifenblasen-instrumente-bauen-mit-den-bubble-brothers",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "16:45",
    "name": "Seifenblasen-Instrumente bauen mit den Bubble Brothers",
    "artist": "Seifenblasen-Instrumente bauen mit den Bubble Brothers",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop für Groß & Klein"
  },
  {
    "id": "22-05-17-00-klang-plaza-aroeiras",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:00",
    "name": "Aroeiras",
    "artist": "Aroeiras",
    "stage": "Klang Plaza",
    "types": [
      "Brazilian"
    ],
    "sourceText": "Forró, Samba de Coco",
    "description": "Aroeiras spielt brasilianischen Forró und Samba de Coco mit Herz und Seele. Die vier Frauen bringen mit Akkordeon, Perkussion und bezauberndem Gesang ihre diversen kulturellen Einflüsse in ihre Musik ein."
  },
  {
    "id": "22-05-17-00-neue-pumpe-cherry-bandora",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:00",
    "name": "Cherry Bandora",
    "artist": "Cherry Bandora",
    "stage": "Neue Pumpe",
    "types": [
      "Other"
    ],
    "sourceText": "Greek Bouzouki Surf – Psychedelic Oriental Groove"
  },
  {
    "id": "22-05-17-00-rasen-in-aktion-producciones-abismales",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:00",
    "name": "Producciones Abismales",
    "artist": "Producciones Abismales",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Walkact",
    "description": "Zwei Meeresarten treffen aufeinander, die sich unter normalen Umständen niemals begegnet wären. Klimawandel im Ozean? Ja! Leider… Riesige Fischpuppen beginnen eine beispiellose Wanderung. Sind sie sogenannte invasive Arten? Komm und schau es Dir an…"
  },
  {
    "id": "22-05-17-15-impact-dj-maria-jos-",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:15",
    "name": "DJ: Maria José",
    "artist": "DJ: Maria José",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "22-05-17-15-shantytown-bike-stunt-berlin",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:15",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "22-05-17-15-sound-avenue-kira",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:15",
    "name": "Kira",
    "artist": "Kira",
    "stage": "Sound Avenue",
    "types": [
      "Pop"
    ],
    "sourceText": "Pop"
  },
  {
    "id": "22-05-17-30-rasen-in-aktion-compagnie-noire-machine",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:30",
    "name": "Compagnie Noire Machine",
    "artist": "Compagnie Noire Machine",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Zirkustheater mit chinesischem Mast, Jonglage und Pantomime",
    "description": "SMILE ist eine herzerwärmende und humorvolle Zirkusperformance ohne Sprache, in dem die Zirkusartist*innen Achille Piot und Theresa Zinser einem umherfliegendem, wandelbaren Lächeln begegnen und sich auf ein gemeinsames Abenteuer mit ihm einlassen."
  },
  {
    "id": "22-05-17-30-shantytown-feierabend-cumbia",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:30",
    "name": "Feierabend Cumbia",
    "artist": "Feierabend Cumbia",
    "stage": "shantYtown",
    "types": [
      "Latin"
    ],
    "sourceText": "Cumbia"
  },
  {
    "id": "22-05-17-45-sound-avenue-havanna-berlin",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "17:45",
    "name": "Havanna Berlin",
    "artist": "Havanna Berlin",
    "stage": "Sound Avenue",
    "types": [
      "Cuban",
      "Jazz"
    ],
    "sourceText": "Jazz, Rumba"
  },
  {
    "id": "22-05-18-00-heilig-kreuz-kirche-yoga-meditation-f-r-vielfalt",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:00",
    "endTime": "19:00",
    "name": "Yoga & Meditation für Vielfalt",
    "artist": "Yoga & Meditation für Vielfalt",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ],
    "sourceText": "Sigrid Künstner, bis 19:00"
  },
  {
    "id": "22-05-18-00-klang-plaza-wayra-puka",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:00",
    "name": "Wayra Puka",
    "artist": "Wayra Puka",
    "stage": "Klang Plaza",
    "types": [
      "Latin"
    ],
    "sourceText": "Volksmusik aus den Anden",
    "description": "Wayra Puka, gegründet vor 7 Jahren in Berlin, bringt mit 10 Musiker*innen aus Südamerika Andenklänge nach Europa. Eine musikalische Reise von Argentinien bis Kolumbien voller vielfältiger Rhythmen."
  },
  {
    "id": "22-05-18-00-rasen-in-aktion-company-haa",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:00",
    "name": "Company Haa",
    "artist": "Company Haa",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Tanz im urbanen Raum"
  },
  {
    "id": "22-05-18-00-rasen-in-aktion-pirates-of-percussion",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:00",
    "name": "Pirates of Percussion",
    "artist": "Pirates of Percussion",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian",
      "Performance"
    ],
    "sourceText": "Samba-Trommelgruppe",
    "description": "Wir sind eine leidenschaftliche Samba-Trommelgruppe, die auf dem RAW-Gelände beheimatet ist. Kommt vorbei, tanzt und genießt heiße Rhythmen mit einem Kaltgetränk. Wir freuen uns auf Euch!"
  },
  {
    "id": "22-05-18-00-shantytown-0-db-silent-riots",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:00",
    "endTime": "22:30",
    "name": "0 dB Silent Riots",
    "artist": "0 dB Silent Riots",
    "stage": "shantYtown",
    "types": [
      "Electro"
    ],
    "sourceText": "SILENT DISCO auf 3 Kanälen – OPEN DJ DESK bis 22:30"
  },
  {
    "id": "22-05-18-20-impact-js-scotty",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:20",
    "name": "Js. Scotty",
    "artist": "Js. Scotty",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "22-05-18-30-neue-pumpe-baris-manco-tribute-band",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:30",
    "name": "Baris Manco Tribute Band",
    "artist": "Baris Manco Tribute Band",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Folk Rock"
  },
  {
    "id": "22-05-18-30-rasen-in-aktion-producciones-abismales",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:30",
    "name": "Producciones Abismales",
    "artist": "Producciones Abismales",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Walkact",
    "description": "Zwei Meeresarten treffen aufeinander, die sich unter normalen Umständen niemals begegnet wären. Klimawandel im Ozean? Ja! Leider… Riesige Fischpuppen beginnen eine beispiellose Wanderung. Sind sie sogenannte invasive Arten? Komm und schau es Dir an…"
  },
  {
    "id": "22-05-18-50-impact-johnny-kulo",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "18:50",
    "name": "Johnny Kulo",
    "artist": "Johnny Kulo",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "22-05-19-00-rasen-in-aktion-gew-trommelgruppe-wododrums-aus-woltersdorf",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "19:00",
    "name": "GEW Trommelgruppe & Wododrums aus Woltersdorf",
    "artist": "GEW Trommelgruppe & Wododrums aus Woltersdorf",
    "stage": "Rasen in Aktion",
    "types": [
      "Jazz"
    ],
    "description": "Nicht nur für die Demos sind wir in dieser Fusion in der Lage Menschen in unseren rhythmischen Spirit eintauchen zu lassen. Kommt vorbei und lasst es mit uns krachen und ne schöne Partystimmung entstehen lassen."
  },
  {
    "id": "22-05-19-20-impact-meron",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "19:20",
    "name": "Meron",
    "artist": "Meron",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "22-05-19-30-klang-plaza-gabo-naas",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "19:30",
    "name": "Gabo Naas",
    "artist": "Gabo Naas",
    "stage": "Klang Plaza",
    "types": [
      "Cuban",
      "Latin"
    ],
    "sourceText": "Contemporary Latin American Folk",
    "description": "Die Gabo Naas Group nimmt das Publikum mit auf eine musikalische Reise durch Lateinamerika – von Zamba und Huayno bis Candombe, Festejo und Son, modern interpretiert und doch fest in der Tradition verwurzelt."
  },
  {
    "id": "22-05-19-30-shantytown-back-2-body-the-art-of-connection",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "19:30",
    "name": "Back 2 Body – the Art of Connection",
    "artist": "Back 2 Body – the Art of Connection",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Movement Workshop"
  },
  {
    "id": "22-05-19-30-sound-avenue-denim",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "19:30",
    "name": "DENIM",
    "artist": "DENIM",
    "stage": "Sound Avenue",
    "types": [
      "Afro"
    ],
    "sourceText": "Afrofuturismus"
  },
  {
    "id": "22-05-19-50-impact-milli-yap",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "19:50",
    "name": "Milli Yap",
    "artist": "Milli Yap",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "22-05-20-00-neue-pumpe-derdibol",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "20:00",
    "name": "Derdibol",
    "artist": "Derdibol",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Psychedelic-Retro-Pop"
  },
  {
    "id": "22-05-20-00-rasen-in-aktion-sapucaio-no-samba",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "20:00",
    "name": "Sapucaio no Samba",
    "artist": "Sapucaio no Samba",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian",
      "Performance"
    ],
    "sourceText": "Carnaval de Rua",
    "description": "Erlebt die mitreißende Energie des Samba, individuelle Kostüme und spontane Tanz- und Trommelperformances hautnah. Über 100 Tänzerinnen und Trommler aus aller Welt feiern mit euch – kommt vorbei, spürt den Rhythmus und tanzt mit!"
  },
  {
    "id": "22-05-20-00-shantytown-dave-dinger",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "20:00",
    "name": "Dave Dinger",
    "artist": "Dave Dinger",
    "stage": "shantYtown",
    "types": [
      "Electro"
    ],
    "sourceText": "DJ Dinosaur",
    "description": "Techno-Saurier seit der Steinzeit. Alle Genres, keine Regeln, keine Grenzen. Schmelz im Sound – und wenn Dich was stresst: Drop it like a bass! 🦖🔊"
  },
  {
    "id": "22-05-20-10-impact-dj-ticklish",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "20:10",
    "name": "DJ: TICKLISH",
    "artist": "DJ: TICKLISH",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "22-05-20-45-sound-avenue-dj-emo",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "20:45",
    "name": "DJ Emo",
    "artist": "DJ Emo",
    "stage": "Sound Avenue",
    "types": [
      "Afro",
      "Electro"
    ],
    "sourceText": "Afrobeat, Highlife, Rhumba, Soukous, Makossa"
  },
  {
    "id": "22-05-21-00-impact-dj-sosa",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "21:00",
    "endTime": "22:00",
    "name": "DJ: SOSA",
    "artist": "DJ: SOSA",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ],
    "sourceText": "bis 22:00"
  },
  {
    "id": "22-05-21-00-klang-plaza-cayeye",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "21:00",
    "name": "Cayeye",
    "artist": "Cayeye",
    "stage": "Klang Plaza",
    "types": [
      "Salsa",
      "Latin",
      "Performance"
    ],
    "sourceText": "Salsa",
    "description": "Cayeye ist eine 12-köpfige Salsa Brava Band aus Berlin mit 70er-Vibes, lateinamerikanischer Hitze und purer Tanzenergie. Live verschmelzen Klassiker und eigene Arrangements zu Salsa, der das Herz berührt und die Hüften schwingen lässt."
  },
  {
    "id": "22-05-21-00-neue-pumpe-djane-ipek",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "21:00",
    "name": "Djane Ipek",
    "artist": "Djane Ipek",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Türkisch Pop"
  },
  {
    "id": "22-05-22-00-heilig-kreuz-kirche-orgel-nachtmusik-mit-segen-zur-nacht",
    "day": "Freitag",
    "dayOrder": 1,
    "date": "22/05",
    "time": "22:00",
    "name": "Orgel-Nachtmusik mit Segen zur Nacht",
    "artist": "Orgel-Nachtmusik mit Segen zur Nacht",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ],
    "sourceText": "Benno Scheerbarth + Pfarrerin Barbara von Bremen"
  },
  {
    "id": "23-05-12-00-rasen-in-aktion-augustine-otto-mujer-gallina",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "name": "Augustine Otto & Mujer Gallina",
    "artist": "Augustine Otto & Mujer Gallina",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Kinder in allen Größen sind eingeladen",
    "description": "Baut, gestaltet und bemalt mit uns eine Stadt aus Papkartons. Eimerweise Farben werden zur Verfügung gestellt, Ihr könnt loslegen, experimentieren, räumliche Erfahrungen sammeln in eurer City, mit Pinseln und Farbe Spaß haben! Bringt gerne Malkittel mit!"
  },
  {
    "id": "23-05-12-00-rasen-in-aktion-do-it-together",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "name": "do it together",
    "artist": "do it together",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Siebdruck für Groß und Klein"
  },
  {
    "id": "23-05-12-00-rasen-in-aktion-heike-maria-unvorstellbar-clozi-wildner",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "name": "Heike Maria unVORStellBAR & Clozi Wildner",
    "artist": "Heike Maria unVORStellBAR & Clozi Wildner",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Recycling-Kostüme",
    "description": "Wir helfen Euch, ungewöhnliche Fantasiekostüme aus Recyclingmaterialien zu gestalten. Gerne könnt Ihr auch Dinge mitbringen, die Ihr verwenden wollt."
  },
  {
    "id": "23-05-12-00-rasen-in-aktion-hexe-klex",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "name": "Hexe Klex",
    "artist": "Hexe Klex",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Nähstube: Angebot für Kinder",
    "description": "Hexe Klex vermittelt auch den Kleinsten das Nähen mit der Hand, den Größeren erst recht, ganz egal ob mit stumpfer oder spitzer Nadel. Wir gestalten gemeinsam farbenfrohe Mäuse, kleine Fingerpüppchen, Sorgen fressende Monster oder bunte Blumen zum Anstecken."
  },
  {
    "id": "23-05-12-00-rasen-in-aktion-oliver-christa",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "name": "Oliver & Christa",
    "artist": "Oliver & Christa",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Angebot für Kinder",
    "description": "Wir möchten mit Euch jonglieren und lachen: Flowerstick… Diabolo…Teller drehen… Ihr werdet sehen… mit Anleitung zum verstehen… Circus Kultur…ein buntes Treiben… die Fun Art Workers…"
  },
  {
    "id": "23-05-12-00-shantytown-100-tempelhof",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "endTime": "19:00",
    "name": "100% Tempelhof",
    "artist": "100% Tempelhof",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Infostand bis 19:00"
  },
  {
    "id": "23-05-12-00-shantytown-banan-o-rama",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "name": "Banan'O'Rama",
    "artist": "Banan'O'Rama",
    "stage": "shantYtown",
    "types": [
      "Performance"
    ],
    "sourceText": "Interaktive Comedy-Show"
  },
  {
    "id": "23-05-12-00-shantytown-batik-mit-blumen",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "endTime": "19:00",
    "name": "Batik mit Blumen",
    "artist": "Batik mit Blumen",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop bis 19:00"
  },
  {
    "id": "23-05-12-00-shantytown-paint-the-moment",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "endTime": "19:00",
    "name": "Paint The Moment",
    "artist": "Paint The Moment",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop bis 19:00"
  },
  {
    "id": "23-05-12-00-shantytown-sport-connection-berlin",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "endTime": "19:00",
    "name": "Sport Connection Berlin",
    "artist": "Sport Connection Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Infostand & Aktionen bis 19:00"
  },
  {
    "id": "23-05-12-00-shantytown-stadtteilkomitees-berlin",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "endTime": "16:00",
    "name": "Stadtteilkomitees Berlin",
    "artist": "Stadtteilkomitees Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Informationen und Waffeln, Infostand bis 16:00"
  },
  {
    "id": "23-05-12-00-shantytown-umsonstladen",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "endTime": "19:00",
    "name": "Umsonstladen",
    "artist": "Umsonstladen",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Geben & Nehmen gegen die Wegwerfgesellschaft bis 19:00"
  },
  {
    "id": "23-05-12-00-sound-avenue-dj",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:00",
    "name": "DJ",
    "artist": "DJ",
    "stage": "Sound Avenue",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "23-05-12-30-rasen-in-aktion-zakap-s",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:30",
    "name": "Zakapüs",
    "artist": "Zakapüs",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Puppenshow für die ganze Familie",
    "description": "Madame Zakapüs hat seltsame Kreaturen gesammelt. Ein Bestiarium mit Fabelwesen aus aller Welt: ein riesiger Frosch, Geister, singende Skelette, Aliens… Dies ist die Geschichte ihrer Begegnungen mit diesen ungewöhnlichen Geschöpfen."
  },
  {
    "id": "23-05-12-30-shantytown-bike-stunt-berlin",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:30",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "23-05-12-45-shantytown-grupo-chile-berlin-e-v-",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:45",
    "name": "Grupo Chile Berlin e.V.",
    "artist": "Grupo Chile Berlin e.V.",
    "stage": "shantYtown",
    "types": [
      "Performance"
    ],
    "sourceText": "Chilenische Folklore",
    "description": "Grupo Chile zeigt die Vielfalt Chiles durch Tanzen und Inszenierung. Die unterschiedliche Geografie und die ständigen Migrationsbewegungen haben den Charakter Chiles bereichert. Dazu gehören regionale Tänze, die Cueca, die von Tänzern in traditionellen Trachten präsentiert werden."
  },
  {
    "id": "23-05-12-45-shantytown-seifenblasen-instrumente-bauen-mit-den-bubble-brothers",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "12:45",
    "name": "Seifenblasen-Instrumente bauen mit den Bubble Brothers",
    "artist": "Seifenblasen-Instrumente bauen mit den Bubble Brothers",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop für Groß & Klein"
  },
  {
    "id": "23-05-13-00-impact-sonic-breath-with-dongsinne",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:00",
    "name": "{Sonic Breath} with Dongsinne",
    "artist": "{Sonic Breath} with Dongsinne",
    "stage": "IMPACT",
    "types": [
      "Performance"
    ],
    "sourceText": "Singing Bowls & Welcome Meditation"
  },
  {
    "id": "23-05-13-00-impact-perfomance-arts-music-the-space",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:00",
    "name": "Perfomance Arts, Music: The Space",
    "artist": "Perfomance Arts, Music: The Space",
    "stage": "IMPACT",
    "types": [
      "Other"
    ]
  },
  {
    "id": "23-05-13-00-klang-plaza-laura-la-risa-ni-as-y-flores",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:00",
    "name": "Laura la Risa Niñas y Flores",
    "artist": "Laura la Risa Niñas y Flores",
    "stage": "Klang Plaza",
    "types": [
      "Performance"
    ],
    "sourceText": "Flamenco-Tanz mit Kindergruppen",
    "description": "Laura la Risa – Flamencotänzerin, Choreografin und Pionierin des Kinderflamencos in Berlin. Seit 1996 beim KdK, steht sie für Inklusion, kulturelle Vielfalt und künstlerisch-pädagogische Projekte in Berlin."
  },
  {
    "id": "23-05-13-00-neue-pumpe-sevtap-engin",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:00",
    "name": "Sevtap & Engin",
    "artist": "Sevtap & Engin",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "akkustischer Pop / Rock"
  },
  {
    "id": "23-05-13-00-rasen-in-aktion-company-haa",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:00",
    "name": "Company Haa",
    "artist": "Company Haa",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Tanz im urbanen Raum"
  },
  {
    "id": "23-05-13-00-sound-avenue-new-yulu",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:00",
    "name": "New Yulu",
    "artist": "New Yulu",
    "stage": "Sound Avenue",
    "types": [
      "Latin"
    ],
    "sourceText": "Latin, Folkore"
  },
  {
    "id": "23-05-13-30-rasen-in-aktion-berliner-grossfiguren",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:30",
    "name": "Berliner Grossfiguren",
    "artist": "Berliner Grossfiguren",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Impro-Figurentheater",
    "description": "Wo kommen wir her? Wo gehen wir hin? Spaghetti oder Kekse? Den wirklich wichtigen Fragen im Leben ist Professor Wuschel mit Euch auf der Spur…"
  },
  {
    "id": "23-05-13-30-shantytown-100-tempelhofer-feld-und-berliner-akteure",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:30",
    "name": "100% Tempelhofer Feld und Berliner Akteure",
    "artist": "100% Tempelhofer Feld und Berliner Akteure",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Podiumsdiskussion",
    "description": "Das Tempelhofer Feld ist ein Symbol für das Wohl und das Mitspracherecht der Menschen. Wir müssen unsere Bedürfnisse gegen die Macht des Kapitals und deren Handlanger in der Politik verteidigen."
  },
  {
    "id": "23-05-13-45-sound-avenue-bando-berlin",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "13:45",
    "name": "Bando Berlin",
    "artist": "Bando Berlin",
    "stage": "Sound Avenue",
    "types": [
      "Other"
    ],
    "sourceText": "Hardcore Percussion"
  },
  {
    "id": "23-05-14-00-heilig-kreuz-kirche-kirchenf-hrung",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:00",
    "name": "Kirchenführung",
    "artist": "Kirchenführung",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ],
    "sourceText": "Marita Schmieder"
  },
  {
    "id": "23-05-14-00-impact-dj-chucky",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:00",
    "name": "DJ: Chucky",
    "artist": "DJ: Chucky",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "23-05-14-00-rasen-in-aktion-zakap-s",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:00",
    "name": "Zakapüs",
    "artist": "Zakapüs",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Puppenshow für die ganze Familie",
    "description": "Madame Zakapüs hat seltsame Kreaturen gesammelt. Ein Bestiarium mit Fabelwesen aus aller Welt: ein riesiger Frosch, Geister, singende Skelette, Aliens… Dies ist die Geschichte ihrer Begegnungen mit diesen ungewöhnlichen Geschöpfen."
  },
  {
    "id": "23-05-14-00-shantytown-i-birichini",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:00",
    "name": "i BiRiCHiNi",
    "artist": "i BiRiCHiNi",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Italienischer Kinderchor",
    "description": "Der Kinderchor i BiRiCHiNi- die kleinen Strolchensingt mit spontaner Freude am gemeinsamen Musikmachen Lieder aus dem unerschöpflichen Fundus italienischer Musik. Ltg. RACHELINA, mit Bigband FLINSTONES."
  },
  {
    "id": "23-05-14-30-klang-plaza-palo-santo",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:30",
    "name": "Palo Santo",
    "artist": "Palo Santo",
    "stage": "Klang Plaza",
    "types": [
      "Afro",
      "Latin"
    ],
    "sourceText": "Bullerengue, Afro-Colombian, Cumbia",
    "description": "Palo Santo fängt den Spirit der kolumbianischen Küste ein. Mit Trommeln, Gaita, Bass und Piano bringen sie die Hitze und Energie des Karnevals direkt auf die Bühne."
  },
  {
    "id": "23-05-14-30-neue-pumpe-june-may-july",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:30",
    "name": "June May July",
    "artist": "June May July",
    "stage": "Neue Pumpe",
    "types": [
      "Other"
    ],
    "sourceText": "Psych-Funk"
  },
  {
    "id": "23-05-14-30-rasen-in-aktion-company-haa",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:30",
    "name": "Company Haa",
    "artist": "Company Haa",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Tanz im urbanen Raum"
  },
  {
    "id": "23-05-14-30-shantytown-bike-stunt-berlin",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:30",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "23-05-14-45-sound-avenue-tiliboo",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "14:45",
    "name": "Tiliboo",
    "artist": "Tiliboo",
    "stage": "Sound Avenue",
    "types": [
      "Afro",
      "Jazz"
    ],
    "sourceText": "Fusion-Sound der westafrikanische Mandinka-Kultur"
  },
  {
    "id": "23-05-15-00-heilig-kreuz-kirche-ohrpiraten",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "15:00",
    "name": "Ohrpiraten",
    "artist": "Ohrpiraten",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Other"
    ],
    "sourceText": "musikalische Weltreise"
  },
  {
    "id": "23-05-15-00-impact-dj-jewelz",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "15:00",
    "name": "DJ: Jewelz",
    "artist": "DJ: Jewelz",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "23-05-15-00-rasen-in-aktion-compagnie-noire-machine",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "15:00",
    "name": "Compagnie Noire Machine",
    "artist": "Compagnie Noire Machine",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Zirkustheater mit chinesischem Mast, Jonglage und Pantomime",
    "description": "SMILE ist eine herzerwärmende und humorvolle Zirkusperformance ohne Sprache, in dem die Zirkusartist*innen Achille Piot und Theresa Zinser einem umherfliegendem, wandelbaren Lächeln begegnen und sich auf ein gemeinsames Abenteuer mit ihm einlassen."
  },
  {
    "id": "23-05-15-00-shantytown-wayra-puka",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "15:00",
    "name": "Wayra Puka",
    "artist": "Wayra Puka",
    "stage": "shantYtown",
    "types": [
      "Pop"
    ],
    "sourceText": "Popular Musik aus der Anden",
    "description": "Wayra Puka reist musikalisch durch das gesamte Andengebiet und trägt im Gepäck verschiedene Genres und Rhythmen. Wayra Puka singt zur Sonne, Pachamama & Mond, zur Gerechtigkeit & Liebe, zum Wind, Freiheit & Hoffnung. Die Musik ist dabei so repräsentativ und revolutionär wie die Andenfolklore."
  },
  {
    "id": "23-05-15-30-rasen-in-aktion-berliner-grossfiguren",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "15:30",
    "name": "Berliner Grossfiguren",
    "artist": "Berliner Grossfiguren",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Impro-Figurentheater",
    "description": "Wo kommen wir her? Wo gehen wir hin? Spaghetti oder Kekse? Den wirklich wichtigen Fragen im Leben ist Professor Wuschel mit Euch auf der Spur…"
  },
  {
    "id": "23-05-15-45-neue-pumpe-ali-g-rmez",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "15:45",
    "name": "Ali Görmez",
    "artist": "Ali Görmez",
    "stage": "Neue Pumpe",
    "types": [
      "Electro",
      "Pop"
    ],
    "sourceText": "Türkischer Pop mit elektronischen Elementen"
  },
  {
    "id": "23-05-16-00-impact-dj-malengo",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "16:00",
    "name": "DJ: Malengo",
    "artist": "DJ: Malengo",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "23-05-16-00-klang-plaza-antajayu",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "16:00",
    "name": "Antajayu",
    "artist": "Antajayu",
    "stage": "Klang Plaza",
    "types": [
      "Latin",
      "Jazz",
      "Pop"
    ],
    "sourceText": "Andine Musik",
    "description": "Zwischen den Anden und Neukölln: Antajayú – mit Wurzeln in Chile und Guatemala – verbindet traditionelle andine Klänge mit Rock, Jazz und eigenen Kompositionen. Musik, die Welten verbindet."
  },
  {
    "id": "23-05-16-00-rasen-in-aktion-grotest-maru-cosmo",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "16:00",
    "name": "Grotest Maru: COSMO",
    "artist": "Grotest Maru: COSMO",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Mobiles, interaktives Straßentheater – Walk Act"
  },
  {
    "id": "23-05-16-00-shantytown-daiana-lou",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "16:00",
    "name": "Daiana Lou",
    "artist": "Daiana Lou",
    "stage": "shantYtown",
    "types": [
      "Pop"
    ],
    "sourceText": "Alternative Rock-Art Pop",
    "description": "Ein italienisch-berlinisches Alternative-Rock-Duo, das die raue Berliner Straßenatmosphäre mit italienischem Soul verbindet. Eine Mischung aus ätherischen Klängen, kraftvollen Beats und explosiver Energie."
  },
  {
    "id": "23-05-16-15-sound-avenue-ruffin-nikon-loola-band",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "16:15",
    "name": "Ruffin Nikon Loola & Band",
    "artist": "Ruffin Nikon Loola & Band",
    "stage": "Sound Avenue",
    "types": [
      "Cuban",
      "Afro",
      "Reggae"
    ],
    "sourceText": "High-Life, Soukouss, Rumba, Reggae"
  },
  {
    "id": "23-05-16-30-heilig-kreuz-kirche-caleo-gitarrenduo",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "16:30",
    "name": "CALEO / Gitarrenduo",
    "artist": "CALEO / Gitarrenduo",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Latin",
      "Jazz",
      "Pop"
    ],
    "sourceText": "Jazz, Rock, Blues und Latin"
  },
  {
    "id": "23-05-16-30-rasen-in-aktion-compagnie-noire-machine",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "16:30",
    "name": "Compagnie Noire Machine",
    "artist": "Compagnie Noire Machine",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Zirkustheater mit chinesischem Mast, Jonglage und Pantomime",
    "description": "SMILE ist eine herzerwärmende und humorvolle Zirkusperformance ohne Sprache, in dem die Zirkusartist*innen Achille Piot und Theresa Zinser einem umherfliegendem, wandelbaren Lächeln begegnen und sich auf ein gemeinsames Abenteuer mit ihm einlassen."
  },
  {
    "id": "23-05-17-00-impact-dj-yung-feels",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "17:00",
    "name": "DJ: Yung Feels",
    "artist": "DJ: Yung Feels",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "23-05-17-00-neue-pumpe-kahraman-kilinc",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "17:00",
    "name": "Kahraman Kilinc",
    "artist": "Kahraman Kilinc",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Türkische Indie Pop / Rock"
  },
  {
    "id": "23-05-17-00-rasen-in-aktion-candumbe",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "17:00",
    "name": "Candumbe",
    "artist": "Candumbe",
    "stage": "Rasen in Aktion",
    "types": [
      "Afro"
    ],
    "sourceText": "Afro-uruguayischer Candombe & afro-chilenischer Tumbe",
    "description": "CANDUMBE vereint afro-uruguayischen Candombe und afro-chilenischen Tumbe in einer kraftvollen musikalischen und tänzerischen Begegnung. Trommeln, Bewegung und kollektive Energie schaffen einen interkulturellen Raum, der afrikanisches Erbe im Cono Sur lebendig macht"
  },
  {
    "id": "23-05-17-00-rasen-in-aktion-grotest-maru-cosmo",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "17:00",
    "name": "Grotest Maru: COSMO",
    "artist": "Grotest Maru: COSMO",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Mobiles, interaktives Straßentheater – Walk Act"
  },
  {
    "id": "23-05-17-00-shantytown-bike-stunt-berlin",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "17:00",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "23-05-17-30-klang-plaza-feu-marinho",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "17:30",
    "name": "Feu Marinho",
    "artist": "Feu Marinho",
    "stage": "Klang Plaza",
    "types": [
      "Brazilian",
      "Jazz"
    ],
    "sourceText": "Brasilianischer Jazz mit östlichen Einflüssen",
    "description": "Feu Marinho Quintett (BR) verbindet brasilianische Musik, Jazz und östliche Einflüsse. In „Volume“, seinem kommenden Album 2026, präsentiert er originalen Sound, geprägt von internationalen Kollaborationen und Auftritten in Europa, Asien und Afrika."
  },
  {
    "id": "23-05-17-30-shantytown-altes-haus",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "17:30",
    "name": "ALTES HAUS",
    "artist": "ALTES HAUS",
    "stage": "shantYtown",
    "types": [
      "Electro",
      "Performance"
    ],
    "sourceText": "Elektro-House-Punk",
    "description": "Maxwell Smart vom Oldschool-Duo Smith&Smart mit seinem Elektro-House-Punk-Projekt ALTES HAUS. Live mit Drummer Alice Dufte (MUDDLING THRU). Widerspenstig, wild und dringend tanzbar: Minimal Lyrics, Maximum House!"
  },
  {
    "id": "23-05-18-00-heilig-kreuz-kirche-aroeiras",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "18:00",
    "name": "Aroeiras",
    "artist": "Aroeiras",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Brazilian"
    ],
    "sourceText": "Forró, Coco de Roda"
  },
  {
    "id": "23-05-18-00-rasen-in-aktion-wir-sind-vetter-sound-",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "18:00",
    "name": "Wir sind »Vetter Sound«",
    "artist": "Wir sind »Vetter Sound«",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian"
    ],
    "sourceText": "Sambagruppe"
  },
  {
    "id": "23-05-18-00-shantytown-0-db-silent-riots",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "18:00",
    "endTime": "22:30",
    "name": "0 dB Silent Riots",
    "artist": "0 dB Silent Riots",
    "stage": "shantYtown",
    "types": [
      "Electro"
    ],
    "sourceText": "SILENT DISCO auf 3 Kanälen – OPEN DJ DESK bis 22:30"
  },
  {
    "id": "23-05-18-00-sound-avenue-fulya",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "18:00",
    "name": "Fulya",
    "artist": "Fulya",
    "stage": "Sound Avenue",
    "types": [
      "Hip-Hop"
    ],
    "sourceText": "R&B, Hip-Hop"
  },
  {
    "id": "23-05-18-05-impact-mike-nasa",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "18:05",
    "name": "Mike Nasa",
    "artist": "Mike Nasa",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "23-05-18-30-impact-chovoo",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "18:30",
    "name": "Chovoo",
    "artist": "Chovoo",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "23-05-18-30-neue-pumpe-gleis-11",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "18:30",
    "name": "Gleis 11",
    "artist": "Gleis 11",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Anatolian psychedelic Rock"
  },
  {
    "id": "23-05-18-55-impact-dimi-rompos",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "18:55",
    "name": "Dimi Rompos",
    "artist": "Dimi Rompos",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "23-05-19-00-rasen-in-aktion-coruja-satter-bass",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "19:00",
    "name": "Coruja + Satter Bass",
    "artist": "Coruja + Satter Bass",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian",
      "Afro"
    ],
    "sourceText": "Afro-brasilianische Perkussion",
    "description": "Ein Projekt von Kerstin Schreier und Christian Sluzalek. Zwei Gruppen – ein Sound. Wir spielen einen bunten Mix aus modernen und traditionellen brasilianischen Grooves gewürzt mit eigenen Arrangements."
  },
  {
    "id": "23-05-19-00-shantytown-puto-production",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "19:00",
    "name": "Puto Production",
    "artist": "Puto Production",
    "stage": "shantYtown",
    "types": [
      "Electro",
      "Performance"
    ],
    "sourceText": "getrommelter Elektro mit traditionellen Beats",
    "description": "Die in Berlin ansässige Trommelsensation aus Chile ist seit Jahrzehnten auf Berlins Straßen unterwegs. Eine Kombination aus traditionellen Beats mit modernen Electro Sounds. Tanz-Trance und Ekstase garantiert!"
  },
  {
    "id": "23-05-19-15-klang-plaza-kumbia-ambassadors",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "19:15",
    "name": "Kumbia Ambassadors",
    "artist": "Kumbia Ambassadors",
    "stage": "Klang Plaza",
    "types": [
      "Latin",
      "Electro"
    ],
    "sourceText": "Cumbia Experimental",
    "description": "Kumbia Ambassadors wurde 2024 in Berlin von chilenischen Musikern gegründet. Sie verbinden tropische Musik mit experimentellen Klängen. Ihre energiegeladenen Shows mischen Cumbia, Punk und elektronische Musik"
  },
  {
    "id": "23-05-19-20-impact-goldie",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "19:20",
    "name": "Goldie",
    "artist": "Goldie",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "23-05-19-40-impact-bipolar-soundsystem",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "19:40",
    "endTime": "22:00",
    "name": "Bipolar Soundsystem",
    "artist": "Bipolar Soundsystem",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "bis 22:00"
  },
  {
    "id": "23-05-19-45-sound-avenue-toshin",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "19:45",
    "name": "Toshin",
    "artist": "Toshin",
    "stage": "Sound Avenue",
    "types": [
      "Afro",
      "Hip-Hop",
      "Pop"
    ],
    "sourceText": "Soul, R&B, Afro-pop, and theatrical storytelling"
  },
  {
    "id": "23-05-20-00-heilig-kreuz-kirche-foro-in-the-city",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "20:00",
    "name": "Foro in the City",
    "artist": "Foro in the City",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Brazilian",
      "Performance"
    ],
    "sourceText": "brasilianische Tanzmusik"
  },
  {
    "id": "23-05-20-00-neue-pumpe-oku-baba-shango",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "20:00",
    "name": "Oku & Baba Shango",
    "artist": "Oku & Baba Shango",
    "stage": "Neue Pumpe",
    "types": [
      "Afro"
    ],
    "sourceText": "Afrofunk & Afrobeat"
  },
  {
    "id": "23-05-20-00-rasen-in-aktion-bloco-explos-o",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "20:00",
    "name": "Bloco Explosão",
    "artist": "Bloco Explosão",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian",
      "Reggae"
    ],
    "sourceText": "Samba, Reggae und Funk",
    "description": "Als Gäste haben wir die Bahia Connection. Wir werden mit über 60 Trommlern am Start sein. Unsere Gruppe probt jede Woche in der Samba-Etage in Berlin Neukölln. Sie ist offen für neue Mitspieler!"
  },
  {
    "id": "23-05-20-00-shantytown-discopunkx",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "20:00",
    "name": "Discopunkx",
    "artist": "Discopunkx",
    "stage": "shantYtown",
    "types": [
      "Electro"
    ],
    "sourceText": "Disco Tunes, Rare Funk, Electric Soul",
    "description": "Die Discopunkx sind ein Berliner DJ Duo, die die Liebe zu alten Disco Tunes, Rare Funk und Electric Soul teilen."
  },
  {
    "id": "23-05-21-00-klang-plaza-la-mekanica",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "21:00",
    "name": "LA MEKANICA",
    "artist": "LA MEKANICA",
    "stage": "Klang Plaza",
    "types": [
      "Salsa",
      "Cuban"
    ],
    "sourceText": "Timba Salsa Cubana",
    "description": "LA MEKANICA ist eine kubanische Timba- und Salsa-Band. Gegründet 2017, steht sie mit neuer Besetzung wieder auf der Bühne. Zehn Musiker*innen aus Kuba verbinden kraftvolle Bläser mit modernen Timba-Rhythmen und Salsa"
  },
  {
    "id": "23-05-21-00-neue-pumpe-dj-erci-e",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "21:00",
    "name": "DJ Erci E",
    "artist": "DJ Erci E",
    "stage": "Neue Pumpe",
    "types": [
      "Electro",
      "Hip-Hop"
    ],
    "sourceText": "Hip-Hop / Funk Soul"
  },
  {
    "id": "23-05-21-00-sound-avenue-dj-haizel",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "21:00",
    "name": "DJ Haizel",
    "artist": "DJ Haizel",
    "stage": "Sound Avenue",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "23-05-22-00-heilig-kreuz-kirche-orgel-nachtmusik",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "22:00",
    "name": "Orgel-Nachtmusik",
    "artist": "Orgel-Nachtmusik",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Other"
    ],
    "sourceText": "Reinhard Hoffmann"
  },
  {
    "id": "23-05-22-30-heilig-kreuz-kirche-segen-zur-nacht",
    "day": "Samstag",
    "dayOrder": 2,
    "date": "23/05",
    "time": "22:30",
    "name": "Segen zur Nacht",
    "artist": "Segen zur Nacht",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ],
    "sourceText": "Lydia Schulz"
  },
  {
    "id": "24-05-12-00-impact-perfomance-arts-music-the-space",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "name": "Perfomance Arts, Music: The Space",
    "artist": "Perfomance Arts, Music: The Space",
    "stage": "IMPACT",
    "types": [
      "Other"
    ]
  },
  {
    "id": "24-05-12-00-rasen-in-aktion-augustine-otto-mujer-gallina",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "name": "Augustine Otto & Mujer Gallina",
    "artist": "Augustine Otto & Mujer Gallina",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Kinder in allen Größen sind eingeladen",
    "description": "Baut, gestaltet und bemalt mit uns eine Stadt aus Papkartons. Eimerweise Farben werden zur Verfügung gestellt, Ihr könnt loslegen, experimentieren, räumliche Erfahrungen sammeln in eurer City, mit Pinseln und Farbe Spaß haben! Bringt gerne Malkittel mit!"
  },
  {
    "id": "24-05-12-00-rasen-in-aktion-berliner-grossfiguren",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "name": "Berliner Grossfiguren",
    "artist": "Berliner Grossfiguren",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Impro-Figurentheater",
    "description": "Wo kommen wir her? Wo gehen wir hin? Spaghetti oder Kekse? Den wirklich wichtigen Fragen im Leben ist Professor Wuschel mit Euch auf der Spur…"
  },
  {
    "id": "24-05-12-00-rasen-in-aktion-do-it-together",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "name": "do it together",
    "artist": "do it together",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Siebdruck für Groß und Klein"
  },
  {
    "id": "24-05-12-00-rasen-in-aktion-heike-maria-unvorstellbar-clozi-wildner",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "name": "Heike Maria unVORStellBAR & Clozi Wildner",
    "artist": "Heike Maria unVORStellBAR & Clozi Wildner",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Recycling-Kostüme",
    "description": "Wir helfen Euch, ungewöhnliche Fantasiekostüme aus Recyclingmaterialien zu gestalten. Gerne könnt Ihr auch Dinge mitbringen, die Ihr verwenden wollt."
  },
  {
    "id": "24-05-12-00-rasen-in-aktion-hexe-klex",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "name": "Hexe Klex",
    "artist": "Hexe Klex",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Nähstube: Angebot für Kinder",
    "description": "Hexe Klex vermittelt auch den Kleinsten das Nähen mit der Hand, den Größeren erst recht, ganz egal ob mit stumpfer oder spitzer Nadel. Wir gestalten gemeinsam farbenfrohe Mäuse, kleine Fingerpüppchen, Sorgen fressende Monster oder bunte Blumen zum Anstecken."
  },
  {
    "id": "24-05-12-00-rasen-in-aktion-oliver-christa",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "name": "Oliver & Christa",
    "artist": "Oliver & Christa",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Angebot für Kinder",
    "description": "Wir möchten mit Euch jonglieren und lachen: Flowerstick… Diabolo…Teller drehen… Ihr werdet sehen… mit Anleitung zum verstehen… Circus Kultur…ein buntes Treiben… die Fun Art Workers…"
  },
  {
    "id": "24-05-12-00-shantytown-banan-o-rama",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "name": "Banan'O'Rama",
    "artist": "Banan'O'Rama",
    "stage": "shantYtown",
    "types": [
      "Performance"
    ],
    "sourceText": "Interaktive Comedy-Show"
  },
  {
    "id": "24-05-12-00-shantytown-batik-mit-blumen",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "endTime": "19:00",
    "name": "Batik mit Blumen",
    "artist": "Batik mit Blumen",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop bis 19:00"
  },
  {
    "id": "24-05-12-00-shantytown-paint-the-moment",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "endTime": "15:00",
    "name": "Paint The Moment",
    "artist": "Paint The Moment",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop bis 15:00"
  },
  {
    "id": "24-05-12-00-shantytown-sport-connection-berlin",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "endTime": "19:00",
    "name": "Sport Connection Berlin",
    "artist": "Sport Connection Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Infostand & Aktionen bis 19:00"
  },
  {
    "id": "24-05-12-00-shantytown-stadtteilkomitees-berlin",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "endTime": "16:00",
    "name": "Stadtteilkomitees Berlin",
    "artist": "Stadtteilkomitees Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Informationen und Waffeln, Infostand bis 16:00"
  },
  {
    "id": "24-05-12-00-shantytown-umsonstladen",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:00",
    "endTime": "19:00",
    "name": "Umsonstladen",
    "artist": "Umsonstladen",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Geben & Nehmen gegen die Wegwerfgesellschaft bis 19:00"
  },
  {
    "id": "24-05-12-15-shantytown-seifenblasen-instrumente-bauen-mit-den-bubble-brothers",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:15",
    "name": "Seifenblasen-Instrumente bauen mit den Bubble Brothers",
    "artist": "Seifenblasen-Instrumente bauen mit den Bubble Brothers",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop für Groß & Klein"
  },
  {
    "id": "24-05-12-30-rasen-in-aktion-zakap-s",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:30",
    "name": "Zakapüs",
    "artist": "Zakapüs",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Puppenshow für die ganze Familie",
    "description": "Madame Zakapüs hat seltsame Kreaturen gesammelt. Ein Bestiarium mit Fabelwesen aus aller Welt: ein riesiger Frosch, Geister, singende Skelette, Aliens… Dies ist die Geschichte ihrer Begegnungen mit diesen ungewöhnlichen Geschöpfen."
  },
  {
    "id": "24-05-12-30-shantytown-bike-stunt-berlin",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:30",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "24-05-12-45-shantytown-mukunda-cruz",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "12:45",
    "name": "Mukunda Cruz",
    "artist": "Mukunda Cruz",
    "stage": "shantYtown",
    "types": [
      "Latin",
      "Jazz",
      "Pop"
    ],
    "sourceText": "Andinische Folklore",
    "description": "Mukunda Cruz ist das Projekt des argentinischen Musikers Martin Cruz (Berlin seit 2016). Er verbindet andine & argentinische Folklore mit Rock-Pop und Jazz. 2025 erschien sein Debütalbum „Canciones irregulares“."
  },
  {
    "id": "24-05-13-00-impact-perfomance-arts-music-jasmine-guitar",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "13:00",
    "name": "Perfomance Arts, Music: Jasmine guitar",
    "artist": "Perfomance Arts, Music: Jasmine guitar",
    "stage": "IMPACT",
    "types": [
      "Other"
    ]
  },
  {
    "id": "24-05-13-00-klang-plaza-ateze",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "13:00",
    "name": "Ateze",
    "artist": "Ateze",
    "stage": "Klang Plaza",
    "types": [
      "Latin",
      "Reggae",
      "Hip-Hop",
      "Pop"
    ],
    "sourceText": "Latin Pop, Latin Trap, R&B",
    "description": "Ateze, geboren in Mexiko und aufgewachsen in Berlin, verbindet seine Latinx-Wurzeln mit der urbanen Atmosphäre Berlins. Sein zweisprachiger Sound vereint Pop, Reggaeton und R&B/RnB, während er Themen wie Liebe, Verlust und Liebeskummer selbstbewusst und ehrlich behandelt."
  },
  {
    "id": "24-05-13-00-neue-pumpe-balkanova",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "13:00",
    "name": "Balkanova",
    "artist": "Balkanova",
    "stage": "Neue Pumpe",
    "types": [
      "Jazz"
    ],
    "sourceText": "Balkanfolk & World Jazz"
  },
  {
    "id": "24-05-13-00-rasen-in-aktion-luciana-arcuri",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "13:00",
    "name": "Luciana Arcuri",
    "artist": "Luciana Arcuri",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Improvisation",
    "description": "Eine spontane Improvisation mit der Clownin Maria Eugenia, bei der Ihr von ihrer Ausstrahlung, Magie, Musik und Witzen überrascht werden könnt."
  },
  {
    "id": "24-05-13-00-sound-avenue-laras-feuerstein",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "13:00",
    "name": "Laras Feuerstein",
    "artist": "Laras Feuerstein",
    "stage": "Sound Avenue",
    "types": [
      "Other"
    ],
    "sourceText": "Kinder Animation"
  },
  {
    "id": "24-05-13-30-rasen-in-aktion-berliner-grossfiguren",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "13:30",
    "name": "Berliner Grossfiguren",
    "artist": "Berliner Grossfiguren",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Impro-Figurentheater",
    "description": "Wo kommen wir her? Wo gehen wir hin? Spaghetti oder Kekse? Den wirklich wichtigen Fragen im Leben ist Professor Wuschel mit Euch auf der Spur…"
  },
  {
    "id": "24-05-13-45-shantytown-the-shallaras",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "13:45",
    "name": "The Shallaras",
    "artist": "The Shallaras",
    "stage": "shantYtown",
    "types": [
      "Electro",
      "Hip-Hop",
      "Pop",
      "Performance"
    ],
    "sourceText": "Raw 50s/60s Rock'n'Roll, R&B & Garage",
    "description": "The Shallaras — Angela Cory (Australia) & Mauro Pandolfino (Italy). Raw 50s/60s Rock’n’Roll, R&B & Garage. Wild, rhythmisch, dance-driven. Ein Duo mit dem Sound einer ganzen Band."
  },
  {
    "id": "24-05-14-00-heilig-kreuz-kirche-pfingstgottesdienst",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "14:00",
    "name": "Pfingstgottesdienst",
    "artist": "Pfingstgottesdienst",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Other"
    ],
    "sourceText": "Pfarrerin Christina Biere + Regionalkantor Johannes Stolte"
  },
  {
    "id": "24-05-14-00-impact-dj-mr-lee",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "14:00",
    "name": "DJ: Mr. Lee",
    "artist": "DJ: Mr. Lee",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "24-05-14-00-rasen-in-aktion-zakap-s",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "14:00",
    "name": "Zakapüs",
    "artist": "Zakapüs",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Puppenshow für die ganze Familie",
    "description": "Madame Zakapüs hat seltsame Kreaturen gesammelt. Ein Bestiarium mit Fabelwesen aus aller Welt: ein riesiger Frosch, Geister, singende Skelette, Aliens… Dies ist die Geschichte ihrer Begegnungen mit diesen ungewöhnlichen Geschöpfen."
  },
  {
    "id": "24-05-14-15-klang-plaza-la-guagua-music",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "14:15",
    "name": "La Guagua Music",
    "artist": "La Guagua Music",
    "stage": "Klang Plaza",
    "types": [
      "Latin"
    ],
    "sourceText": "Tango und lateinamerikanische Lieder",
    "description": "Dieses Kollektiv für Tango und lateinamerikanische Lieder transportiert wie ein bunter Bus klangvolle Geschichten, deren Essenz durch inspirierte Musiker*innen direkt die Herzen des Publikums berührt."
  },
  {
    "id": "24-05-14-15-neue-pumpe-ajvar",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "14:15",
    "name": "Ajvar",
    "artist": "Ajvar",
    "stage": "Neue Pumpe",
    "types": [
      "Other"
    ],
    "sourceText": "Balkanmusik"
  },
  {
    "id": "24-05-14-30-rasen-in-aktion-company-haa",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "14:30",
    "name": "Company Haa",
    "artist": "Company Haa",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Tanz im urbanen Raum"
  },
  {
    "id": "24-05-14-30-shantytown-bike-stunt-berlin",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "14:30",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "24-05-14-30-sound-avenue-buba-diakit-",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "14:30",
    "name": "Buba Diakité",
    "artist": "Buba Diakité",
    "stage": "Sound Avenue",
    "types": [
      "Afro",
      "Reggae"
    ],
    "sourceText": "African Reggae"
  },
  {
    "id": "24-05-15-00-heilig-kreuz-kirche-orgelf-hrung",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "15:00",
    "name": "Orgelführung",
    "artist": "Orgelführung",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ],
    "sourceText": "Johannes Stolte"
  },
  {
    "id": "24-05-15-00-impact-dj-toolow",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "15:00",
    "name": "DJ: Toolow",
    "artist": "DJ: Toolow",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "24-05-15-00-rasen-in-aktion-grotest-maru-cosmo",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "15:00",
    "name": "Grotest Maru: COSMO",
    "artist": "Grotest Maru: COSMO",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Mobiles, interaktives Straßentheater – Walk Act"
  },
  {
    "id": "24-05-15-00-rasen-in-aktion-luciana-arcuri",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "15:00",
    "name": "Luciana Arcuri",
    "artist": "Luciana Arcuri",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Improvisation",
    "description": "Eine spontane Improvisation mit der Clownin Maria Eugenia, bei der Ihr von ihrer Ausstrahlung, Magie, Musik und Witzen überrascht werden könnt."
  },
  {
    "id": "24-05-15-30-neue-pumpe-parka",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "15:30",
    "name": "Parka",
    "artist": "Parka",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Anatolian Folk Rock"
  },
  {
    "id": "24-05-15-30-rasen-in-aktion-compagnie-noire-machine",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "15:30",
    "name": "Compagnie Noire Machine",
    "artist": "Compagnie Noire Machine",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Zirkustheater mit chinesischem Mast, Jonglage und Pantomime",
    "description": "SMILE ist eine herzerwärmende und humorvolle Zirkusperformance ohne Sprache, in dem die Zirkusartist*innen Achille Piot und Theresa Zinser einem umherfliegendem, wandelbaren Lächeln begegnen und sich auf ein gemeinsames Abenteuer mit ihm einlassen."
  },
  {
    "id": "24-05-15-30-shantytown-ozza36",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "15:30",
    "name": "OZZA36",
    "artist": "OZZA36",
    "stage": "shantYtown",
    "types": [
      "Hip-Hop"
    ],
    "sourceText": "Hip-Hop",
    "description": "Hallo Friends, ich bin OZZA aus Kreuzberg. Hier aufgewachsen, verarbeite ich meine Eindrücke in Musik und zeige meine Perspektive. Meine Mukke soll verbinden und die neue Generation ansprechen – kommt vorbei!"
  },
  {
    "id": "24-05-15-45-klang-plaza-a-panda-do-sol",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "15:45",
    "name": "A Panda do Sol",
    "artist": "A Panda do Sol",
    "stage": "Klang Plaza",
    "types": [
      "Cuban",
      "Brazilian",
      "Caribbean",
      "Jazz"
    ],
    "sourceText": "Transatlantic Samba Ensemble",
    "description": "Das Berliner Kollektiv A Panda do Sol verbindet Samba aus Brasilien, karibische Grooves, Chanson und Jazz zu warmen, poetischen Konzerten voller Rhythmus, Nostalgie und sonniger Energie."
  },
  {
    "id": "24-05-16-00-heilig-kreuz-kirche-ma-trio",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "16:00",
    "name": "MA-Trio",
    "artist": "MA-Trio",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Other"
    ],
    "sourceText": "traditionellen Honkyoku, Improvisation"
  },
  {
    "id": "24-05-16-00-impact-dj-dipped-in-colors",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "16:00",
    "name": "DJ: Dipped in Colors",
    "artist": "DJ: Dipped in Colors",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "24-05-16-00-rasen-in-aktion-company-haa",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "16:00",
    "name": "Company Haa",
    "artist": "Company Haa",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Tanz im urbanen Raum"
  },
  {
    "id": "24-05-16-00-shantytown-sektsp-tst-ck",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "16:00",
    "name": "SektSpätStück",
    "artist": "SektSpätStück",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Sonntag & Sekt",
    "description": "Sonntag & Sekt = Se best. SektSpätStück serviert knallige Beats, ploppende Lyrics und sprudelnde Bühnenpräsenz. So frech, wie es sich für vom Sekt getränkten Zungen gehört."
  },
  {
    "id": "24-05-16-00-sound-avenue-mariama",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "16:00",
    "name": "Mariama",
    "artist": "Mariama",
    "stage": "Sound Avenue",
    "types": [
      "Pop"
    ],
    "sourceText": "Soul, Pop"
  },
  {
    "id": "24-05-16-30-rasen-in-aktion-grotest-maru-cosmo",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "16:30",
    "name": "Grotest Maru: COSMO",
    "artist": "Grotest Maru: COSMO",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Mobiles, interaktives Straßentheater – Walk Act"
  },
  {
    "id": "24-05-17-00-impact-dj-stinhow",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "17:00",
    "name": "DJ: Stinhow",
    "artist": "DJ: Stinhow",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "24-05-17-00-neue-pumpe-bidar",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "17:00",
    "name": "Bidar",
    "artist": "Bidar",
    "stage": "Neue Pumpe",
    "types": [
      "Hip-Hop",
      "Jazz"
    ],
    "sourceText": "Alternative Jazz, R&B"
  },
  {
    "id": "24-05-17-00-rasen-in-aktion-producciones-abismales",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "17:00",
    "name": "Producciones Abismales",
    "artist": "Producciones Abismales",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Walkact",
    "description": "Zwei Meeresarten treffen aufeinander, die sich unter normalen Umständen niemals begegnet wären. Klimawandel im Ozean? Ja! Leider… Riesige Fischpuppen beginnen eine beispiellose Wanderung. Sind sie sogenannte invasive Arten? Komm und schau es Dir an…"
  },
  {
    "id": "24-05-17-00-shantytown-bike-stunt-berlin",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "17:00",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "24-05-17-00-shantytown-byds",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "17:00",
    "name": "BYDS",
    "artist": "BYDS",
    "stage": "shantYtown",
    "types": [
      "Latin",
      "Electro",
      "Jazz",
      "Pop",
      "Performance"
    ],
    "sourceText": "Alternative Dance",
    "description": "ByDS ist eine alternative Dance-Band aus Berlin. Ihr vielseitiger Sound vereint Alternative Rock-Pop mit dunklen elektronischen Latin-Fusion-Elementen und Trip-Hop, während ihre Texte auf Englisch, Deutsch und Spanisch die Zuhörer fesseln und zum Tanzen animieren."
  },
  {
    "id": "24-05-17-15-klang-plaza-mirmix",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "17:15",
    "name": "MIRMIX",
    "artist": "MIRMIX",
    "stage": "Klang Plaza",
    "types": [
      "Jazz"
    ],
    "sourceText": "Global Brass Fusion"
  },
  {
    "id": "24-05-17-30-rasen-in-aktion-compagnie-noire-machine",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "17:30",
    "name": "Compagnie Noire Machine",
    "artist": "Compagnie Noire Machine",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Zirkustheater mit chinesischem Mast, Jonglage und Pantomime",
    "description": "SMILE ist eine herzerwärmende und humorvolle Zirkusperformance ohne Sprache, in dem die Zirkusartist*innen Achille Piot und Theresa Zinser einem umherfliegendem, wandelbaren Lächeln begegnen und sich auf ein gemeinsames Abenteuer mit ihm einlassen."
  },
  {
    "id": "24-05-17-45-sound-avenue-kingsley-q-",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "17:45",
    "name": "Kingsley Q.",
    "artist": "Kingsley Q.",
    "stage": "Sound Avenue",
    "types": [
      "Afro",
      "Hip-Hop",
      "Pop"
    ],
    "sourceText": "Pop, R&B & Afro-Vibes"
  },
  {
    "id": "24-05-18-00-heilig-kreuz-kirche-the-balkonians",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:00",
    "name": "The Balkonians",
    "artist": "The Balkonians",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Jazz"
    ],
    "sourceText": "Acoustic Balkan Fusion"
  },
  {
    "id": "24-05-18-00-rasen-in-aktion-bateria-de-samba-verde-e-branco",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:00",
    "name": "Bateria de Samba Verde e Branco",
    "artist": "Bateria de Samba Verde e Branco",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian"
    ],
    "sourceText": "Rhythmus der Sambaschulen",
    "description": "Die Bateria Verde e Branco ist ein Berliner Samba-Projekt, das die Tradition der brasilianischen Sambaschulen und die Kultur des Karnevals authentisch nach Berlin bringt. Sie verbindet Musik, Lernen und Gemeinschaft durch die Energie des Sambas."
  },
  {
    "id": "24-05-18-00-rasen-in-aktion-producciones-abismales",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:00",
    "name": "Producciones Abismales",
    "artist": "Producciones Abismales",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Walkact",
    "description": "Zwei Meeresarten treffen aufeinander, die sich unter normalen Umständen niemals begegnet wären. Klimawandel im Ozean? Ja! Leider… Riesige Fischpuppen beginnen eine beispiellose Wanderung. Sind sie sogenannte invasive Arten? Komm und schau es Dir an…"
  },
  {
    "id": "24-05-18-00-shantytown-0-db-silent-riots",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:00",
    "endTime": "22:30",
    "name": "0 dB Silent Riots",
    "artist": "0 dB Silent Riots",
    "stage": "shantYtown",
    "types": [
      "Electro"
    ],
    "sourceText": "SILENT DISCO auf 3 Kanälen – OPEN DJ DESK bis 22:30"
  },
  {
    "id": "24-05-18-05-impact-kaysanova",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:05",
    "name": "Kaysanova",
    "artist": "Kaysanova",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "24-05-18-30-impact-chris-paka",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:30",
    "name": "Chris Paka",
    "artist": "Chris Paka",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "24-05-18-30-neue-pumpe-neon-nazar",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:30",
    "name": "Neon Nazar",
    "artist": "Neon Nazar",
    "stage": "Neue Pumpe",
    "types": [
      "Other"
    ],
    "sourceText": "Anatolian Psychedelic"
  },
  {
    "id": "24-05-18-30-shantytown-dj-marla-roots",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:30",
    "name": "DJ Marla Roots",
    "artist": "DJ Marla Roots",
    "stage": "shantYtown",
    "types": [
      "Brazilian",
      "Electro",
      "Pop",
      "Performance"
    ],
    "sourceText": "Baile Funk, Samba, Pop",
    "description": "DJ Marla Roots stammt aus Brasilien und mixt brasilianische Styles wie Rio Funk oder Funk Carioca. nDie Liste an Auftritten in Clubs wie ://about:blank, Mensch Meier, SchwuZ und Yaam sprechen für sie und ihren Sound. Lasst uns tanzen!"
  },
  {
    "id": "24-05-18-45-klang-plaza-pasaje-abierto",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:45",
    "name": "Pasaje abierto",
    "artist": "Pasaje abierto",
    "stage": "Klang Plaza",
    "types": [
      "Salsa",
      "Cuban",
      "Caribbean",
      "Latin",
      "Jazz"
    ],
    "sourceText": "Salsa, Son, Latin jazz",
    "description": "Heiße Rhythmen aus Kuba treffen auf die pulsierende Energie Berlins. Pasaje Abierto bringt unter der Leitung von Wiljoph Sunday Mounkassa Williams „Bebito“ authentischen Latin Sound und karibische Leidenschaft auf die Bühne."
  },
  {
    "id": "24-05-18-55-impact-benzko",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "18:55",
    "name": "Benzko",
    "artist": "Benzko",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "Auftritt"
  },
  {
    "id": "24-05-19-00-rasen-in-aktion-marafox-na-o-nag-",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "19:00",
    "name": "Marafoxé Nação Nagô",
    "artist": "Marafoxé Nação Nagô",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian"
    ],
    "sourceText": "Maracatu aus Recife-Pernambuco",
    "description": "Marafoxé Nação Nagô kommt aus dem Nordosten Brasiliens. Für den Karneval der Kulturen bringen wir gemeinsam mit Maracatu-Gruppen aus München, der Schweiz und Italien Menschen zusammen und lassen die Trommeln für Gemeinsamkeit und Frieden sprechen."
  },
  {
    "id": "24-05-19-15-impact-dj-medussar",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "19:15",
    "name": "DJ: Medussar",
    "artist": "DJ: Medussar",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "24-05-19-30-sound-avenue-dammydaas",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "19:30",
    "name": "DammyDaas",
    "artist": "DammyDaas",
    "stage": "Sound Avenue",
    "types": [
      "Hip-Hop"
    ],
    "sourceText": "Afobeats, R&B, Soul"
  },
  {
    "id": "24-05-20-00-heilig-kreuz-kirche-tants-in-gartn-eydn",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "20:00",
    "name": "Tants in Gartn Eydn",
    "artist": "Tants in Gartn Eydn",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Other"
    ],
    "sourceText": "Klezmerschwof"
  },
  {
    "id": "24-05-20-00-impact-dj-onit",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "20:00",
    "name": "DJ: Onit",
    "artist": "DJ: Onit",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ]
  },
  {
    "id": "24-05-20-00-neue-pumpe-d-l-funk-alaturka",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "20:00",
    "name": "Ödül & Funk Alaturka",
    "artist": "Ödül & Funk Alaturka",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Funk Pop Orient"
  },
  {
    "id": "24-05-20-30-klang-plaza-sonic-interventions",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "20:30",
    "name": "Sonic Interventions",
    "artist": "Sonic Interventions",
    "stage": "Klang Plaza",
    "types": [
      "Jazz"
    ],
    "sourceText": "Diasporischer Jazz-Fusion",
    "description": "Sonic Interventions ist ein diaspora-futuristisches Ensemble aus Berlin. 2020 aus der transkulturellen Jazzszene Berlins hervorgegangen, verbindet die Gruppe Live Improvsation, Jazz, Groove und Ritual zu kollektiven Erfahrungen musikalischer Utopie."
  },
  {
    "id": "24-05-20-30-shantytown-dj-batero",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "20:30",
    "name": "DJ Batero",
    "artist": "DJ Batero",
    "stage": "shantYtown",
    "types": [
      "Salsa",
      "Latin",
      "Electro",
      "Hip-Hop",
      "Pop"
    ],
    "sourceText": "Multikulti Groove Explosion",
    "description": "Von Disco bis Salsa, HipHop bis Pop, Cumbia bis Rock. Da das Leben als Batero (spanisch: Schlagzeuger) sehr anstrengend sein kann und die ewige Schlepperei von Drums und Cymbals auf die Eier geht, gibt es seit 2006 DJ Batero!"
  },
  {
    "id": "24-05-21-00-impact-dj-sosa",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "21:00",
    "endTime": "22:00",
    "name": "DJ: Sosa",
    "artist": "DJ: Sosa",
    "stage": "IMPACT",
    "types": [
      "Electro"
    ],
    "sourceText": "bis 22:00"
  },
  {
    "id": "24-05-21-00-neue-pumpe-dj-aziza-a",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "21:00",
    "name": "DJ Aziza A",
    "artist": "DJ Aziza A",
    "stage": "Neue Pumpe",
    "types": [
      "Electro",
      "Hip-Hop"
    ],
    "sourceText": "Hip-Hop Funk Orient"
  },
  {
    "id": "24-05-21-00-sound-avenue-in-living-color",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "21:00",
    "name": "In Living Color",
    "artist": "In Living Color",
    "stage": "Sound Avenue",
    "types": [
      "Other"
    ]
  },
  {
    "id": "24-05-22-00-heilig-kreuz-kirche-orgel-nachtmusik",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "22:00",
    "name": "Orgel-Nachtmusik",
    "artist": "Orgel-Nachtmusik",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Other"
    ],
    "sourceText": "Johannes Stolte"
  },
  {
    "id": "24-05-22-30-heilig-kreuz-kirche-segen-zur-nacht",
    "day": "Sonntag",
    "dayOrder": 3,
    "date": "24/05",
    "time": "22:30",
    "name": "Segen zur Nacht",
    "artist": "Segen zur Nacht",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ],
    "sourceText": "Lydia Schulz"
  },
  {
    "id": "25-05-12-00-impact-comedy",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "name": "Comedy",
    "artist": "Comedy",
    "stage": "IMPACT",
    "types": [
      "Performance"
    ]
  },
  {
    "id": "25-05-12-00-rasen-in-aktion-augustine-otto-mujer-gallina",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "name": "Augustine Otto & Mujer Gallina",
    "artist": "Augustine Otto & Mujer Gallina",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Kinder in allen Größen sind eingeladen",
    "description": "Baut, gestaltet und bemalt mit uns eine Stadt aus Papkartons. Eimerweise Farben werden zur Verfügung gestellt, Ihr könnt loslegen, experimentieren, räumliche Erfahrungen sammeln in eurer City, mit Pinseln und Farbe Spaß haben! Bringt gerne Malkittel mit!"
  },
  {
    "id": "25-05-12-00-rasen-in-aktion-do-it-together",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "name": "do it together",
    "artist": "do it together",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Siebdruck für Groß und Klein"
  },
  {
    "id": "25-05-12-00-rasen-in-aktion-heike-maria-unvorstellbar-clozi",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "name": "Heike Maria unVORStellBAR & Clozi",
    "artist": "Heike Maria unVORStellBAR & Clozi",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Recycling-Kostüme"
  },
  {
    "id": "25-05-12-00-rasen-in-aktion-hexe-klex",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "name": "Hexe Klex",
    "artist": "Hexe Klex",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Nähstube: Angebot für Kinder",
    "description": "Hexe Klex vermittelt auch den Kleinsten das Nähen mit der Hand, den Größeren erst recht, ganz egal ob mit stumpfer oder spitzer Nadel. Wir gestalten gemeinsam farbenfrohe Mäuse, kleine Fingerpüppchen, Sorgen fressende Monster oder bunte Blumen zum Anstecken."
  },
  {
    "id": "25-05-12-00-rasen-in-aktion-oliver-christa",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "name": "Oliver & Christa",
    "artist": "Oliver & Christa",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Cirkus Kultur: Angebot für Kinder",
    "description": "Wir möchten mit Euch jonglieren und lachen: Flowerstick… Diabolo…Teller drehen… Ihr werdet sehen… mit Anleitung zum verstehen… Circus Kultur…ein buntes Treiben… die Fun Art Workers…"
  },
  {
    "id": "25-05-12-00-rasen-in-aktion-zakap-s",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "name": "Zakapüs",
    "artist": "Zakapüs",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Puppenshow für die ganze Familie",
    "description": "Madame Zakapüs hat seltsame Kreaturen gesammelt. Ein Bestiarium mit Fabelwesen aus aller Welt: ein riesiger Frosch, Geister, singende Skelette, Aliens… Dies ist die Geschichte ihrer Begegnungen mit diesen ungewöhnlichen Geschöpfen."
  },
  {
    "id": "25-05-12-00-shantytown-100-tempelhof",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "endTime": "18:00",
    "name": "100% Tempelhof",
    "artist": "100% Tempelhof",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Infostand bis 18:00"
  },
  {
    "id": "25-05-12-00-shantytown-batik-mit-blumen",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "endTime": "18:00",
    "name": "Batik mit Blumen",
    "artist": "Batik mit Blumen",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop bis 18:00"
  },
  {
    "id": "25-05-12-00-shantytown-paint-the-moment",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "endTime": "18:00",
    "name": "Paint The Moment",
    "artist": "Paint The Moment",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop bis 18:00"
  },
  {
    "id": "25-05-12-00-shantytown-sport-connection-berlin",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "endTime": "18:00",
    "name": "Sport Connection Berlin",
    "artist": "Sport Connection Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Infostand & Aktionen bis 18:00"
  },
  {
    "id": "25-05-12-00-shantytown-umsonstladen",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:00",
    "endTime": "18:00",
    "name": "Umsonstladen",
    "artist": "Umsonstladen",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Geben & Nehmen gegen die Wegwerfgesellschaft bis 18:00"
  },
  {
    "id": "25-05-12-15-shantytown-seifenblasen-instrumente-bauen-mit-den-bubble-brothers",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:15",
    "name": "Seifenblasen-Instrumente bauen mit den Bubble Brothers",
    "artist": "Seifenblasen-Instrumente bauen mit den Bubble Brothers",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop für Groß & Klein"
  },
  {
    "id": "25-05-12-30-rasen-in-aktion-berliner-grossfiguren",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:30",
    "name": "Berliner Grossfiguren",
    "artist": "Berliner Grossfiguren",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Impro-Figurentheater",
    "description": "Wo kommen wir her? Wo gehen wir hin? Spaghetti oder Kekse? Den wirklich wichtigen Fragen im Leben ist Professor Wuschel mit Euch auf der Spur…"
  },
  {
    "id": "25-05-12-30-shantytown-bike-stunt-berlin",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:30",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "25-05-12-30-shantytown-india-waale",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "12:30",
    "name": "India Waale",
    "artist": "India Waale",
    "stage": "shantYtown",
    "types": [
      "Pop",
      "Performance"
    ],
    "sourceText": "Indische Volkstänze und Bollywoodtanz",
    "description": "Die Einheit in der Vielfalt ist unser Motto, unsere Darbietung ist eine Komposition der diversen Kulturen und Traditionen Indiens. Wir sind zurück, trotz der schwieriger Zeiten und möchten Euch einladen, an unserer farbenprächtigen Feier des Lebens mit unseren Tänzen teilzunehmen."
  },
  {
    "id": "25-05-13-00-klang-plaza-preisverleihung",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:00",
    "name": "Preisverleihung",
    "artist": "Preisverleihung",
    "stage": "Klang Plaza",
    "types": [
      "Other"
    ]
  },
  {
    "id": "25-05-13-00-neue-pumpe-bloco-explosao",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:00",
    "name": "Bloco Explosao",
    "artist": "Bloco Explosao",
    "stage": "Neue Pumpe",
    "types": [
      "Brazilian",
      "Reggae"
    ],
    "sourceText": "Funk, Samba und Reggae"
  },
  {
    "id": "25-05-13-00-rasen-in-aktion-castellers-de-berl-n",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:00",
    "name": "Castellers de Berlín",
    "artist": "Castellers de Berlín",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Katalanische Menschentürme",
    "description": "Wir sind leidenschaftliche #Hochstapler*innen im wahrsten Sinne des Wortes. Seit 2018 bauen wir von der UNESCO als Weltkulturerbe anerkannte Menschentürme in unserer Stadt. Kommt zu unserer Aufführung und helft uns, den Himmel zu erreichen!"
  },
  {
    "id": "25-05-13-00-rasen-in-aktion-luciana-arcuri",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:00",
    "name": "Luciana Arcuri",
    "artist": "Luciana Arcuri",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Improvisation",
    "description": "Eine spontane Improvisation mit der Clownin Maria Eugenia, bei der Ihr von ihrer Ausstrahlung, Magie, Musik und Witzen überrascht werden könnt."
  },
  {
    "id": "25-05-13-00-rasen-in-aktion-mizwiz-and-friends",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:00",
    "name": "MIZWIZ and FRIENDS",
    "artist": "MIZWIZ and FRIENDS",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Aktion aus dem Kinderkarneval",
    "description": "Der Axolotl bleibt für immer ein Kind und regeneriert sich selbst- ein Wunder! Lasst uns in den Sound tauchen der den friedlich-fröhlichen Lurch plätschern lässt."
  },
  {
    "id": "25-05-13-00-sound-avenue-aktivtribe",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:00",
    "name": "AktivTribe",
    "artist": "AktivTribe",
    "stage": "Sound Avenue",
    "types": [
      "Other"
    ]
  },
  {
    "id": "25-05-13-30-rasen-in-aktion-zakap-s",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:30",
    "name": "Zakapüs",
    "artist": "Zakapüs",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Puppenshow für die ganze Familie",
    "description": "Madame Zakapüs hat seltsame Kreaturen gesammelt. Ein Bestiarium mit Fabelwesen aus aller Welt: ein riesiger Frosch, Geister, singende Skelette, Aliens… Dies ist die Geschichte ihrer Begegnungen mit diesen ungewöhnlichen Geschöpfen."
  },
  {
    "id": "25-05-13-30-shantytown-d-e-g-ng-luna-chaja-",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:30",
    "name": "D!E GÄNG (Luna & Chaja)",
    "artist": "D!E GÄNG (Luna & Chaja)",
    "stage": "shantYtown",
    "types": [
      "Caribbean",
      "Reggae",
      "Hip-Hop",
      "Performance"
    ],
    "sourceText": "Hip-Hop, Dancehall, Ska",
    "description": "D!E GÄNG verbindet Kinder und Eltern mit HipHop, Dancehall und Ska. Gegründet von Ben Pavlidis mit seiner Tochter Chaja, rocken Chaja und Luna heute gemeinsam die Bühne und sorgen für echte Familien-Party."
  },
  {
    "id": "25-05-13-30-shantytown-qi-gong-und-viet-vo-dao-kung-fu-tiger",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "13:30",
    "name": "Qi Gong und Viet Vo Dao Kung Fu Tiger",
    "artist": "Qi Gong und Viet Vo Dao Kung Fu Tiger",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop mit Joulia Strauss"
  },
  {
    "id": "25-05-14-00-impact-no-ghetto-soundsystem",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:00",
    "endTime": "18:00",
    "name": "No Ghetto Soundsystem",
    "artist": "No Ghetto Soundsystem",
    "stage": "IMPACT",
    "types": [
      "Other"
    ],
    "sourceText": "bis 18:00"
  },
  {
    "id": "25-05-14-00-klang-plaza-cuatro-piraguas",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:00",
    "name": "Cuatro Piraguas",
    "artist": "Cuatro Piraguas",
    "stage": "Klang Plaza",
    "types": [
      "Brazilian",
      "Afro",
      "Caribbean",
      "Latin",
      "Performance"
    ],
    "sourceText": "Caribbean & Brazilian Folk",
    "description": "Cuatro Piraguas bringt afro-peruanische Rhythmen und Folklore aus Kolumbien und Venezuela auf die Bühne. Ihre Musik lädt zum Tanzen und Lauschen ein und erzählt von Gerechtigkeit, Natur und dem Alltag"
  },
  {
    "id": "25-05-14-00-rasen-in-aktion-abad-capoeira-schule-berlin",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:00",
    "name": "Abadá-Capoeira-Schule-Berlin",
    "artist": "Abadá-Capoeira-Schule-Berlin",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian",
      "Afro",
      "Workshop"
    ],
    "sourceText": "MITMACH-Workshop für Kinder ab 4 Jahren",
    "description": "Capoeira ist eine von afrikanischen Sklaven entwickelte Kampfkunst aus Brasilien. Nach 400 Jahren heute eine Kunst und Kultur mit Kampf, Musik und Akrobatik, viel Kameradschaft und einer Riesenmenge an Spaß!"
  },
  {
    "id": "25-05-14-00-rasen-in-aktion-compagnie-noire-machine",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:00",
    "name": "Compagnie Noire Machine",
    "artist": "Compagnie Noire Machine",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Zirkustheater mit chinesischem Mast, Jonglage und Pantomime",
    "description": "SMILE ist eine herzerwärmende und humorvolle Zirkusperformance ohne Sprache, in dem die Zirkusartist*innen Achille Piot und Theresa Zinser einem umherfliegendem, wandelbaren Lächeln begegnen und sich auf ein gemeinsames Abenteuer mit ihm einlassen."
  },
  {
    "id": "25-05-14-15-neue-pumpe-arsen",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:15",
    "name": "Arsen",
    "artist": "Arsen",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Melodic Power Rock"
  },
  {
    "id": "25-05-14-30-heilig-kreuz-kirche-tanz-poesie-der-derwische",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:30",
    "name": "Tanz & Poesie der Derwische",
    "artist": "Tanz & Poesie der Derwische",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ],
    "sourceText": "Sufi-Zentrum Rabbaniyya"
  },
  {
    "id": "25-05-14-30-rasen-in-aktion-berliner-grossfiguren",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:30",
    "name": "Berliner Grossfiguren",
    "artist": "Berliner Grossfiguren",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Impro-Figurentheater",
    "description": "Wo kommen wir her? Wo gehen wir hin? Spaghetti oder Kekse? Den wirklich wichtigen Fragen im Leben ist Professor Wuschel mit Euch auf der Spur…"
  },
  {
    "id": "25-05-14-30-shantytown-was-bewegt-dich",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:30",
    "name": "# WAS BEWEGT DICH",
    "artist": "# WAS BEWEGT DICH",
    "stage": "shantYtown",
    "types": [
      "Performance"
    ],
    "sourceText": "Tanz Performance",
    "description": "Eine Tanz- Performance der Karnevals- Fuß- Gruppe des motion*s Tanzstudio in Berlin Kreuzberg und der Bühnenkunstschule Academy. Vom Umzug bis zum Straßenfest direkt nach shantYtown: #WAS BEWEGT DICH?"
  },
  {
    "id": "25-05-14-30-shantytown-bike-stunt-berlin",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:30",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "25-05-14-30-sound-avenue-mtchl",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "14:30",
    "name": "MTCHL",
    "artist": "MTCHL",
    "stage": "Sound Avenue",
    "types": [
      "Hip-Hop",
      "Pop"
    ],
    "sourceText": "Neo-Soul, Pop und R&B"
  },
  {
    "id": "25-05-15-00-heilig-kreuz-kirche-wir-weigern-uns-feinde-zu-sein-",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:00",
    "name": "»Wir weigern uns Feinde zu sein«",
    "artist": "»Wir weigern uns Feinde zu sein«",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Other"
    ],
    "sourceText": "Worte und Klänge der Versöhnung"
  },
  {
    "id": "25-05-15-00-rasen-in-aktion-abad-capoeira-schule-berlin",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:00",
    "name": "Abadá-Capoeira-Schule-Berlin",
    "artist": "Abadá-Capoeira-Schule-Berlin",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian",
      "Afro"
    ],
    "sourceText": "Capoeira-Roda für Jugendliche und Erwachsene",
    "description": "Capoeira ist eine von afrikanischen Sklaven entwickelte Kampfkunst aus Brasilien. Nach 400 Jahren heute eine Kunst und Kultur mit Kampf, Musik und Akrobatik, viel Kameradschaft und einer Riesenmenge an Spaß!"
  },
  {
    "id": "25-05-15-00-rasen-in-aktion-luciana-arcuri",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:00",
    "name": "Luciana Arcuri",
    "artist": "Luciana Arcuri",
    "stage": "Rasen in Aktion",
    "types": [
      "Other"
    ],
    "sourceText": "Improvisation",
    "description": "Eine spontane Improvisation mit der Clownin Maria Eugenia, bei der Ihr von ihrer Ausstrahlung, Magie, Musik und Witzen überrascht werden könnt."
  },
  {
    "id": "25-05-15-00-shantytown-tanzen3000-mit-tal-siano",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:00",
    "name": "TANZEN3000 mit Tal Siano",
    "artist": "TANZEN3000 mit Tal Siano",
    "stage": "shantYtown",
    "types": [
      "Performance",
      "Workshop"
    ],
    "sourceText": "Movement-Workshop",
    "description": "Eine Stunde geführter Workshop. Unsere Mission ist es, Menschen zu ermutigen und zu inspirieren, WIRKLICH ZU TANZEN. Verbinde Dich mit deinem Körper, verbinde Dich mit deinen Emotionen, verbinde Dich mit dem Kollektiv."
  },
  {
    "id": "25-05-15-30-klang-plaza-alafia-con-ir-",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:30",
    "name": "Alafia con Iré",
    "artist": "Alafia con Iré",
    "stage": "Klang Plaza",
    "types": [
      "Cuban",
      "Afro"
    ],
    "sourceText": "Kubanische Rumba / Afrokubanische Musik",
    "description": "Alafia con Iré ist eine kubanische Musikgruppe in Berlin, die die Tradition der afrokubanischen Musik und insbesondere auch der kubanischen Rumba auf die Bühne bringt und auch eigene Kompositionen spielt."
  },
  {
    "id": "25-05-15-30-neue-pumpe-river-rats",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:30",
    "name": "River Rats",
    "artist": "River Rats",
    "stage": "Neue Pumpe",
    "types": [
      "Cuban",
      "Jazz"
    ],
    "sourceText": "Französischer Chanson, Swing"
  },
  {
    "id": "25-05-15-30-rasen-in-aktion-compagnie-noire-machine",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:30",
    "name": "Compagnie Noire Machine",
    "artist": "Compagnie Noire Machine",
    "stage": "Rasen in Aktion",
    "types": [
      "Performance"
    ],
    "sourceText": "Zirkustheater mit chinesischem Mast, Jonglage und Pantomime",
    "description": "SMILE ist eine herzerwärmende und humorvolle Zirkusperformance ohne Sprache, in dem die Zirkusartist*innen Achille Piot und Theresa Zinser einem umherfliegendem, wandelbaren Lächeln begegnen und sich auf ein gemeinsames Abenteuer mit ihm einlassen."
  },
  {
    "id": "25-05-15-30-shantytown-qi-gong-und-viet-vo-dao-kung-fu-hai-tan",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:30",
    "name": "Qi Gong und Viet Vo Dao Kung Fu HAI TAN",
    "artist": "Qi Gong und Viet Vo Dao Kung Fu HAI TAN",
    "stage": "shantYtown",
    "types": [
      "Workshop"
    ],
    "sourceText": "Workshop mit Joulia Strauss"
  },
  {
    "id": "25-05-15-45-heilig-kreuz-kirche-kl-nge-und-tanz-der-alewiten",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "15:45",
    "name": "Klänge und Tanz der Alewiten",
    "artist": "Klänge und Tanz der Alewiten",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ]
  },
  {
    "id": "25-05-16-00-rasen-in-aktion-samba-reggae-berlin",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "16:00",
    "name": "Samba Reggae Berlin",
    "artist": "Samba Reggae Berlin",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian",
      "Reggae",
      "Jazz"
    ],
    "sourceText": "Berliner Trommlerfusion spielt den Groove aus Bahia",
    "description": "Einmal im Monat treffen sich in der ufa Fabrik Percussionisten aus verschiedenen Berliner und bundesweiten Gruppen um ihre Begeisterung an den Samba-Reggae-Rhythmen zu teilen. Ein Terra Brasilis Projekt."
  },
  {
    "id": "25-05-16-00-shantytown-pascal-de-lacaze",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "16:00",
    "name": "PASCAL de Lacaze",
    "artist": "PASCAL de Lacaze",
    "stage": "shantYtown",
    "types": [
      "Caribbean",
      "Electro",
      "Reggae",
      "Performance"
    ],
    "sourceText": "Downtempo, Tropical, Dancehall, Bass House und Live Percussion",
    "description": "DJ Pascal de Lacaze von Ecstatic Dance Berlin rockt die Hütte. Schwing die Hüften zu Downtempo, Tropical, Dancehall und Bass House und lass Dich noch mal ordentlich von Pascals dynamischer Live-Percussion durchschütteln! Tanzen? Auf jeden!"
  },
  {
    "id": "25-05-16-00-sound-avenue-mani-simon",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "16:00",
    "name": "Mani Simon",
    "artist": "Mani Simon",
    "stage": "Sound Avenue",
    "types": [
      "Hip-Hop",
      "Pop"
    ],
    "sourceText": "Pop, Soul und Hip-Hop"
  },
  {
    "id": "25-05-16-15-heilig-kreuz-kirche-interreligi-ses-friedensgebet",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "16:15",
    "name": "Interreligiöses Friedensgebet",
    "artist": "Interreligiöses Friedensgebet",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ],
    "sourceText": "»Die Versöhnung stärken«"
  },
  {
    "id": "25-05-16-30-shantytown-bike-stunt-berlin",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "16:30",
    "name": "Bike Stunt Berlin",
    "artist": "Bike Stunt Berlin",
    "stage": "shantYtown",
    "types": [
      "Other"
    ],
    "sourceText": "Stunt Show"
  },
  {
    "id": "25-05-17-00-klang-plaza-canto-di-spora",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "17:00",
    "name": "Canto Diáspora",
    "artist": "Canto Diáspora",
    "stage": "Klang Plaza",
    "types": [
      "Latin"
    ],
    "sourceText": "Lateinamerikanische Folklore",
    "description": "Canto Diáspora ist ein Berliner Frauenvokalensemble unter der Leitung von Carolina Riaño. Stimmen aus Lateinamerika verbinden Tradition und Gegenwart – getragen von Zusammenhalt, Erinnerung und sinnlicher gemeinsamer Kraft."
  },
  {
    "id": "25-05-17-00-neue-pumpe-nilipek",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "17:00",
    "name": "Nilipek",
    "artist": "Nilipek",
    "stage": "Neue Pumpe",
    "types": [
      "Pop"
    ],
    "sourceText": "Singer Songwriter, Indie Pop"
  },
  {
    "id": "25-05-17-00-rasen-in-aktion-cortejo-baiano",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "17:00",
    "name": "Cortejo Baiano",
    "artist": "Cortejo Baiano",
    "stage": "Rasen in Aktion",
    "types": [
      "Brazilian",
      "Afro",
      "Performance"
    ],
    "sourceText": "afro-brasilianische Percussion",
    "description": "Der Cortejo Baiano aus Berlin spielt die Rhythmen der Blocos Afro aus Salvador da Bahia. Energiegeladene Grooves von Ilê Aiyê, Olodum, Malê Debalê und vielen weiteren Blocos laden zum Tanzen ein."
  },
  {
    "id": "25-05-17-00-sound-avenue-mavert",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "17:00",
    "name": "MaVert",
    "artist": "MaVert",
    "stage": "Sound Avenue",
    "types": [
      "Afro",
      "Electro"
    ],
    "sourceText": "Afro electronic sounds"
  },
  {
    "id": "25-05-17-45-heilig-kreuz-kirche-begegnung",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "17:45",
    "name": "Begegnung",
    "artist": "Begegnung",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Other"
    ]
  },
  {
    "id": "25-05-19-00-heilig-kreuz-kirche-orgel-und-abschlusssegen",
    "day": "Montag",
    "dayOrder": 4,
    "date": "25/05",
    "time": "19:00",
    "name": "Orgel und Abschlusssegen",
    "artist": "Orgel und Abschlusssegen",
    "stage": "Heilig-Kreuz-Kirche",
    "types": [
      "Performance"
    ]
  }
];
