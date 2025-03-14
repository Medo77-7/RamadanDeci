class User {
  constructor(id, name, username,email, age, gender) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.age = age,
    this.email = email,
    this.gender = gender;
  }
  displayInfo() {
    console.log(Name: ${this.username}, Username: ${this.username}, Email: ${this.email}, Age: ${this.age}, Gender: ${this.gender});
  }
}

async function fetchUsers() {
    try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const usersData = data.users;
        const users = usersData.map(user => new User(user.id, user.firstName, user.lastName, user.email, user.age,user.gender));
        users.forEach(user => user.displayInfo());
    } catch (error) {
        console.error('Failed to fetch users:', error.message);
    }
}
fetchUsers();
