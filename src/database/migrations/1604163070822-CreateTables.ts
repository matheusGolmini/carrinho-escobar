import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1604163070822 implements MigrationInterface {
    name = 'CreateTables1604163070822'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "shoppingcartitems" DROP CONSTRAINT "FK_1cbad1396cd64dd4ab93062499b"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems" DROP COLUMN "shoppingcartId"`);
        await queryRunner.query(`ALTER TABLE "order" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD "orderId" uuid`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_25371c904b4a1ba5a3e330c8fbf" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_25371c904b4a1ba5a3e330c8fbf"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "orderId"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "addressId"`);
        await queryRunner.query(`ALTER TABLE "order" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems" ADD "shoppingcartId" uuid`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems" ADD CONSTRAINT "FK_1cbad1396cd64dd4ab93062499b" FOREIGN KEY ("shoppingcartId") REFERENCES "shoppingcart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
