export interface IRepository {
  id: number;
  name: string;
  full_name: string;
  ownerAvatar: string;
  branchesUrl: string;
  branches?: string[];
  description: string;
}
