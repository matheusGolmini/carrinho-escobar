import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1604163361331 implements MigrationInterface {
    name = 'CreateTables1604163361331'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shoppingcartitems_product" ("shoppingcartitemsId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_b228348a5406875578c3f56c3db" PRIMARY KEY ("shoppingcartitemsId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5c68d2c62ba8162b75547cf9ab" ON "shoppingcartitems_product" ("shoppingcartitemsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_66dea6eef4a7e0744077f90159" ON "shoppingcartitems_product" ("productId") `);
        await queryRunner.query(`CREATE TABLE "shoppingcart_shoppingcartitems" ("shoppingcartId" uuid NOT NULL, "shoppingcartitemsId" uuid NOT NULL, CONSTRAINT "PK_f14f2a3c95acd2cb69c86bb1684" PRIMARY KEY ("shoppingcartId", "shoppingcartitemsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_1698cdc0e5802df1a4afe3e206" ON "shoppingcart_shoppingcartitems" ("shoppingcartId") `);
        await queryRunner.query(`CREATE INDEX "IDX_16b9bff60c8c5bd671485c061e" ON "shoppingcart_shoppingcartitems" ("shoppingcartitemsId") `);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems_product" ADD CONSTRAINT "FK_5c68d2c62ba8162b75547cf9ab3" FOREIGN KEY ("shoppingcartitemsId") REFERENCES "shoppingcartitems"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems_product" ADD CONSTRAINT "FK_66dea6eef4a7e0744077f90159e" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shoppingcart_shoppingcartitems" ADD CONSTRAINT "FK_1698cdc0e5802df1a4afe3e2068" FOREIGN KEY ("shoppingcartId") REFERENCES "shoppingcart"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shoppingcart_shoppingcartitems" ADD CONSTRAINT "FK_16b9bff60c8c5bd671485c061e5" FOREIGN KEY ("shoppingcartitemsId") REFERENCES "shoppingcartitems"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shoppingcart_shoppingcartitems" DROP CONSTRAINT "FK_16b9bff60c8c5bd671485c061e5"`);
        await queryRunner.query(`ALTER TABLE "shoppingcart_shoppingcartitems" DROP CONSTRAINT "FK_1698cdc0e5802df1a4afe3e2068"`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems_product" DROP CONSTRAINT "FK_66dea6eef4a7e0744077f90159e"`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems_product" DROP CONSTRAINT "FK_5c68d2c62ba8162b75547cf9ab3"`);
        await queryRunner.query(`DROP INDEX "IDX_16b9bff60c8c5bd671485c061e"`);
        await queryRunner.query(`DROP INDEX "IDX_1698cdc0e5802df1a4afe3e206"`);
        await queryRunner.query(`DROP TABLE "shoppingcart_shoppingcartitems"`);
        await queryRunner.query(`DROP INDEX "IDX_66dea6eef4a7e0744077f90159"`);
        await queryRunner.query(`DROP INDEX "IDX_5c68d2c62ba8162b75547cf9ab"`);
        await queryRunner.query(`DROP TABLE "shoppingcartitems_product"`);
    }

}
