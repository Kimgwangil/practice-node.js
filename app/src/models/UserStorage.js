"use strict";

const fs = require("fs").promises;
class UserStorage {
  static #getuserInfo(data, id) {
    const users = JSON.parse(data);
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});
    
    return userInfo;
  }

  static getUsers(...fields) {
    // const users = this.#users
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
  
  static getUserInfo(id) {
    return fs
      .readFile("./src/databases/users.json")
      .then((data) => {
        return this.#getuserInfo(data, id)
      })
      .catch(console.error);
  }
  
  static save(userInfo) {
    // const users = this.#users;
    users.id.push(userInfo.id);
    users.id.push(userInfo.name);
    users.id.push(userInfo.passsword);

  }
}

module.exports = UserStorage;