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
    mentees: [],
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
    mentees: [],
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
    mentees: [],
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
    mentees: [],
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
    mentees: [],
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
    mentees: [],
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
    mentees: [],
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
    mentees: [],
  },
];
