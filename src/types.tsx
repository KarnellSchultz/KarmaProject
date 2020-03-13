export interface SystemState {
  posts: any[];
  loading: boolean;
  hadErrors: boolean;
}

export interface SinglePostState {
  userID: number;
  id: number;
  title: string;
  body: string;
}
