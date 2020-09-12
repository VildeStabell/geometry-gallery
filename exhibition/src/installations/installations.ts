import { Circle, Rect } from "./shapes";

const installation1 = {
  shapes: [
    new Rect("r1", "0", "0", "350", "350", "#4e4e4e", "#4e4e4e"),
    new Circle("c1", "156", "78", "30", "0", "black", "black"),
    new Circle("c2", "130", "276", "60", "0", "black", "black"),
    new Circle("c3", "300", "175", "35", "0", "black", "black"),
    new Circle("c4", "275", "40", "20", "0", "black", "black"),
    new Circle("c5", "60", "200", "30", "0", "black", "black"),
    new Circle("c6", "25", "30", "40", "0", "black", "black"),
    new Circle("c7", "270", "350", "55", "0", "black", "black"),
  ],
  title: "Dark dots",
  year: 2000,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1gAzs4UwdenQmNbEm9mdDIunb8Ef-kn5i",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem1",
};
const installation2 = {
  shapes: [
    new Rect("r2", "0", "0", "350", "350", "#f7c4d4", "#f7c4d4"),
    new Circle("c8", "32", "78", "30", "0", "white", "white"),
    new Circle("c9", "175", "100", "30", "0", "white", "white"),
    new Circle("c10", "100", "200", "10", "0", "white", "white"),
  ],
  title: "Polka",
  year: 1952,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=13-YgFevw6zqpnV96zCkuvxCZL9ij7FvA",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem2",
};
const installation3 = {
  shapes: [
    new Rect("r2", "0", "0", "350", "350", "#ecb5ff", "#ecb5ff"),
    new Circle("c11", "175", "175", "150", "50", "white", "#6bffb5"),
    new Circle("c12", "175", "175", "100", "50", "white", "#6bffb5"),
    new Circle("c13", "175", "175", "50", "50", "white", "#6bffb5"),
  ],
  title: "Changing colors",
  year: 1974,
  artist: "Mary Cassatt",
  audioUrl:
    "https://docs.google.com/uc?export=download&id=1DIDOj7PlYM0XczQKTlmK5zbr_jwn4nNB",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem3",
};
const installation5 = {
  shapes: [
    new Circle("c14", "100", "75", "35", "3", "black", "black"),
    new Circle("c15", "70", "55", "15", "3", "blue", "blue"),
    new Circle("c16", "30", "105", "25", "3", "red", "red"),
  ],
  title: "Please name me",
  year: 2024,
  artist: "No idea",
  audioUrl: "",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem5",
};
const installation4 = {
  shapes: [
    new Rect("r1", "100", "100", "100", "100", "green", "yellow"),
    new Rect("r2", "50", "50", "100", "100", "green", "yellow"),
    new Rect("r3", "0", "0", "100", "100", "green", "yellow"),
  ],
  title: "Title",
  year: 1997,
  artist: "Him",
  audioUrl: "",
  poemUrl:
    "https://poetrydb.org/title/The%20words%20the%20happy%20say/lines.json",
  poemId: "poem4",
};
export const installations = [
  installation1,
  installation2,
  installation3,
  installation4,
  installation5,
];

export const createShape = (shape: Object): Object => {
  if (shape instanceof Circle) {
    return shape.createCircle();
  }
  if (shape instanceof Rect) {
    return shape.createRect();
  }
  return false;
};