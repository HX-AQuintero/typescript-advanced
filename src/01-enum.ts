export enum ROLES {
  ADMIN = 'admin',
  SELLER = 'seller',
  CUSTOMER = 'customer'
}

export type User = {
  username: string,
  role: ROLES
}

const alejoUser: User = {
  username: 'alejo123',
  role: ROLES.ADMIN,
}

