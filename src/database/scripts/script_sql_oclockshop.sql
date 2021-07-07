-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema oclockshop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema oclockshop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `oclockshop` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ;
USE `oclockshop` ;

-- -----------------------------------------------------
-- Table `oclockshop`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oclockshop`.`usuario` (
  `idusuario` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `contraseña` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `oclockshop`.`categoria`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oclockshop`.`categoria` (
  `idcategoria` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`idcategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `oclockshop`.`marca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oclockshop`.`marca` (
  `idmarca` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NULL,
  PRIMARY KEY (`idmarca`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `oclockshop`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oclockshop`.`producto` (
  `idproducto` INT NOT NULL,
  `articulo` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `id_categoria` INT NOT NULL,
  `id_marca` INT NOT NULL,
  `stock` INT NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idproducto`),
  INDEX `id_categoria_idx` (`id_categoria` ASC) VISIBLE,
  INDEX `id_marca_idx` (`id_marca` ASC) VISIBLE,
  CONSTRAINT `id_categoria`
    FOREIGN KEY (`id_categoria`)
    REFERENCES `oclockshop`.`categoria` (`idcategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_marca`
    FOREIGN KEY (`id_marca`)
    REFERENCES `oclockshop`.`marca` (`idmarca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `oclockshop`.`venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oclockshop`.`venta` (
  `idventa` INT NOT NULL,
  `fecha` DATETIME NOT NULL,
  `total` DECIMAL(10,2) NOT NULL,
  `id_usuario` INT NULL,
  PRIMARY KEY (`idventa`),
  INDEX `id_usuario_idx` (`id_usuario` ASC) VISIBLE,
  CONSTRAINT `id_usuario`
    FOREIGN KEY (`id_usuario`)
    REFERENCES `oclockshop`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `oclockshop`.`detalle_venta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `oclockshop`.`detalle_venta` (
  `iddetalle_venta` INT NOT NULL,
  `id_producto` INT NOT NULL,
  `id_venta` INT NOT NULL,
  `precio` DECIMAL(10,2) NOT NULL,
  `cantidad` INT NOT NULL,
  `subtotal` DECIMAL(10,2) NULL,
  PRIMARY KEY (`iddetalle_venta`),
  INDEX `id_producto_idx` (`id_producto` ASC) VISIBLE,
  INDEX `id_venta_idx` (`id_venta` ASC) VISIBLE,
  CONSTRAINT `id_producto`
    FOREIGN KEY (`id_producto`)
    REFERENCES `oclockshop`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `id_venta`
    FOREIGN KEY (`id_venta`)
    REFERENCES `oclockshop`.`venta` (`idventa`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
