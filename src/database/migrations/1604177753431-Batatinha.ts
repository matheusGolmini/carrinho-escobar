import {MigrationInterface, QueryRunner} from "typeorm";

export class Batatinha1604177753431 implements MigrationInterface {
    name = 'Batatinha1604177753431'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "shoppingcartitems" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "amount" integer NOT NULL, "price" integer NOT NULL, "produtoId" character varying NOT NULL, "shoppingcartId" uuid, "userId" uuid, CONSTRAINT "PK_65239be756728e65ad6f4eb98c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "shoppingcart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "finished" boolean NOT NULL, "userId" uuid, CONSTRAINT "PK_ef95ad50e65476ce0f276a06a3f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "shopping_cart" uuid, CONSTRAINT "REL_20aa3ac7f8aa8c76a5719376b2" UNIQUE ("shopping_cart"), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "password" character varying NOT NULL, "addressId" uuid, "orderId" uuid, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "street" character varying NOT NULL, "city" character varying NOT NULL, "stade" character varying NOT NULL, "country" character varying NOT NULL, "number" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems" ADD CONSTRAINT "FK_1cbad1396cd64dd4ab93062499b" FOREIGN KEY ("shoppingcartId") REFERENCES "shoppingcart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems" ADD CONSTRAINT "FK_2356dc2555e354b6c4f930b4173" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "shoppingcart" ADD CONSTRAINT "FK_cbc2053cff0dbca2a183ca2d313" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_20aa3ac7f8aa8c76a5719376b20" FOREIGN KEY ("shopping_cart") REFERENCES "shoppingcart"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_25371c904b4a1ba5a3e330c8fbf" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_25371c904b4a1ba5a3e330c8fbf"`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_20aa3ac7f8aa8c76a5719376b20"`);
        await queryRunner.query(`ALTER TABLE "shoppingcart" DROP CONSTRAINT "FK_cbc2053cff0dbca2a183ca2d313"`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems" DROP CONSTRAINT "FK_2356dc2555e354b6c4f930b4173"`);
        await queryRunner.query(`ALTER TABLE "shoppingcartitems" DROP CONSTRAINT "FK_1cbad1396cd64dd4ab93062499b"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "order"`);
        await queryRunner.query(`DROP TABLE "shoppingcart"`);
        await queryRunner.query(`DROP TABLE "shoppingcartitems"`);
    }

}
