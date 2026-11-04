import React from "react";

const Loop = () => {
  const userData = [
    {
      _id: 101,
      id: 1,
      name: "John",
      age: 30,
      email: "john@gmail.xyz",
    },
    {
      _id: 102,
      id: 2,
      name: "Smith",
      age: 31,
      email: "smith@gmail.xyz",
    },
    {
      _id: 103,
      id: 3,
      name: "Cynthia",
      age: 25,
      email: "cynthia@gmail.xyz",
    },
  ];
  return (
    <>
      <h1>Loop</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user._id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Loop;
