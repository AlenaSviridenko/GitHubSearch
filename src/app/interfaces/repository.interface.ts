export interface IRepository {
  id: number;
  name: string;
  fullName: string;
  ownerAvatar: string;
  branchesUrl: string;
  branches?: string[];
  description: string;
}
