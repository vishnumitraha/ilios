
LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` (`school_id`, `template_prefix`, `title`, `ilios_administrator_email`,
`deleted`, `change_alert_recipients`)
VALUES
	(1, 'SOM', 'Medicine', 'ilios_admin@bogus.ucsf.edu', 0, ''),
	(2, 'SOD', 'Dentistry', 'ilios_admin@bogus.ucsf.edu', 0, ''),
	(3, 'SOP', 'Pharmacy', 'ilios_admin@bogus.ucsf.edu', 0, ''),
	(4, 'SON', 'Nursing', 'ilios_admin@bogus.ucsf.edu', 0, ''),
	(5, 'OTHER', 'Other', 'ilios_admin@bogus.ucsf.edu', 0, '');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

LOCK TABLES `department` WRITE;
/*!40000 ALTER TABLE `department` DISABLE KEYS */;
INSERT INTO `department`  (`department_id`, `title`, `school_id`, `deleted`)
VALUES
	(1, 'Anatomy', 1, 0),
	(2, 'Anesthesia and Perioperative Care', 1, 0),
	(3, 'Anthropology, History and Social Medicine', 1, 0),
	(4, 'Biochemistry and Biophysics', 1, 0),
	(5, 'Bioengineering and Therapeutic Sciences', 1, 0),
	(6, 'Cellular and Molecular Pharmacology', 1, 0),
	(7, 'Dermatology', 1, 0),
	(8, 'Emergency Medicine', 1, 0),
	(9, 'Epidemiology and Biostatistics', 1, 0),
	(10, 'Family and Community Medicine', 1, 0),
	(11, 'Laboratory Medicine', 1, 0),
	(12, 'Medicine', 1, 0),
	(13, 'Microbiology and Immunology', 1, 0),
	(14, 'Neurological Surgery', 1, 0),
	(15, 'Neurology', 1, 0),
	(16, 'Obstetrics, Gynecology and Reproductive Sciences', 1, 0),
	(17, 'Ophthalmology', 1, 0),
	(18, 'Orthopaedic Surgery', 1, 0),
	(19, 'Otolaryngology', 1, 0),
	(20, 'Pathology', 1, 0),
	(21, 'Pediatrics', 1, 0),
	(22, 'Physical Therapy and Rehabilitation Science', 1, 0),
	(23, 'Physiology', 1, 0),
	(24, 'Psychiatry', 1, 0),
	(25, 'Radiation Oncology', 1, 0),
	(26, 'Radiology and Biomedical Imaging', 1, 0),
	(27, 'Surgery', 1, 0),
	(28, 'Urology', 1, 0),
	(29, 'AIDS Research Institute', 1, 0),
	(30, 'Center for Health and Community', 1, 0),
	(31, 'Clinical and Translational Science Institute/CTSI', 1, 0),
	(32, 'Eli and Edythe Broad Center for Regeneration Medicine and Stem Cell Research', 1, 0),
	(33, 'Osher Center for Integrative Medicine', 1, 0),
	(34, 'Strategic Asthma Basic Research Center', 1, 0),
	(35, 'Wheeler Center for the Neurobiology of Addiction', 1, 0),
	(36, 'Cardiovascular Research Institute', 1, 0),
	(37, 'Center for Reproductive Sciences', 1, 0),
	(38, 'Diabetes Center', 1, 0),
	(39, 'George Williams Hooper Foundation', 1, 0),
	(40, 'Helen Diller Family Comprehensive Cancer Center', 1, 0),
	(41, 'Institute for Human Genetics', 1, 0),
	(42, 'Institute for Neurodegenerative Diseases ', 1, 0),
	(43, 'Phillip R. Lee Institute for Health Policy Studies', 1, 0),
	(44, 'Prevention and Public Health Group', 1, 0),
	(45, 'Department Of Cell And Tissue Biology', 2, 0),
	(46, 'Department Of Oral And Maxillofacial Surgery', 2, 0),
	(47, 'Department Of Orofacial Sciences', 2, 0),
	(48, 'Department Of Preventive And Restorative Dental Sciences', 2, 0),
	(49, 'Department of Pharmaceutical Chemistry', 3, 0),
	(50, 'Department of Bioengineering and Therapeutic Sciences', 3, 0),
	(51, 'Department of Clinical Pharmacy', 3, 0),
	(52, 'Family Health Care Nursing (FHCN)', 4, 0),
	(53, 'Community Health Systems (CHS)', 4, 0),
	(54, 'Physiological Nursing (PN)', 4, 0),
	(55, 'Social and Behavioral Sciences (SBS)', 4, 0),
	(56, 'Institute for Health & Aging', 4, 0);
/*!40000 ALTER TABLE `department` ENABLE KEYS */;
UNLOCK TABLES;
