import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1604163208341 implements MigrationInterface {
    name = 'CreateTables1604163208341'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" ADD "shopping_cart" uuid`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "UQ_20aa3ac7f8aa8c76a5719376b20" UNIQUE ("shopping_cart")`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_20aa3ac7f8aa8c76a5719376b20" FOREIGN KEY ("shopping_cart") REFERENCES "shoppingcart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_20aa3ac7f8aa8c76a5719376b20"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "UQ_20aa3ac7f8aa8c76a5719376b20"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "shopping_cart"`);
    }

}
