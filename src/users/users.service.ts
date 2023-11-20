import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      first_name: "Taddeo",
      last_name: "Gatrill",
      email: "tgatrill0@naver.com",
      gender: "Male",
    },
    {
      id: 2,
      first_name: "Bari",
      last_name: "Willis",
      email: "bwillis1@godaddy.com",
      gender: "Female",
    },
    {
      id: 3,
      first_name: "Khalil",
      last_name: "Sturges",
      email: "ksturges2@jigsy.com",
      gender: "Male",
    },
    {
      id: 4,
      first_name: "Phip",
      last_name: "Libby",
      email: "plibby3@pinterest.com",
      gender: "Male",
    },
    {
      id: 5,
      first_name: "Ronnica",
      last_name: "Snoday",
      email: "rsnoday4@example.com",
      gender: "Female",
    },
    {
      id: 6,
      first_name: "Chauncey",
      last_name: "Pelcheur",
      email: "cpelcheur5@netvibes.com",
      gender: "Male",
    },
    {
      id: 7,
      first_name: "Norry",
      last_name: "Boggas",
      email: "nboggas6@google.com.br",
      gender: "Male",
    },
    {
      id: 8,
      first_name: "Adriano",
      last_name: "Rubenov",
      email: "arubenov7@walmart.com",
      gender: "Male",
    },
    {
      id: 9,
      first_name: "Erasmus",
      last_name: "Fidoe",
      email: "efidoe8@ebay.co.uk",
      gender: "Bigender",
    },
    {
      id: 10,
      first_name: "Lexy",
      last_name: "Cullotey",
      email: "lcullotey9@harvard.edu",
      gender: "Female",
    },
  ];

  findAll(gender?: "Female" | "Male") {
    if (gender) {
      return this.users.filter((user) => user?.gender === gender);
    }

    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return { message: "user not found" };
    }

    return user;
  }

  create(user: { name: string; email: string; gender: string; first_name: string; last_name: string }) {
    const userLastId = this.users[this.users.length]["id"] + 1;

    const newUser = { id: userLastId, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUser: { email?: string }) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return { message: "user not found" };
    }

    user.email = updateUser.email || null;
    return { message: "user updated" };
  }

  deleteUser(id: number) {
    const user = this.users.find((user) => user.id === id);

    if (!user) {
      return { message: "user not found" };
    } else {
      this.users.filter((user) => user.id !== id);
      return this.users;
    }
  }
}
