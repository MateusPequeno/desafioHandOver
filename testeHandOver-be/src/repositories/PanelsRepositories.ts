import { EntityRepository, Repository } from "typeorm";
import {Panels} from "../entities/panels";

@EntityRepository(Panels)
class PanelsRepository extends Repository<Panels> {
}
export {PanelsRepository}