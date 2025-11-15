const informations = [
    /* {
    image: 'https://www.stevenvanbelleghem.com/content/uploads/2023/11/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg',
    title: 'Urgensi aktivasi bus trans Malang',
    date: '12 Januari 2024',
    by: 'Radar Malang',
    url: 'https://radarmalang.jawapos.com/read/2024/01/12/286/259/urgensi-aktivasi-bus',
}, {
    image: 'https://www.stevenvanbelleghem.com/content/uploads/2023/11/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg',
    title: 'Pemerintah Kota Malang akan mengaktifkan BTS',
    date: '10 Februari 2024',
    by: 'Radar Malang',
    url: 'https://radarmalang.jawapos.com/read/2024/01/12/286/259/urgensi-aktivasi-bus',
}, {
    image: 'https://www.stevenvanbelleghem.com/content/uploads/2023/11/Heavy-rains-lash-Delhi-NCR-traffic-snarls-at-many-places.jpg',
    title: 'Kota Malang semakin macet karena transportasi pribadi',
    date: '12 Maret 2024',
    by: 'Radar Malang',
    url: 'https://radarmalang.jawapos.com/read/2024/01/12/286/259/urgensi-aktivasi-bus',
} */
]

const map =
    'https://drive.google.com/drive/folders/1fo-YfCFXPSvuvQjlIqhF1Zgdwk2PE7qz?usp=drive_link'

const telegram = 'https://t.me/transportformalang'

const email = 'fdtmalang@gmail.com'

const url = 'https://tfmalang.github.io/'

const twitter = 'https://twitter.com/tf_malang'

const instagram = 'https://www.instagram.com/transportformalang/'

const contacts = [
    {
        name: 'Telegram',
        href: telegram,
        icon: 'mdi mdi-forum',
        text: telegram,
    },
    {
        name: 'Email',
        href: `mailto:${email}`,
        icon: 'mdi mdi-email-multiple-outline',
        text: email,
    },
]

const socials = [
    {
        name: 'Web page',
        href: url,
        icon: 'mdi mdi-web',
    },
    /*  {
    name: 'Facebook',
    href: 'https://www.facebook.com/internationalaffairsUM',
    icon: 'mdi mdi-facebook',
}, */ {
        name: 'Instagram',
        href: instagram,
        icon: 'mdi mdi-instagram',
    },
    /* {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC1XP5w9EUyHGsKdZJU-awcQ/',
    icon: 'mdi mdi-youtube',
}, */ {
        name: 'Twitter',
        href: twitter,
        icon: 'mdi mdi-twitter',
    },
]

const links = [
    {
        url: url,
        name: 'Situs',
        icon: 'mdi-open-in-new',
    },
    {
        url: telegram,
        name: 'FDTM Telegram',
        icon: 'mdi-forum',
    },
    {
        url: map,
        name: 'Peta Transportasi Malang',
        icon: 'mdi-map',
    },
    {
        url: twitter,
        name: 'Twitter / X',
        icon: 'mdi-twitter',
    },
    {
        url: instagram,
        name: 'Instagram',
        icon: 'mdi-instagram',
    },
]

const chibiconGames = {
    images: [
        {
            image: 'qna/ww.jpg',
            question: 'Branding e kendaraan iki opo?',
            answer: 'WIRAWIRI',
        },
        {
            image: 'qna/2l.jpg',
            question: 'Koridor endi bus iki?',
            answer: '2L',
        },
        {
            image: 'qna/3l.jpg',
            question: 'Koridor endi bus iki?',
            answer: '3L',
        },
        {
            image: 'qna/krd.jpg',
            question: 'Tipe sepur iki opo?',
            answer: 'KRD',
        },
        {
            image: 'qna/krl.jpg',
            question: 'Tipe sepur iki opo?',
            answer: 'KRL',
        },
        {
            image: 'qna/r4.jpg',
            question: 'Koridor endi bus iki?',
            answer: 'R4',
        },
        {
            image: 'qna/r1.jpg',
            question: 'Koridor endi bus iki?',
            answer: 'R1',
        },
        {
            image: 'qna/whoosh.jpg',
            question: 'Branding e opo sepur iki?',
            answer: 'WHOOSH',
        },
    ],
    shuffles: [
        {
            word: 'SALINT',
            answers: [
                'LINTAS',
                'STALIN',
                'SILAT',
                'SALIN',
                'NASAL',
                'LISAN',
                'SIAL',
                'SALI',
                'SILA',
                'LAIN',
                'NASI',
                'TALI',
                'ALIS',
                'TAN',
                'LAN',
                'SAL',
                'LIS',
                'TAS',
                'LAS',
            ],
        },
        {
            word: 'DANTIK',
            answers: [
                'DAN',
                'TAN',
                'KIT',
                'NIK',
                'ANTI',
                'DAKI',
                'DANI',
                'KITA',
                'KAIN',
                'TINA',
                'NADI',
                'KANDI',
                'DATIN',
                'ANTIK',
            ],
        },
    ],
    guess: [
        {
            question: 'Apa jeneng pasar sing ono rel e nang ngisor?',
            answers: ['PGS'],
            options: ['PGS', 'Pasar Besar', 'Pasar Splendid', 'Pasar Genteng'],
        },
        {
            question: 'Terminus e R1 nang endi ae?',
            answers: ['Perak', 'Bungurasih'],
            options: ['Perak', 'Bungurasih', 'Darmo', 'Citraland'],
        },
        {
            question: 'Terminus e R4 nang endi?',
            answers: ['Bungurasih', 'UNAIR'],
            options: ['Bungurasih', 'UNAIR', 'ITS', 'MERR'],
        },
        {
            question: 'Transum opo sing iso mudun nang Jembatan Merah?',
            answers: ['R1'],
            options: ['R1', 'R4', '2L', '3L'],
        },
        {
            question: 'Halte UNESA dadi terminus transum opo ae?',
            answers: ['FD8', '2L'],
            options: ['FD8', '2L', 'FD3', 'FD6'],
        },
        {
            question: 'Layanan transum opo sing iso muduk nang Al Akbar?',
            answer: 'FD9',
            options: ['FD9', 'FD3', 'FD6', '2L'],
        },
        {
            question: 'Layanan opo sing iso nyambungne RSUD Soetomo karo ITS?',
            answers: ['2L'],
            options: ['FD8', 'FD3', 'FD6', '2L'],
        },
        {
            question: 'TIJ Joyoboyo dadi layanan terminus e feeder opo ae?',
            answers: ['FD3', 'FD6'],
            options: ['FD8', 'FD3', 'FD6', '2L'],
        },
        {
            question: 'Layanan transum opo sing wes iso kesambung antarkota?',
            answers: ['Trans Jatim'],
            options: ['Suroboyo Bus', 'Trans Semanggi', 'Trans Palu', 'Trans Jatim'],
        },
    ].map(guess => {
        guess.options = guess.options.map(option => {
            return {
                value: option,
                selected: false,
            }
        })
        return guess
    }),
}

export { informations, map, contacts, socials, links, /* wayfindings,  */ chibiconGames }
