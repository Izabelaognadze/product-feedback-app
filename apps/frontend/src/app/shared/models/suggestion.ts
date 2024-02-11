export interface Suggestions {
  suggestion: string;
  voteAmount: number;
  description: string;
  category: Category;
  comments: Comments;
}

export interface Comments {
  profileImg: string;
  fullName: string;
  userName: string;
  comment: string;
  reply: string[];
}

export enum Category {
  UI,
  UX,
  ENHANCEMENT,
  BUG,
  Feature,
}
