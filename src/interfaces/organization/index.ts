import { BlogInterface } from 'interfaces/blog';
import { ContentInterface } from 'interfaces/content';
import { DesignInterface } from 'interfaces/design';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  blog?: BlogInterface[];
  content?: ContentInterface[];
  design?: DesignInterface[];
  user?: UserInterface;
  _count?: {
    blog?: number;
    content?: number;
    design?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
