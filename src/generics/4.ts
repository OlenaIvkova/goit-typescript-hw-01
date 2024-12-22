type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

// Partial для типізації параметра
function createOrUpdateUser(initialValues: Partial<User>) {
  // Оновлення користувача
  console.log('Updated user:', initialValues);
}

// Приклад 
createOrUpdateUser({ 
  email: 'user@mail.com', 
  password: 'password123' 
});

createOrUpdateUser({
  name: 'John',
  surname: 'Doe',
});