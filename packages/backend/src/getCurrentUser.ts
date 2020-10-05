import { User } from "./entity/User";

export default function getCurrentUser() {
  return User.findOneOrFail(1);
}
