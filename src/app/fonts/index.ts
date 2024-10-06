import localFont from "next/font/local";

export const fontBonobo = localFont({
  src: [
    {
      path: "./bonobo/BonoboRegular.ttf",
      weight: "400",
    },
    {
      path: "./bonobo/BonoboItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./bonobo/BonoboSemiBold.ttf",
      weight: "600",
    },
    {
      path: "./bonobo/BonoboSemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./bonobo/BonoboBold.ttf",
      weight: "700",
    },
    {
      path: "./bonobo/BonoboBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-bonobo",
});

export const fontZelda = localFont({
  src: [
    {
      path: "./TheWildBreathOfZelda.otf",
      weight: "400",
    },
  ],
  variable: "--font-zelda",
});

export const fontRockNRollOne = localFont({
  src: [
    {
      path: "./RocknRollOne.ttf",
      weight: "400",
    },
  ],
  variable: "--font-rock-n-roll-one",
});
