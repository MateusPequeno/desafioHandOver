import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1636650415146 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Panels",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "prices",
            type: "integer",
          },
          {
            name: "stockQuantity",
            type: "integer",
          },
        ],
      })
    );
    await queryRunner.createTable(
      new Table({
        name: "User",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
          },
          {
            name: "password",
            type: "varchar",
          },
          {
            name: "userPermissionLevel",
            type: "integer",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Panels");
  }
}
