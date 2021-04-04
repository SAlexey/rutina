export interface Signal {
  name: string;
  path: string;
}

interface Image {
  id: number;
}

type Gif = Image;
interface Video {
  id: number;
}

export interface Item {
  id: string;
  name: string;
  title: string;
  text: string;
}

export interface RutinaFrame extends Omit<Item, 'text'> {
  image: Image;
}

export interface RutinaStep extends Item {
  frames: RutinaFrame[] | Video | Gif;
}

export interface RutinaEvent extends Item {
  duration: number;
  signalOnStart: Signal;
  signalOnExec: Signal;
  signalOnEnd: Signal;
}

export interface Rutina extends Item {
  events: RutinaEvent[];
}
