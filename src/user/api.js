let counter = 3;
let users = [
  {
    id: 1,
    name: "Jan",
    surname: "Novák",
    job: "Designer"
  },
  {
    id: 2,
    name: "Tomáš",
    surname: "Dvořák",
    job: "Web devoloper"
  },
  {
    id: 3,
    name: "Pavel",
    surname: "Svoboda",
    job: "Writer"
  }
];

const fakePromise = (data, err) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (err) reject(err);
      else resolve(data);
    }, 1000);
  });
};

const getUsers = () => {
  return fakePromise(
    users.map(user => {
      return { id: user.id, name: user.name, surname: user.surname };
    })
  );
};

const getUser = id => {
  const u = users.find(user => user.id === id);
  if (u) return fakePromise(u);
  else
    return fakePromise(null, {
      code: "NOT_FOUND",
      message: "User does not exist."
    });
};

const removeUser = id => {
  const user = users.find(u => u.id === id);
  if (user) {
    users = users.filter(u => u.id !== id);
    return fakePromise({ massage: "User has been deleted." });
  } else {
    return fakePromise(null, {
      code: "NOT_FOUND",
      message: "User does not exist."
    });
  }
};

const addUser = (name, surname, job) => {
  // todo validation
  console.log("ADD USER");
  counter++;
  const id = counter;
  users.push({ id, name, surname, job });
  return fakePromise({
    id,
    message: "New user has been added."
  });
};

const updateUser = (id, name, surname, job) => {
  // todo validation
  const user = users.find(u => u.id === id);
  if (user) {
    if (name !== undefined) user.name = name;
    if (surname !== undefined) user.surname = surname;
    if (job !== undefined) user.job = job;
    return fakePromise({ message: "User has been updated." });
  } else {
    return fakePromise(null, {
      code: "NOT_FOUND",
      message: "User does not exist."
    });
  }
};

module.exports = {
  getUsers,
  removeUser,
  addUser,
  updateUser,
  getUser
};
