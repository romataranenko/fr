fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(users => {
    users.forEach(u => {
      console.log(`${u.id}. ${u.name} (${u.email}) — ${u.address.city}`);
    });
  })
  .catch(err => console.error('Ошибка:', err.message));
