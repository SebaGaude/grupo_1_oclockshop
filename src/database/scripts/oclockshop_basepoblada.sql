-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: oclockshop
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.19-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
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
/*!40101 SET character_set_client = utf8 */;
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
INSERT INTO `categoria` VALUES (1,'Analógico','RELOJES ANALOGICOS'),(2,'Digital','RELOJES DIGITALES'),(3,'Lujo','RELOJES DE LUJO'),(4,'Smart','RELOJES SMART');
/*!40000 ALTER TABLE `categoria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `detalle_venta`
--

DROP TABLE IF EXISTS `detalle_venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marca` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (1,'Swatch','MARCA SUIZA'),(2,'Tag Heuer',NULL),(3,'Garmin',NULL),(4,'Bulova',NULL),(5,'Citizen',NULL),(6,'Hugo Boss',NULL),(7,'Samsung',NULL),(8,'Lacoste',NULL),(9,'Festina',NULL),(10,'Calvin Klein',NULL),(11,'Guess',NULL),(12,'Tissot',NULL),(13,'Mistral',NULL),(14,'Seiko',NULL),(15,'Bulgari',NULL),(16,'Omega',NULL),(17,'Patek Philippe',NULL),(18,'Gucci',NULL),(19,'Casio',NULL),(20,'Time Force',NULL),(21,'Rolex',NULL),(22,'Emporio Armani',NULL),(23,'Tressa',NULL),(24,'Polar',NULL),(25,'Apple',NULL);
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `producto` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `articulo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `id_categoria` int(11) NOT NULL,
  `id_marca` int(11) NOT NULL,
  `stock` int(11) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `oferta` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `articulo_UNIQUE` (`articulo`),
  KEY `id_categoria_idx` (`id_categoria`),
  KEY `id_marca_idx` (`id_marca`),
  CONSTRAINT `id_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_marca` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (1,'Apple Watch Series 6','Mide tu nivel de oxígeno en la sangre con una app y un sensor revolucionarios. Y no pierdas de vista los datos de tus entrenamientos en la mejorada pantalla Retina siempre activa. Con el Apple Watch Series 6, podrás llevar una vida más saludable, más acti',4,25,300,70000.00,'product-1629567752118.png',NULL),(2,'Datejust 36','Este Oyster Perpetual Datejust 36 en Acero Oystersteel presenta una esfera verde oliva, motivo «palmeras» y un brazalete Oyster',3,21,1000,10000.00,'product-1629735146746.jpg','1'),(3,'Oyster Perpetual 41','Oyster Perpetual 41 con una esfera plateada y un brazalete Oyster.',3,21,100,1000.00,'product-1629735178000.jpg','0'),(4,'Sky-Dweller','Oyster Perpetual Sky-Dweller en Oro amarillo de 18 quilates con esfera color negro vivo y brazalete Oysterflex.',3,21,150,1200.00,'product-1629735202942.jpg','0'),(5,'Tag Heuer Formula 1','Un clásico reloj para hombre de cuarzo de tres agujas con los números 6 y 12 de gran tamaño sobre una esfera azul con efecto \"rayos de sol\". Un modelo inspirado en la Fórmula 1, que encarna el excepcional legado automovilístico y el compromiso de TAG Heue',3,2,10,50000.00,'product-1629735224468.jpg','0'),(6,'Tag Heuer Monaco Titan','Este TAG Heuer Monaco Grey Titanium es un cronógrafo limitado a 500 unidades. Un modelo deportivo, discreto y ligero. Infundido con una atrevida modernidad, esta vez en un material sorprendente y llamativo, el titanio, este Monaco presenta una vívida y br',3,2,15,10000.00,'product-1629735243129.jpg','1'),(7,'Casio G-6900-1','Estos modelos Tough Solar constituyen un alternativa tanto para el diseño original G-5600 de G-SHOCK como para el diseño G-6900, tan popular entre los seguidores de la moda urbana actual.',2,19,10,2000.00,'product-1629735020057.jpg',NULL),(8,'Casio DW-5750E-1B','En el 2018 se cumplirán 35 años desde que G-SHOCK, con su resistencia innovadora, revolucionó por primera vez la manera de controlar el tiempo allá por el año 1983. Para marcar la ocasión, CASIO lanza el DW-5750E para traer de vuelta el aspecto de un favo',2,19,15,15000.00,'product-1629735042048.jpg',NULL),(9,'Casio A159GED-1','Presentamos una versión especial del muy popular diseño digital estándar CASIO, con dos detalles de diamantes naturales. La esfera incluye un cristal tallado para un toque adicional de elegancia y clase.',2,19,1000,30000.00,'product-1629735057306.jpg',NULL),(10,'Tressa Digital Touch Pinot','Reloj Tressa Digital Touch , Malla Tejida Con Cierre Imán. Modelo Pinot. Display Negro Dígitos verdes',2,23,1500,2000.00,'product-1629735076971.jpg',NULL),(11,'Gucci Ya114103','Reloj Gucci malla de goma números color ROSA.Modelo Paris',2,18,120,35000.00,'product-1629735114885.jpg',NULL),(12,'Spot Time Black','Su diseño hecho con BIOCERAMIC y elementos de origen biológico, además de la correa y la trabilla en color negro mate, y la esfera con elementos de movimiento negros, hacen que este elegante reloj sea uno de los modelos más destacados.',1,1,1000,5000.00,'product-1629734884049.jpg',NULL),(13,'Skinpole','El encuentro entre SKIN y el diseño Irony es un momento mágico que merece pasar a la posteridad. Con su acabado plateado, el SKINPOLE es un reloj delgado de acero inoxidable pulido con una preciosa esfera plateada satinada y sutiles impresiones en negro.',1,1,1500,10000.00,'product-1629734900131.jpg',NULL),(14,'Blackinjelly','Futuristic BLACKINJELLY viene con caja y correa en tono cremoso semitransparente. La peculiar estructura de la correa la hace casi invisible. Si miras detrás de los componentes de la esfera negra verás el corazón del reloj.',1,1,200,12000.00,'product-1629734917238.jpg',NULL),(15,'Lacoste 12.12','La familia de relojes Lacoste.12.12 rinde tributo al carácter distintivo del polo L.12.12 y a su espíritu deportivo. El moderno diseño de la caja y las esferas es un homenaje a la historia de la marca a través de sus correas de silicona con textura de pet',1,8,100,22000.00,'product-1629734934784.jpg',NULL),(16,'Lacoste Moon','El reloj Moon para hombre es una expresión de la eternidad. Su caja ultrafina y su esfera de acero inoxidable aúnan confort y elegancia para adaptarse al estilo de vida actual.',1,8,50,30000.00,'product-1629734951410.jpg',NULL),(17,'Samsung Active 2 R820 Negro','Resistente, liviano, moderno y elegante, el Samsung Active 2 R820 es la mejor compañia para todo tipo de entrenamiento físico. Cuenta con una amplia y un borde diseñado que permite visualizar toda la información que necesites.El fondo de la misma se puede',4,7,100,15000.00,'product-1629735346690.jpg',NULL),(18,'Samsung Galaxy Fit 2 Negro','Resistente, liviano y elegante, Samsung Galaxy Fit es la mejor compañía weareable para todo tipo de disciplinas físicas. Con una pantalla sencilla y compacta, vas a poder monitorear tus estadísticas y ver la información más relevante sobre tu salud cuando',4,7,50,12000.00,'product-1629735362736.jpg',NULL),(19,'Forerunner 935','El reloj para triatlón o carreras con GPS Forerunner 935 tiene un diseño cómodo y ligero con el que se sentirá a gusto para usarlo todo el día. El 935 es compatible con nuestra línea de bandas fáciles de cambiar: las bandas QuickFit™. Tendrá una banda par',4,3,100,80000.00,'product-1629735299904.jpg',NULL),(20,'Forerunner 45 S','Este reloj de carrera fácil de usar es el compañero perfecto para las sesiones diarias de carrera y entrenamiento, así como también para aquel 10K para el que te han convencido. El GPS integrado controla por dónde corres y te proporciona estadísticas prec',4,3,50,33000.00,'product-1629735385347.jpg',NULL),(21,'Polar Vantage M2','El reloj multideporte con GPS Polar Vantage M2 te ofrece una fantástica combinación de rendimiento, funcionalidad y actitud de atleta. Te proporciona consejos y datos para que desarrolles toda tu fuerza, además de funciones de reloj inteligente para que s',4,24,100,30000.00,'product-1629735321439.jpg',NULL);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuario` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `apellido` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `imagen` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `contraseña` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `perfil` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'Juan','Manuel','juanmanuelif@hotmail.com','','$2a$10$Zt7WLMrAeYXlwHA8ty.Sm.Wws.vTr1vilHWO5saf2sm7wHGHIgCX6',NULL),(2,'Marco','Lopez','mlopez@hotmail.com','','$2a$10$cAlzVBF4g1ZCEEpkAh.oB.tmMLhHqUoq.TmAGThkgr8rdPsHiV0oK',NULL),(3,'Javier','Rodriguez','jrodri@hotmail.com','','$2a$10$IfBgVakHBdGvfsIlf5pcTOvAQlMCMhfyRiycliEdStWyTojg/FQ6a',NULL),(4,'Ivan','Castro','icastro@yahoo.com','','$2a$10$s7VbiuiV1UEt/eRC7DFrGOzbKS35xhuHbmWM8EX/CsuhdKV7iTbqO',NULL),(5,'Leo','Messi','lmessi@yahoo.com','user-1626895897541.jpg','$2a$10$6hJkKF9wcn9k5kO555o/x.NW4n/hBHTNhGjAfLERldLMaCeIEfdnG','Administrador'),(6,'Diego','Maradona','dmaradona@gmail.com','user-1627343529278.jpg','$2a$10$WE9A.d.qmk5ck9NeikSS3eIF7G15S1amdhwXCjd5BItyeCGh4UYBi',NULL),(7,'Gabriel','Batistuta','gbatistuta@hotmail.com','user-1627343673274.jpg','$2a$10$0S36xdYGttAjBNviTxMvwukpCEsbrl86td2aFrdOzGI.CIsNdtoqG',NULL),(8,'Emanuel','Ginobili','mginobili@gmail.com','user-1627343804156.jpg','$2a$10$sg5.F2hLQjemhxK3yHDAhOdYS3QZKHrupE3bzXtam4Kwu/EtAC3Be',NULL),(9,'Steve','Jobs','sjobs@hotmail.com','user-1627343857731.jpg','$2a$10$jYsOAoBa4CATi.pDsOq7Uu9busAZ9bMRWzVUAzrtDByBm9cwkMPRu',NULL),(10,'Bill','Gates','bgates@gmail.com','user-1627343905267.jpg','$2a$10$V3dGcTNVsgPweZS3H7CkPumWOBgrti4d..OztdCNkx.xDDnW7NQn6',NULL),(11,'Administrador','Oclocksop','admin@oclockshop.com','user-1629500770878.png','$2a$10$kkqg04/m02EIzqLcJNcG9.XPd0lIlw4WFbgG3QmCD8zYwgds.fCaq','Administrador'),(12,'Sebastian','Gaudelli','sebastian@gmail.com','user-1629567939201.jpg','$2a$10$WrXqp7ILlJX06wbExY/TkeSOLxcm/PZsVKdbdG1oFS3BacuMpAhQm',NULL);
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `venta`
--

DROP TABLE IF EXISTS `venta`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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

-- Dump completed on 2021-08-23 23:54:30
