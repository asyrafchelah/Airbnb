import {MigrationInterface, QueryRunner} from "typeorm";

export class PhaseThree1573417679330 implements MigrationInterface {
    name = 'PhaseThree1573417679330'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "comment" ("id" int NOT NULL IDENTITY(1,1), "user_name" nvarchar(255) NOT NULL, "date_created" datetime NOT NULL, "comment" nvarchar(255) NOT NULL, "user_id" int, CONSTRAINT "PK_0b0e4bbc8415ec426f87f3a88e2" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "review" ("id" int NOT NULL IDENTITY(1,1), "booking_date" datetime NOT NULL, "overall_rating" int NOT NULL, "location_rating" int NOT NULL, "cleanliness_rating" int NOT NULL, "value_rating" int NOT NULL, "communication_rating" int NOT NULL, "amenities_rating" int NOT NULL, "property_id" int, CONSTRAINT "PK_2e4299a343a81574217255c00ca" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "locality" ("id" int NOT NULL IDENTITY(1,1), "location_name" nvarchar(255) NOT NULL, "location_nearby" nvarchar(255) NOT NULL, CONSTRAINT "PK_c0445d9b8706ac2d31be91c9b6b" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "properties_localities" ("locality_id" int NOT NULL, "property_id" int NOT NULL, CONSTRAINT "PK_73594d618493fa17a014c40e9f7" PRIMARY KEY ("locality_id", "property_id"))`, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_23bfcc8d198878d7ca5449abbe" ON "properties_localities" ("locality_id") `, undefined);
        await queryRunner.query(`CREATE INDEX "IDX_c4024127aa3b6096609edd42a9" ON "properties_localities" ("property_id") `, undefined);
        await queryRunner.query(`ALTER TABLE "comment" ADD CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "review" ADD CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "properties_localities" ADD CONSTRAINT "FK_23bfcc8d198878d7ca5449abbeb" FOREIGN KEY ("locality_id") REFERENCES "locality"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "properties_localities" ADD CONSTRAINT "FK_c4024127aa3b6096609edd42a9b" FOREIGN KEY ("property_id") REFERENCES "property"("id") ON DELETE CASCADE ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "properties_localities" DROP CONSTRAINT "FK_c4024127aa3b6096609edd42a9b"`, undefined);
        await queryRunner.query(`ALTER TABLE "properties_localities" DROP CONSTRAINT "FK_23bfcc8d198878d7ca5449abbeb"`, undefined);
        await queryRunner.query(`ALTER TABLE "review" DROP CONSTRAINT "FK_b6f6e746b9e87e1fc58760ede4c"`, undefined);
        await queryRunner.query(`ALTER TABLE "comment" DROP CONSTRAINT "FK_bbfe153fa60aa06483ed35ff4a7"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_c4024127aa3b6096609edd42a9" ON "properties_localities"`, undefined);
        await queryRunner.query(`DROP INDEX "IDX_23bfcc8d198878d7ca5449abbe" ON "properties_localities"`, undefined);
        await queryRunner.query(`DROP TABLE "properties_localities"`, undefined);
        await queryRunner.query(`DROP TABLE "locality"`, undefined);
        await queryRunner.query(`DROP TABLE "review"`, undefined);
        await queryRunner.query(`DROP TABLE "comment"`, undefined);
    }

}
