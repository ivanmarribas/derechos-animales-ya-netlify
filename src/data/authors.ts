export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Adrián López Galera",
    slug: "adrian",
    image: "https://derechosanimalesya.org/wp-content/uploads/sites/5/2022/01/Adrian-Lopez-Galera-Foto-carne-completa-reducida-2020.jpg",
    bio: " Grado en Biología. Máster en Estudios Lingüísticos, Literarios y Culturales. Amplia experiencia en Derechos Animales, Escritura Creativa y Administración de sistemas informáticos.",
  },
];
