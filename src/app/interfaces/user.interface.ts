export interface IUserModel {
  id: number;
  createdAt: string;
  updatedAt: string;
  displayname: string;
  username: string;
  email: string;
  paypal: string;
  password: string;
  bio: string;
  link_text: string;
  link_href: string;
  public: boolean;
  icon_link: string;
  icon_id: string;
  verified: boolean;
  certified: boolean;
  date_created: string;
  uuid: string;
}
