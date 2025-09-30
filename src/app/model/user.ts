export interface UserInterface {
  id: number,
  name: string
}

export class User implements UserInterface {

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  id: number;
  name: string;
}
