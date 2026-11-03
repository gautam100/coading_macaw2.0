import React from "react";

function Loop() {
  const userData = [
    {
      id: 1,
      name: "John",
      age: 30,
      email: "john@menubar.in",
    },
    {
      id: 2,
      name: "Smith",
      age: 25,
      email: "smith@me.in",
    },
    {
      id: 3,
      name: "cynthia",
      age: 31,
      email: "cynthia@xyz.in",
    },
  ];
  return (
    <>
      <h1>Loop</h1>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
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
}

export default Loop;
