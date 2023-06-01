export class Article {
  id: number;
  isPublished: boolean;
  authorId: number;
  constructor(id: number, isPublished: boolean, authorId: number) {
    this.id = id;
    this.isPublished = isPublished;
    this.authorId = authorId;
  }
}
