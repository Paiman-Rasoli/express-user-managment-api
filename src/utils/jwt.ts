import jsonwebtoken from "jsonwebtoken";
// it can be a random string!
const secret_jwt =
  process.env.SECRET_JWT ||
  "e1482cc742a2ced3e4b94102e7f189d45d21095adcbb90592e27f4da31d1bc6547d3977015192454b26e680e622e4f9d8e09513535848b041e744fdb400846de";
export class Jwt {
  // fields
  private key: string = secret_jwt;
  user_id: number;
  name: string;
  lname: string;

  constructor(id: number, name: string, lname: string) {
    this.user_id = id;
    this.name = name;
    this.lname = lname;
  }
  createToken(): string {
    return jsonwebtoken.sign(
      { id: this.user_id, firstName: this.name, lastName: this.lname },
      this.key,
      {
        expiresIn: "7d",
      }
    );
  }
}
