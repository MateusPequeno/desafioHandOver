import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
@Entity("User")
class User {
  @PrimaryColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  userPermissionLevel: number;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
export { User };
