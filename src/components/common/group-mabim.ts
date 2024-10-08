export type Mentee = {
  id: string;
  name: string;
};

export type GroupMabim = {
  id: number;
  code: string;
  name: string;
  color: string;
  mentor: {
    name: string;
    phone: string;
    image: string | null;
  };
  mentees: Mentee[];
};

const metadata = {
  skill: "comedy",
  stats: 7,
  description:
    "Meskipun orangnya lucu, kang rafa ini sangat baik dan perhatian loh!",
};

export const groupMabim: GroupMabim[] = [
  {
    id: 1,
    code: "VT",
    name: "vortex",
    color: "#000000",
    mentor: {
      name: "RAFA GYIZA RASHIEKA",
      phone: "+6281336096291",
      image: null,
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
];
