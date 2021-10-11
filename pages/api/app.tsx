import { Operator } from "../../common/types";

const fakeOperators: Operator[] = [
  {
    id: 1,
    name: "МТС",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/MTS_logo_2015.svg",
  },
  {
    id: 2,
    name: "Билайн",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/7/7a/BeeLine_logo.png",
  },
  {
    id: 3,
    name: "Мегафон",
    logoURL:
      "https://upload.wikimedia.org/wikipedia/commons/9/9e/MegaFon_logo.svg",
  },
];

export const getOperators = (): Promise<Operator[]> => {
  return new Promise<Operator[]>((resolve) => {
    setTimeout(() => resolve(fakeOperators), 2000);
  });
};
