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

export { informations, map, contacts, socials, links }