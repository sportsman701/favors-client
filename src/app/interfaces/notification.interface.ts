import { IUserModel } from './user.interface';

export interface NotificationModel {
  id: number;
  createdAt: string;
  updatedAt: string;
  //
  from_id: number;
  to_id: number;
  action: string;
  target_type: string;
  target_id: number;
  message: string;
  link: string;
  read: boolean;
  image_link: string;
  image_id: string;
  date_created: string;
  uuid: string;
  //
  from?: IUserModel;
  to?: IUserModel;
}