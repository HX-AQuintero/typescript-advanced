import { User, ROLES } from './01-enum';

// rest parameters
const currentUser: User = {
  username: 'alejoo',
  role: ROLES.CUSTOMER
}

export const checkAdminRole = () => {
  if(currentUser.role === ROLES.ADMIN){
    return true;
  }
  return false;
}

let check = checkAdminRole();
console.log(check); // false

//Haciendo el ejemplo un poco más completo:
export const checkRole = (role1: string, role2: string) => {
  if(currentUser.role === role1){
    return true;
  }
  if(currentUser.role === role2){
    return true;
  }
  return false;
}

let check1 = checkRole(ROLES.ADMIN, ROLES.SELLER);
console.log(check1); // false

//Enviando los roles como arreglo:
export const checkRole2 = (roles: string[]) => {
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

let check2 = checkRole2([ROLES.ADMIN, ROLES.SELLER]);
console.log(check2); // false

//Usando rest parameters:
export const checkRole3 = (...roles: string[]) => {
  if(roles.includes(currentUser.role)){
    return true;
  }
  return false;
}

let check3 = checkRole3(ROLES.ADMIN, ROLES.SELLER, ROLES.CUSTOMER);
console.log(check3); // true