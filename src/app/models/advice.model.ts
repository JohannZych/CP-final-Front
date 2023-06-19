import {User} from "./user.model";

export class Advice {
  id: number;
  title: string;
  content: string;
  rating: number;
  user: User;

  constructor(id: number, title: string, content: string, rating: number, user: User) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.rating = rating;
    this.user = user;
  }
}
