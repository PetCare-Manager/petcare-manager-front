import { ImageSourcePropType } from "react-native";

export interface Breed {
  name: string;
  image: ImageSourcePropType;
}

export const breeds: Breed[] = [
  {
    name: "American Staffordshire Terrier",
    image: require("../assets/images/breeds/american standford.png"),
  },
  {
    name: "Beagle",
    image: require("../assets/images/breeds/beagle.png"),
  },
  {
    name: "Bichón Maltes",
    image: require("../assets/images/breeds/bichon maltes.png"),
  },
  {
    name: "Border Collie",
    image: require("../assets/images/breeds/border collie.png"),
  },
  {
    name: "Braco de Weimar",
    image: require("../assets/images/breeds/braco de weimar.png"),
  },
  {
    name: "Bulldog Francés",
    image: require("../assets/images/breeds/bulldog frances.png"),
  },
  {
    name: "Chihuahua",
    image: require("../assets/images/breeds/chihuahua.png"),
  },
  {
    name: "Cocker Spaniel",
    image: require("../assets/images/breeds/cocker spaniel.png"),
  },
  {
    name: "Doberman",
    image: require("../assets/images/breeds/doberman.png"),
  },
  {
    name: "Galgo",
    image: require("../assets/images/breeds/galgo.png"),
  },
  {
    name: "Golden Retriever",
    image: require("../assets/images/breeds/golden retriever.png"),
  },
  {
    name: "Husky",
    image: require("../assets/images/breeds/husky.png"),
  },
  {
    name: "Jack Russel",
    image: require("../assets/images/breeds/jack russel.png"),
  },
  {
    name: "Labrador",
    image: require("../assets/images/breeds/labrador.png"),
  },
  {
    name: "Pastor Aleman",
    image: require("../assets/images/breeds/pastor aleman.png"),
  },
  {
    name: "Pitbull",
    image: require("../assets/images/breeds/pitbull.png"),
  },
  {
    name: "San Bernardo",
    image: require("../assets/images/breeds/san bernardo.png"),
  },
  {
    name: "Shiba Inu",
    image: require("../assets/images/breeds/shiba inu.png"),
  },
  {
    name: "Shnauzer",
    image: require("../assets/images/breeds/shnauzer.png"),
  },
  {
    name: "Teckel",
    image: require("../assets/images/breeds/teckel.png"),
  },
  {
    name: "Yorkshire",
    image: require("../assets/images/breeds/yorkshire.png"),
  },
];
