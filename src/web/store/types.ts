export interface CurrentUser {
  avatar?: string;
  name?: string;
  mobile?: string;
  token?: string;
  username?: string;
  id?: number;
  institutionId?: string;
  hash?: string;
  orgs?: {
    id: number;
    listTags: number[];
    shortName: string;
  };
  roles?: {
    id: number;
  };
}
