SELECT AVG (mark) AS avg_mark FROM dia1.marks WHERE subject_id = 1;

SELECT COUNT(*) AS total_students FROM students;

DESCRIBE dia1.groups;

DELETE FROM marks WHERE mark > 5 AND YEAR(date) = YEAR(CURDATE()) - 1;

ALTER TABLE students ADD COLUMN year_Entry int;
SELECT * FROM students WHERE year_Entry = YEAR(CURDATE()); 

SELECT subject_id, COUNT(DISTINCT teacher_id) AS num_teachers FROM subject_teacher GROUP BY subject_id;

UPDATE students
SET year_Entry = FLOOR(RAND() * (2023 - 2015 + 1) + 2015)
WHERE year_Entry IS NULL
LIMIT 10;

UPDATE students SET year_Entry = 2023 WHERE student_id = 1;

SELECT mark_id, mark FROM marks WHERE (mark_id BETWEEN 1 AND 20) OR (mark > 8 AND YEAR(date) = YEAR(CURDATE()) - 1);

SELECT subject_id, AVG(mark) AS Avg_mark FROM marks WHERE YEAR(date) = YEAR(CURDATE()) - 1 GROUP BY subject_id;

SELECT student_id, AVG(mark) AS Avg_mark FROM marks WHERE YEAR(date) = YEAR(CURDATE()) - 1 GROUP BY student_id;

SELECT students.first_name AS nombre_alumno, students.Last_name AS apellido_alumno, subjects.title AS nombre_asignatura
FROM students
JOIN marks ON students.student_id = marks.student_id
JOIN subjects ON marks.subject_id = subjects.subject_id;

SELECT teachers.first_name AS nombre_profesor, teachers.Last_name AS apellido_profesor, subjects.title AS nombre_asignatura
FROM teachers
JOIN subject_teacher ON teachers.teacher_id = subject_teacher.teacher_id
JOIN subjects ON subject_teacher.subject_id = subjects.subject_id;

SELECT
  subjects.subject_id,
  subjects.title AS nombre_asignatura,
  teachers.first_name AS nombre_profesor,
  teachers.Last_name AS apellido_profesor,
  COUNT(marks.student_id) AS total_alumnos
FROM
  subjects
JOIN
  subject_teacher ON subjects.subject_id = subject_teacher.subject_id
JOIN
  teachers ON subject_teacher.teacher_id = teachers.teacher_id
LEFT JOIN
  marks ON subjects.subject_id = marks.subject_id
GROUP BY
  subjects.subject_id, teachers.teacher_id;






