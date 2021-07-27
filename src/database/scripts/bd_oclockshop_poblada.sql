-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oclockshop
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.19-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categoria`
--

DROP TABLE IF EXISTS `categoria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categoria` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoria`
--

LOCK TABLES `categoria` WRITE;
/*!40000 ALTER TABLE `categoria` DISABLE KEYS */;
INSERT INTO `categoria` VALUES (1,'DEPORTIVO HOMBRE',NULL),(2,'DEPORTIVO MUJER',NULL),(3,'LUJO HOMBRE',NULL),(4,'LUJO MUJER',NULL),(5,'ANALOGICO HOMBRE',NULL),(6,'ANALOGICO MUJER',NULL),(7,'DIGITAL HOMBRE',NULL),(8,'DIGITAL MUJER',NULL),(9,'INFANTILES NIÑO',NULL),(10,'INFANTILES NIÑA',NULL),(11,'RUNNING HOMBRE',NULL),(12,'RUNNING MUJER',NULL);
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_venta`
--

DROP TABLE IF EXISTS `detalle_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `detalle_venta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_producto` int(11) NOT NULL,
  `id_venta` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_producto_idx` (`id_producto`),
  KEY `id_venta_idx` (`id_venta`),
  CONSTRAINT `id_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_venta` FOREIGN KEY (`id_venta`) REFERENCES `venta` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `detalle_venta`
--

LOCK TABLES `detalle_venta` WRITE;
/*!40000 ALTER TABLE `detalle_venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `detalle_venta` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'SWATCH','MARCA SUIZA'),(2,'TAG HEUER',NULL),(3,'GARMIN',NULL),(4,'BULOVA',NULL),(5,'CITIZEN',NULL),(6,'HUGO BOSS',NULL),(7,'SAMSUNG',NULL),(8,'LACOSTE',NULL),(9,'FESTINA',NULL),(10,'CALVIN KLEIN',NULL),(11,'GUESS',NULL),(12,'TISSOT',NULL),(13,'MISTRAL',NULL),(14,'SEIKO',NULL),(15,'BULGARI',NULL),(16,'OMEGA',NULL),(17,'PATEK PHILIPPE',NULL),(18,'GUCCI',NULL),(19,'CASIO',NULL),(20,'TIME FORCE',NULL);
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articulo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `articulo_UNIQUE` (`articulo`),
  KEY `id_categoria_idx` (`id_categoria`),
  KEY `id_marca_idx` (`id_marca`),
  CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_marca` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (2,'Reloj verde','reloj azul verde',1,2,0,10000.00,''),(3,'Reloj rojo','reloj rojo comun',1,5,20,1000.00,''),(4,'reloj amarillo','amarillo amarillo',2,18,10,1200.00,''),(5,'Reloj Hombre Tag Heuer Formula 1','Un clásico reloj para hombre de cuarzo de tres agujas con los números 6 y 12 de gran tamaño sobre una esfera azul con efecto \"rayos de sol\". Un modelo inspirado en la Fórmula 1, que encarna el excepcional legado automovilístico y el compromiso de TAG Heue',3,2,10,50000.00,'product-1627344209347.jpg'),(6,' Casio Edifice Efv-550d','Vínculo con teléfonos inteligentes a través de Bluetooth®, un sistema de alimentación Tough Solar que permite cargar con una exposición a incluso pocas cantidades de luz e indicación de la hora con siete manecillas, todo incluido en una carcasa de tan sol',3,19,15,10000.00,'product-1627344452469.jpg');
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contraseña` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Juan','Manuel','juanmanuelif@hotmail.com','','$2a$10$Zt7WLMrAeYXlwHA8ty.Sm.Wws.vTr1vilHWO5saf2sm7wHGHIgCX6'),(2,'Marco','Lopez','mlopez@hotmail.com','','$2a$10$cAlzVBF4g1ZCEEpkAh.oB.tmMLhHqUoq.TmAGThkgr8rdPsHiV0oK'),(3,'Javier','Rodriguez','jrodri@hotmail.com','','$2a$10$IfBgVakHBdGvfsIlf5pcTOvAQlMCMhfyRiycliEdStWyTojg/FQ6a'),(4,'Ivan','Castro','icastro@yahoo.com','','$2a$10$s7VbiuiV1UEt/eRC7DFrGOzbKS35xhuHbmWM8EX/CsuhdKV7iTbqO'),(5,'Leo','Messi','lmessi@yahoo.com','user-1626895897541.jpg','$2a$10$6hJkKF9wcn9k5kO555o/x.NW4n/hBHTNhGjAfLERldLMaCeIEfdnG'),(6,'Diego','Maradona','dmaradona@gmail.com','user-1627343529278.jpg','$2a$10$WE9A.d.qmk5ck9NeikSS3eIF7G15S1amdhwXCjd5BItyeCGh4UYBi'),(7,'Gabriel','Batistuta','gbatistuta@hotmail.com','user-1627343673274.jpg','$2a$10$0S36xdYGttAjBNviTxMvwukpCEsbrl86td2aFrdOzGI.CIsNdtoqG'),(8,'Emanuel','Ginobili','mginobili@gmail.com','user-1627343804156.jpg','$2a$10$sg5.F2hLQjemhxK3yHDAhOdYS3QZKHrupE3bzXtam4Kwu/EtAC3Be'),(9,'Steve','Jobs','sjobs@hotmail.com','user-1627343857731.jpg','$2a$10$jYsOAoBa4CATi.pDsOq7Uu9busAZ9bMRWzVUAzrtDByBm9cwkMPRu'),(10,'Bill','Gates','bgates@gmail.com','user-1627343905267.jpg','$2a$10$V3dGcTNVsgPweZS3H7CkPumWOBgrti4d..OztdCNkx.xDDnW7NQn6');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `venta` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fecha` datetime NOT NULL,
  `total` decimal(10,2) NOT NULL,
  `id_usuario` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_usuario_idx` (`id_usuario`),
  CONSTRAINT `id_usuario` FOREIGN KEY (`id_usuario`) REFERENCES `usuario` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `venta`
--

LOCK TABLES `venta` WRITE;
/*!40000 ALTER TABLE `venta` DISABLE KEYS */;
/*!40000 ALTER TABLE `venta` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-07-26 21:16:27
