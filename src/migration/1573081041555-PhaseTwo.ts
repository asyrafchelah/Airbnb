import {MigrationInterface, QueryRunner} from "typeorm";

export class PhaseTwo1573081041555 implements MigrationInterface {
    name = 'PhaseTwo1573081041555'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "tag" ("id" int NOT NULL IDENTITY(1,1), "label" nvarchar(255) NOT NULL, CONSTRAINT "PK_8e4052373c579afc1471f526760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "payment" ("id" int NOT NULL IDENTITY(1,1), "status" nvarchar(255) NOT NULL, "amount" int NOT NULL, "booking_id" int, CONSTRAINT "PK_fcaec7df5adf9cac408c686b2ab" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "properties_tags" ("tag_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_0039f58ecbac69887fc3acaae38" PRIMARY KEY ("tag_id", "property_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_23c6bef3a45883fc85afa2477e" ON "properties_tags" ("tag_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_b70000a624e1f0ab245318ef70" ON "properties_tags" ("property_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "payment" ADD CONSTRAINT "FK_cee78453638dfaf440f1aa63c26" FOREIGN KEY ("booking_id") REFERENCES "booking"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "properties_tags" ADD CONSTRAINT "FK_23c6bef3a45883fc85afa2477e0" FOREIGN KEY ("tag_id") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "properties_tags" ADD CONSTRAINT "FK_b70000a624e1f0ab245318ef709" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "properties_tags" DROP CONSTRAINT "FK_b70000a624e1f0ab245318ef709"`, undefined);
        await queryRunner.query(`ALTER TABLE "properties_tags" DROP CONSTRAINT "FK_23c6bef3a45883fc85afa2477e0"`, undefined);
        await queryRunner.query(`ALTER TABLE "payment" DROP CONSTRAINT "FK_cee78453638dfaf440f1aa63c26"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_b70000a624e1f0ab245318ef70" ON "properties_tags"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_23c6bef3a45883fc85afa2477e" ON "properties_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "properties_tags"`, undefined);
        await queryRunner.query(`DROP TABLE "payment"`, undefined);
        await queryRunner.query(`DROP TABLE "tag"`, undefined);
    }

}
