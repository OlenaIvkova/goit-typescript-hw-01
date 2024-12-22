import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url);  
    return response.data;  
  } catch (error) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

//Ghbrkfl
interface User {
  name: string;
  age: number;
}

async function getUserData() {
  try {
    const user = await fetchData<User>('https://api.example.com/user');
    console.log(user); 
  } catch (error) {
    console.error(error);
  }
}

async function getPostsData() {
  try {
    const posts = await fetchData<Array<{ id: number; title: string }>>('https://api.example.com/posts');
    console.log(posts); 
  } catch (error) {
    console.error(error);
  }
}

getUserData(); 
getPostsData();

// const user: { name: string; age: number } = { name: 'Max', age: 30 };
// console.log(user);