export interface UsersInterface {
  id: number;
  profilePicture: string;
  username: string;
}
export interface PostsInterface {
  id: number;
  desc?: string;
  photo: string;
  date: string;
  userId: number;
  like: number;
  comment: number;
}
