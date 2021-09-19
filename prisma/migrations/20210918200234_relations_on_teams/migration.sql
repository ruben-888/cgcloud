/*
  Warnings:

  - Added the required column `roleId` to the `UsersOnTeams` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `UsersOnTeams` ADD COLUMN `roleId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Role_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
