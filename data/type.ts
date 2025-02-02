import { StaticImageData } from "next/image";

export interface SliderContentProps {
  subtitle: string;
  title: string;
  strongParagraph: string;
  paragraph: string;
  image: StaticImageData;
}

export interface CounterProps {
  targetNumber: any;
  before?: string;
  after?: string;
}

export interface CardType {
  title: string;
  paragraph: string;
  image: string;
  duration: number;
}