import { type StaticImageData } from "next/image";

import imgAurora from "@/assets/mentors/aurora.webp";
import imgKnoppix from "@/assets/mentors/knoppix.webp";
import imgLinux from "@/assets/mentors/linux.webp";
import imgNebula from "@/assets/mentors/nebula.webp";
import imgNexus from "@/assets/mentors/nexus.webp";
import imgNix from "@/assets/mentors/nix.webp";
import imgVortex from "@/assets/mentors/vortex.webp";
import imgZenith from "@/assets/mentors/zenith.webp";
import imgZephyr from "@/assets/mentors/zephyr.webp";

export type Mentee = {
  id: string;
  name: string;
};

export type GroupMabim = {
  id: number;
  code: string;
  name: string;
  mentor: {
    name: string;
    phone: string;
    image: StaticImageData | null;
    metadata: {
      skill: string;
      stats: number;
      description: string;
    };
  };
  mentees: Mentee[];
};

export const groupMabim: GroupMabim[] = [
  {
    id: 1,
    code: "VT",
    name: "Vortex",
    mentor: {
      name: "Kang Rafa Gyiza",
      phone: "+6281336096291",
      image: imgVortex,
      metadata: {
        skill: "Lawak",
        stats: 7,
        description:
          "Meskipun orangnya lucu, kang rafa ini sangat baik dan perhatian loh!",
      },
    },

    mentees: [
      {
        id: "VT01",
        name: "Sandy Saputra",
      },
      {
        id: "VT02",
        name: "Niranti Salmanabilah",
      },
      {
        id: "VT03",
        name: "Hilmi Mithwa Ramadhan",
      },
      {
        id: "VT04",
        name: "Virgiano Fadhil",
      },
      {
        id: "VT05",
        name: "Karina Fauzia Setiadi",
      },
      {
        id: "VT06",
        name: "Ghassan Ariq Muzakki",
      },
      {
        id: "VT07",
        name: "Adzril Ilham Ramadhan",
      },
      {
        id: "VT08",
        name: "Ikhsan Nurul Haq",
      },
      {
        id: "VT09",
        name: "Muhammad Yasir Royyan",
      },
      {
        id: "VT10",
        name: "Juan Rezel Oktara Ramadhan",
      },
      {
        id: "VT11",
        name: "Muhammad Rizal Nurfuadi",
      },
    ],
  },
  {
    id: 2,
    code: "LX",
    name: "Linux",
    mentor: {
      name: "Kang Asep Nadhirin",
      phone: "+628122350650962",
      image: imgLinux,
      metadata: {
        skill: "Temen Sammy",
        stats: 2,
        description:
          "Hati-hati dengan orang ini ya! Harap Waspada! Oke singkat saja!, Paham!",
      },
    },
    mentees: [
      {
        id: "LX01",
        name: "Muhammad Raihan Ananditha",
      },
      {
        id: "LX02",
        name: "Naufal Zahran Fadhlurrohman",
      },
      {
        id: "LX03",
        name: "Sina Pijar Sahmura",
      },
      {
        id: "LX04",
        name: "Nugra Hasahatan Lubis",
      },
      {
        id: "LX05",
        name: "Marwa Aulia Lukman",
      },
      {
        id: "LX06",
        name: "Zahran Faiz Salman",
      },
      {
        id: "LX07",
        name: "Mirachel Cindejona",
      },
      {
        id: "LX08",
        name: "DZAKY ALIFIANSYAH RAMDANI",
      },
      {
        id: "LX09",
        name: "Tariq Ahmad",
      },
      {
        id: "LX10",
        name: "Muhammad Akmal Romdhoni",
      },
      {
        id: "LX11",
        name: "Moch Yussar Rizky",
      },
      {
        id: "LX11",
        name: "Moch. Yussar Rizky",
      },
    ],
  },
  {
    id: 3,
    code: "NB",
    name: "Nebula",
    mentor: {
      name: "Teh Laras",
      phone: "+628532247715362",
      image: imgNebula,
      metadata: {
        skill: "Cuan",
        stats: 3,
        description:
          "Aku adalah intel terpintar dari bulan yang siap menemani kalian! As blue as the sky, aku akan menemani kalian selama MABIM RPL 2024!",
      },
    },
    mentees: [
      {
        id: "NB01",
        name: "Ananda Alya Puteri Munggaran",
      },
      {
        id: "NB02",
        name: "Najwa Salsabila Putri",
      },
      {
        id: "NB03",
        name: "Rasya Fadil Arfiano",
      },
      {
        id: "NB04",
        name: "Rifdah Mahirah",
      },
      {
        id: "NB05",
        name: "Luthfil Hadi Surya Pangestu",
      },
      {
        id: "NB06",
        name: "Ahmad Fuad Mubarak",
      },
      {
        id: "NB07",
        name: "Ahmad Zaelani",
      },
      {
        id: "NB08",
        name: "Rafi Ghazy Athallah",
      },
      {
        id: "NB09",
        name: "Hasbi Khoirul Fikri Saputra ",
      },
      {
        id: "NB10",
        name: "Fajri Bagaskara Budi",
      },
    ],
  },
  {
    id: 4,
    code: "ZN",
    name: "Zenith",
    mentor: {
      name: "Teh Nurul Fauziah",
      phone: "+6289541301505562",
      image: imgZenith,
      metadata: {
        skill: "Listener",
        stats: 4,
        description:
          "Tersimpan dalam keheningan yang tertarik akan petualangan, happy to be good listener with you! Sampai ketemu di MABIM RPL 2024 ya!",
      },
    },
    mentees: [
      {
        id: "ZN01",
        name: "Raden Hamizan Rizky Kusuma",
      },
      {
        id: "ZN02",
        name: "Salsabila Restu Adriani",
      },
      {
        id: "ZN03",
        name: "Wisnu Firmansyah Handjoyo",
      },
      {
        id: "ZN04",
        name: "Nabila Ayla Putri",
      },
      {
        id: "ZN05",
        name: "Muhamad Iqbal Ramadhan",
      },
      {
        id: "ZN06",
        name: "Nabil Rizky Ramadhan Setiawan",
      },
      {
        id: "ZN07",
        name: "Harits Nur Allam Muhammad",
      },
      {
        id: "ZN08",
        name: "siti masdariah",
      },
      {
        id: "ZN09",
        name: "Anaqi Ahza Nashrullah",
      },
      {
        id: "ZN10",
        name: "Fikri Raditya Hutama",
      },
    ],
  },
  {
    id: 5,
    code: "AR",
    name: "Aurora",
    mentor: {
      name: "Teh Maryam Silva",
      phone: "+6289538327745362",
      image: imgAurora,
      metadata: {
        skill: "Menghitung",
        stats: 5,
        description:
          "Selalu tertarik dengan angka dan logika, aku sering kali menjabat sebagai sekretaris. Tapi kali ini aku siap menjadi navigator kalian di MABIM RPL 2024",
      },
    },
    mentees: [
      {
        id: "AR01",
        name: "Rafi Islami Pasha Dini Hari Putra",
      },
      {
        id: "AR02",
        name: "Febriansyah Nugraha",
      },
      {
        id: "AR03",
        name: "Vina Nur Nisa",
      },
      {
        id: "AR04",
        name: "Harmoni Natanael Simatupang",
      },
      {
        id: "AR05",
        name: "Ihsan Fathin Mohammed",
      },
      {
        id: "AR06",
        name: "Dwi Raysah Anandifa Kautsar",
      },
      {
        id: "AR07",
        name: "Ikhsanul Richi Fauzi",
      },
      {
        id: "AR08",
        name: "Resti Fujianti",
      },
      {
        id: "AR09",
        name: "Dwi Cahyo Wibisono",
      },
      {
        id: "AR10",
        name: "Louisy Novina P",
      },
    ],
  },
  {
    id: 6,
    code: "NX",
    name: "Nexus",
    mentor: {
      name: "Kang Bagas Adhi Nugraha",
      phone: "+628588572502762",
      image: imgNexus,
      metadata: {
        skill: "Yapping",
        stats: 6,
        description:
          "Aku adalah kadept Advokastra dan juga perwakilan RPL sebagai Putra Cibiru. Aku bakal menemani akang/teteh sebagai mentor!",
      },
    },
    mentees: [
      {
        id: "NX01",
        name: "Raissa Fasya Sabila",
      },
      {
        id: "NX02",
        name: "Kautsar Muhammad Mizan",
      },
      {
        id: "NX03",
        name: "Zaky Rizzan Zain",
      },
      {
        id: "NX04",
        name: "Ikbal Miftahudin",
      },
      {
        id: "NX05",
        name: "Muhammad Nawwaf Yazid Ikromi",
      },
      {
        id: "NX06",
        name: "Vasya Thabarani",
      },
      {
        id: "NX07",
        name: "Mohamad Firdiansyah",
      },
      {
        id: "NX08",
        name: "Mukhammad Vicky",
      },
      {
        id: "NX09",
        name: "Fathurrachman Muhammad Dzakiy",
      },
      {
        id: "NX10",
        name: "Dzaky Julian Putranto",
      },
    ],
  },
  {
    id: 7,
    code: "NI",
    name: "Nix",
    mentor: {
      name: "Teh Zahrah Nisrini Mumtaz",
      phone: "+628560970919462",
      image: imgNix,
      metadata: {
        skill: "Strong",
        stats: 7,
        description:
          "Anti manusia dan matahari, subjek ini mencerminkan sisi stereotipikal mahasiswa RPL. Namun sepertinya topik game dan matematika dapat mencairkan suasana ya?",
      },
    },
    mentees: [
      {
        id: "NI01",
        name: "Muhammad Haikal Akbar",
      },
      {
        id: "NI02",
        name: "Muhammad Ihsan Ansori",
      },
      {
        id: "NI03",
        name: "Aletha Zoya Fachira",
      },
      {
        id: "NI04",
        name: "Azka Fadhlan Ramadhan",
      },
      {
        id: "NI05",
        name: "Hanifi Raditya Nasution",
      },
      {
        id: "NI06",
        name: "Ahmad Hidayat",
      },
      {
        id: "NI07",
        name: "Cahya Abdul Aziz",
      },
      {
        id: "NI08",
        name: "Ilyassa Putra",
      },
      {
        id: "NI09",
        name: "Mahesa Syawal Abdurahman",
      },
      {
        id: "NI10",
        name: "Siti Amalia Putri",
      },
    ],
  },
  {
    id: 8,
    code: "KNO",
    name: "Knoppix",
    mentor: {
      name: "Kang Aldini Hegle",
      phone: "+628132421606062",
      image: imgKnoppix,
      metadata: {
        skill: "Basket",
        stats: 8,
        description:
          "You'll Never Walk Alone! Sampai ketemu di MABIMRPL 2024 ya!",
      },
    },
    mentees: [
      {
        id: "KNO01",
        name: "Rifky Muafy",
      },
      {
        id: "KNO02",
        name: "Salsabila Rahma Ramadhania",
      },
      {
        id: "KNO03",
        name: "Haidar Atqiya Rahman",
      },
      {
        id: "KNO04",
        name: "Muhammad Zaidan Rahman",
      },
      {
        id: "KNO05",
        name: "Muhammad Fadil Tallei",
      },
      {
        id: "KNO06",
        name: "Nandana Rafi Ardika",
      },
      {
        id: "KNO07",
        name: "Muhamad Ilham Akbar Porindo Rahaputra",
      },
      {
        id: "KNO08",
        name: "Hafizh iltizam ilham",
      },
      {
        id: "KNO09",
        name: "Ica Apriyanti Rahayu",
      },
      {
        id: "KNO10",
        name: "Saifulloh Fattah Bintoro",
      },
    ],
  },
  {
    id: 9,
    code: "ZR",
    name: "Zephyr",
    mentor: {
      name: "Teh Andina Renita",
      phone: "+6288214657919",
      image: imgZephyr,
      metadata: {
        skill: "Friendly",
        stats: 9,
        description:
          "Halo! Aku Ann, mentor kelompok Zephyr.  Aku siap mendampingi kalian di petualangan MABIM RPL 2024!",
      },
    },
    mentees: [
      {
        id: "ZR01",
        name: "Regina Nur Fadhilah",
      },
      {
        id: "ZR02",
        name: "Erik Klaus Keifas Kalalo",
      },
      {
        id: "ZR03",
        name: "Raihan Fauzi Rakhman",
      },
      {
        id: "ZR04",
        name: "Natasya Ramadhani",
      },
      {
        id: "ZR05",
        name: "Mursyid Daniswara",
      },
      {
        id: "ZR06",
        name: "Muhamad Ikshan Suherman",
      },
      {
        id: "ZR07",
        name: "Aziza Putri Amelia",
      },
      {
        id: "ZR08",
        name: "Rafli Ahmad Fauzi",
      },
      {
        id: "ZR09",
        name: "Malyhah Azizah",
      },
      {
        id: "ZR10",
        name: "Bintang Kurniawan",
      },
    ],
  },
];
