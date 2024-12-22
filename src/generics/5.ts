export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Record для типізації
const RoleDescription: Record<UserRole, string> = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};

// Приклад
console.log(RoleDescription[UserRole.admin]);  // "Admin User"
console.log(RoleDescription[UserRole.guest]); // "Guest User"