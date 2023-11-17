// client/src/auth.js
// Simulated user data
const mockUsers = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Simulated authentication function
async function authenticate(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        resolve(user);
      } else {
        reject(new Error('Authentication failed. Invalid credentials.'));
      }
    }, 1000); // Simulate delay for authentication
  });
}

export { authenticate };
