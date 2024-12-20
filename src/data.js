const informations = [/* {
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
} */]

const map = 'https://drive.google.com/drive/folders/1fo-YfCFXPSvuvQjlIqhF1Zgdwk2PE7qz?usp=drive_link'

const telegram = 'https://t.me/transportformalang'

const email = 'fdtmalang@gmail.com'

const url = 'https://tfmalang.github.io/'

const twitter = 'https://twitter.com/tf_malang'

const instagram = 'https://www.instagram.com/transportformalang/'

const contacts = [ {
    name: 'Telegram',
    href: telegram,
    icon: 'mdi mdi-forum',
    text: telegram
}, {
    name: 'Email',
    href: `mailto:${email}`,
    icon: 'mdi mdi-email-multiple-outline',
    text: email
}]

const socials = [{
    name: 'Web page',
    href: url,
    icon: 'mdi mdi-web',
},/*  {
    name: 'Facebook',
    href: 'https://www.facebook.com/internationalaffairsUM',
    icon: 'mdi mdi-facebook',
}, */ {
    name: 'Instagram',
    href: instagram,
    icon: 'mdi mdi-instagram',
}, /* {
    name: 'YouTube',
    href: 'https://www.youtube.com/channel/UC1XP5w9EUyHGsKdZJU-awcQ/',
    icon: 'mdi mdi-youtube',
}, */ {
    name: 'Twitter',
    href: twitter,
    icon: 'mdi mdi-twitter',
}]

const links = [{
    url: url,
    name: 'Situs',
    icon: 'mdi-open-in-new'
}, {
    url: telegram,
    name: 'FDTM Telegram',
    icon: 'mdi-forum',
}, {
    url: map,
    name: 'Peta Transportasi Malang',
    icon: 'mdi-map',
}, {
    url: twitter,
    name: 'Twitter / X',
    icon: 'mdi-twitter',
}, {
    url: instagram,
    name: 'Instagram',
    icon: 'mdi-instagram',
}]

const wayfindings = [{
    id: 'E5F81DAA-752E-4E7D-BE9D-511837A3E1C3',
    title: 'Perempatan FIK UM',
    lat: -7.961012,
    lng: 112.617277,
    directions: [{
        rtl: false,
        color: 'primary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'exit-um',
        }, {
            type: 'exit-text',
        }, {
            type: 'box',
            context: 'number',
            value: 6
        }, {
            type: 'exits',
            values: [
                'Jl. Veteran',
                {
                    name: 'Perhentian Veteran',
                    lines: ['AL', 'GL']
                }
            ]
        }]
    }, {
        rtl: false,
        color: 'primary',
        rotate: 90,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'exit-um',
        }, {
            type: 'exit-text',
        }, {
            type: 'box',
            context: 'number',
            value: 1
        }, {
            type: 'exits',
            values: [
                'Jl. Jakarta',
                {
                    name: 'Perhentian Jakarta',
                    lines: ['AL', 'GL']
                }
            ]
        }]
    }, {
        rtl: true,
        color: 'primary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'exit-um',
        }, {
            type: 'exit-text',
        }, {
            type: 'box',
            context: 'number',
            value: 2
        }, {
            type: 'exits',
            values: [
                'Jl. Jakarta',
                {
                    name: 'Perhentian Jakarta',
                    lines: ['AL', 'GL']
                }
            ]
        }]
    }, {
        rtl: false,
        color: 'secondary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'lecture-building',
        }, {
            type: 'building',
        }, {
            type: 'large-text',
            value: 'FMIPA B18-B25'
        }, {
            type: 'walk',
            distance: 200,
        }]
    }, {
        rtl: false,
        color: 'secondary',
        rotate: 0,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'lecture-building',
        }, {
            type: 'building',
        }, {
            type: 'large-text',
            value: 'FV A25'
        }, {
            type: 'walk',
            distance: 500,
        }]
    }, {
        rtl: false,
        color: 'secondary',
        rotate: 90,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'lecture-building',
        }, {
            type: 'building',
        }, {
            type: 'large-text',
            value: 'GKB A19-A21'
        }, {
            type: 'walk',
            distance: 450,
        }]
    }, {
        rtl: true,
        color: 'secondary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'library',
        }, {
            type: 'multilang',
            id: 'Perpustakaan',
            en: 'Library',
        }, {
            type: 'walk',
            distance: 270,
        }]
    }, {
        rtl: true,
        color: 'secondary',
        rotate: 180,
        contents: [{
            type: 'arrow',
        }, {
            type: 'box',
            context: 'lecture-building',
        }, {
            type: 'building',
        }, {
            type: 'large-text',
            value: 'FT B8-B17'
        }, {
            type: 'walk',
            distance: 270,
        }]
    }]
}, {
    id: '7D733707-9AEE-41A0-A8A0-1CD7AC22B3CB',
    title: 'Masjid Al Hikmah',
    lat: -7.961409,
    lng: 112.617369,
    directions: [],
}, {
    id: '3106E67B-895D-4FA3-ABC1-86D049D5E061',
    title: 'Pertigaan arah GKB',
    lat: -7.962397,
    lng: 112.619869,
    directions: [],
}, {
    id: '7671B354-C4CC-4A2C-8E1A-60A8B5086AAA',
    title: 'Gracak & Exit 6 UM',
    lat: -7.961138,
    lng: 112.617498,
    directions: [],
}].map((wayfinding) => {
    wayfinding.route = `/wayfindings/${wayfinding.id}`
    return wayfinding
})

const chibiconGames = {
    images: [{
        image: 'qna/ww.jpg',
        question: 'Branding e kendaraan iki opo?',
        answer: 'WIRAWIRI',
    }, {
        image: 'qna/2l.jpg',
        question: 'Koridor endi bus iki?',
        answer: '2L',
    }, {
        image: 'qna/3l.jpg',
        question: 'Koridor endi bus iki?',
        answer: '3L',
    }, {
        image: 'qna/krd.jpg',
        question: 'Tipe sepur iki opo?',
        answer: 'KRD',
    }, {
        image: 'qna/krl.jpg',
        question: 'Tipe sepur iki opo?',
        answer: 'KRL',
    }, {
        image: 'qna/r4.jpg',
        question: 'Koridor endi bus iki?',
        answer: 'R4',
    }, {
        image: 'qna/r1.jpg',
        question: 'Koridor endi bus iki?',
        answer: 'R1',
    }, {
        image: 'qna/whoosh.jpg',
        question: 'Branding e opo sepur iki?',
        answer: 'WHOOSH',
    }],
    shuffles: [{
        word: 'SALINT',
        answers: [
            'LINTAS',
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
    }, {
        word: 'DANTIK',
        answers: [
            'DAN',
            'TAN',
            'KIT',
            'NIK',
            'KED',
            'DANI',
            'KITA',
            'KAIN',
            'TINA',
            'NADI',
            'KANDI',
            'DATIN',
            'ANTIK',
        ],
    }],
    guess: [{
        question: 'Apa jeneng pasar sing ono rel e nang ngisor?',
        answers: ['PGS'],
        options: ['PGS', 'Pasar Besar', 'Pasar Splendid', 'Pasar Genteng'],
    }, {
        question: 'Terminus e R1 nang endi ae?',
        answers: ['Perak', 'Bungurasih'],
        options: ['Perak', 'Bungurasih', 'Darmo', 'Citraland'],
    }, {
        question: 'Terminus e R4 nang endi?',
        answers: ['Bungurasih', 'UNAIR'],
        options: ['Bungurasih', 'UNAIR', 'ITS', 'MERR'],
    }, {
        question: 'Transum opo sing iso mudun nang Jembatan Merah?',
        answers: ['R1'],
        options: ['R1', 'R4', '2L', '3L'],
    }, {
        question: 'Halte UNESA dadi terminus transum opo ae?',
        answers: ['FD8', '2L'],
        options: ['FD8', '2L', 'FD3', 'FD6'],
    }, {
        question: 'Layanan transum opo sing iso muduk nang Al Akbar?',
        answer: 'FD8',
        options: ['FD8', 'FD3', 'FD6', '2L'],
    }, {
        question: 'Layanan opo sing iso nyambungne RSUD Soetomo karo ITS?',
        answers: ['2L'],
        options: ['FD8', 'FD3', 'FD6', '2L'],
    }, {
        question: 'TIJ Joyoboyo dadi layanan terminus e feeder opo ae?',
        answers: ['FD3', 'FD6'],
        options: ['FD8', 'FD3', 'FD6', '2L'],
    }, {
        question: 'Layanan transum opo sing wes iso kesambung antarkota?',
        answers: ['Trans Jatim'],
        options: ['Suroboyo Bus', 'Trans Semanggi', 'Trans Palu', 'Trans Jatim']
    }].map((guess) => {
        guess.options = guess.options.map((option) => {
            return {
                value: option,
                selected: false
            }
        })
        return guess
    })
}

export { informations, map, contacts, socials, links, wayfindings, chibiconGames }