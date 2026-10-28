import {
    migrationinterface, QueryRunner,Table,
} from "typeorm";
import { MigrationInterface } from "typeorm";

export class CreateTestTable17792219265474 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "test",
                columns: [
                    name: "id",
                    type: "uuid",
                    isprimary: true,
                    generationstrategy: "uuid",
                    default: "uuid_generate_v4()",
                },
                {   
                    name: "name",
                    type: "varchar",
                    isnullable: false,
                },
                {
                    name: "email",
                    type: "varchar",
                    isnullable: false,
                },
                {
                    name: "password",
                    type: "varchar",
                    isnullable: false,
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    isnullable: false,
                },
                {
                    name: "updated_at",
                    type: "timestamp",
                    isnullable: "Current_timestamp",
                },
            ],
        }),
    )
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("test");
}
