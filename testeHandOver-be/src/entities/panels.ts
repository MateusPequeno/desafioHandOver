import {Column, Entity, PrimaryColumn} from "typeorm";
import { v4 as uuid} from "uuid";
@Entity("Panels")
class Panels {
  @PrimaryColumn()
  id : number;
  @Column()
  name: string;
  @Column()
  prices: number;
  @Column()
  stockQuantity: number;
  
  constructor(){
    if(!this.id) {
      this.id = uuid();
    }
  }
}
export {Panels}