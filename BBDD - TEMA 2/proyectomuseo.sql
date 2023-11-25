create database ProyectoMuseo;

use proyectomuseo;

CREATE TABLE piezas (
    id_pieza INT PRIMARY KEY AUTO_INCREMENT,
    nombre_pieza VARCHAR(45),
    descripcion VARCHAR(200),
    anyo_creacion INT,
    formato ENUM('Permanente', 'Almacenada', 'Intinerante'),
    localizacion ENUM('Expositores', 'Vitrinas', 'Armarios', 'Estanterias'),
    estado ENUM('Posesion', 'Prestamo', 'Prestada'),
    inicio_prestacion DATE,
    devolucion DATE,
    id_autor INT,
    id_duenyo INT,
    FOREIGN KEY (id_autor) REFERENCES autor(id_autor),
    FOREIGN KEY (id_duenyo) REFERENCES duenyo(id_duenyo)
);

DROP TABLE piezas;

INSERT INTO piezas (nombre_pieza, descripcion, anyo_creacion, formato, localizacion, estado, inicio_prestacion, devolucion, id_autor, id_duenyo)
VALUES
('La última cena', 'Famosa pintura mural que representa la última cena de Jesús con sus apóstoles.', 1495, 'Permanente', 'Vitrinas', 'Posesion', NULL, NULL, 1, 1),
('La creación de Adán', 'Pintura del techo de la Capilla Sixtina que representa la creación de Adán.', 1512, 'Almacenada', 'Estanterias', 'Posesion', NULL, NULL, 2, 10),
('La escuela de Atenas', 'Famosa pintura que representa a filósofos antiguos en discusión.', 1509, 'Intinerante', 'Vitrinas', 'Posesion', NULL, NULL, 3, 9),
('David de Donatello', 'Una de las primeras representaciones de David en escultura.', 1440, 'Permanente', 'Expositores', 'Prestamo', '2023-11-28', '2023-12-04', 4, 2),
('El nacimiento de Venus', 'Famosa pintura que representa el nacimiento de la diosa Venus.', 1484, 'Almacenada', 'Armarios', 'Prestamo', '2023-11-29', '2023-12-05', 5, 8),
('Judith decapitando a Holofernes', 'Pintura que representa el bíblico episodio de Judith decapitando a Holofernes.', 1599, 'Intinerante', 'Vitrinas', 'Prestamo', '2023-12-01', '2023-12-07', 6, 3),
('Nenúfares', 'Serie de pinturas que representan los nenúfares en su jardín de Giverny.', 1906, 'Permanente', 'Vitrinas', 'Prestada', '2023-12-02', '2023-12-08', 7, 4),
('La noche estrellada', 'Pintura que muestra el cielo nocturno sobre un pueblo.', 1889, 'Almacenada', 'Armarios', 'Prestada', '2023-12-03', '2023-12-09', 8, 5),
('Guernica', 'Famosa pintura que representa el bombardeo de Guernica durante la Guerra Civil Española.', 1937, 'Intinerante', 'Expositores', 'Prestada', '2023-12-04', '2023-12-10', 9, 6),
('Las dos Fridas', 'Pintura que representa dos versiones de Frida Kahlo sentadas juntas.', 1939, 'Permanente', 'Vitrinas', 'Prestada', '2023-12-05', '2023-12-11', 10, 7);



CREATE TABLE autor (
    id_autor INT PRIMARY KEY AUTO_INCREMENT,
    nombre_autor VARCHAR(45),
    apellido_autor VARCHAR(45),
    nacionalidad VARCHAR(45),
    anyo_nacimiento INT,
    estilo VARCHAR(45)
);

INSERT INTO autor (nombre_autor, apellido_autor, nacionalidad, anyo_nacimiento, estilo)
VALUES
('Leonardo', 'Da Vinci', 'República de Florencia', 1452, 'Renacimiento italiano'),
('Miguel Ángel', 'Buonarroti', 'República de Florencia', 1475, 'Renacimiento italiano'),
('Rafael', 'Sanzio', 'República de Florencia', 1483, 'Renacimiento italiano'),
('Donatello', '', 'República de Florencia', 1386, 'Renacimiento italiano'),
('Sandro', 'Botticelli', 'República de Florencia', 1445, 'Renacimiento italiano'),
('Caravaggio', '', 'Ducado de Milán', 1571, 'Barroco italiano'),
('Claude', 'Monet', 'Francia', 1840, 'Impresionismo'),
('Vincent', 'van Gogh', 'Países Bajos', 1853, 'Postimpresionismo'),
('Pablo', 'Picasso', 'España', 1881, 'Cubismo'),
('Frida', 'Kahlo', 'México', 1907, 'Surrealismo');

CREATE TABLE duenyo (
    id_duenyo INT PRIMARY KEY AUTO_INCREMENT,
    nombre_duenyo VARCHAR(45),
    apellido_duenyo VARCHAR(45),
    email_duenyo VARCHAR(45),
    direccion VARCHAR(100)
);

INSERT INTO duenyo (nombre_duenyo, apellido_duenyo, email_duenyo, direccion)
VALUES ('Museo del Louvre', 'Real', 'Louvre@hotmail.com', '10P Place du Carrousel, 75001 Paris'),
('Museo Nacional del Prado', 'Gestión', 'prado@museoprado.es', 'Calle Ruiz de Alarcón, 23, 28014 Madrid'),
('Museo Metropolitano de Arte', 'Administración', 'info@metmuseum.org', '1000 Fifth Avenue, New York, NY 10028'),
('British Museum', 'Curador', 'info@britishmuseum.org', 'Great Russell St, Bloomsbury, London WC1B 3DG, UK'),
('Museo Nacional de Antropología', 'Director', 'info@mna.inah.gob.mx', 'Paseo de la Reforma s/n, Bosque de Chapultepec I Secc, 11560 Ciudad de México'),
('Hermitage Museum', 'Gestión', 'info@hermitagemuseum.org', 'Palace Square, 2, St Petersburg, Russia'),
('Museo Nacional del Louvre', 'Curador', 'curator@louvre.fr', 'Rue de Rivoli, 75001 Paris, France'),
('Museo del Prado', 'Administración', 'administracion@prado.es', 'Calle Ruiz de Alarcón, 23, 28014 Madrid'),
('National Gallery', 'Gestión', 'info@nationalgallery.org.uk', 'Trafalgar Square, London WC2N 5DN, UK'),
('Vatican Museums', 'Director', 'info.mv@scv.va', 'Viale Vaticano, 00165 Roma RM, Italy');


SELECT
    piezas.nombre_pieza,
    piezas.localizacion,
    piezas.devolucion AS fecha_expiracion,
    duenyo.nombre_duenyo,
    duenyo.apellido_duenyo,
    duenyo.email_duenyo
  FROM
    piezas
  JOIN
    duenyo ON piezas.id_duenyo = duenyo.id_duenyo
  WHERE
    piezas.estado = 'Prestamo';
    
SELECT
	formato AS situacion,
	COUNT(*) AS total_piezas
FROM
	piezas
GROUP BY
	formato
ORDER BY
	total_piezas DESC;



























