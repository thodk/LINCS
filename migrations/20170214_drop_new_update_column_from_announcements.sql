ALTER TABLE announcements
DROP COLUMN new_update;


-- INSERT INTO `announcements` (`id`, `title`, `description`, `presenter`, `eDSR`, `webinar`, `course`, `training_program`, `custom`, `event_date`, `link`, `link_text`, `created_at`, `updated_at`)
-- VALUES
-- 	(1, 'Construction, Characterization and Validation of Multiscale Gene Networks in Cancer', NULL, 'Bin Zhang PhD, Icahn School of Medicine at Mount Sinai', NULL, 1, NULL, NULL, NULL, '2016-06-28 00:00:00', NULL, NULL, NULL, NULL),
-- 	(3, 'Connectivity Map Challenge', 'The LINCS Center for Transcriptomics, in partnership with the Crowd Innovation Lab at Harvard Business School, is launching their first challenge, \"Infer the Transcriptome\".', NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-27 00:00:00', 'http://crowdsourcing.topcoder.com/cmap', 'Register', NULL, NULL),
-- 	(4, 'New Release for Data Standards', 'LINCSProject.org has been newly updated to reflect the most recent standards releases (version dated 5-13-2016) in LINCS Production Phase 2.', NULL, NULL, NULL, NULL, NULL, NULL, '2016-05-13 00:00:00', 'http://lincsproject.org/LINCS/data/standards', 'Read More', NULL, NULL),
-- 	(5, 'Connectivity Map Challenge 1', 'The LINCS Center for Transcriptomics completed their first crowdsourcing challenge, \"Infer the Transcriptome\". Stay tuned for details about the upcoming Connectivity Map Challenge 2.', NULL, NULL, NULL, NULL, NULL, NULL, '2016-07-26 00:00:00', 'http://lincsproject.org/LINCS/community/overview', 'Read More', NULL, NULL),
-- 	(6, 'Mark your calendars for the upcoming LINCS Consortium Face-to-Face Meeting at the NIH Campus in Bethesda, MD.', NULL, NULL, NULL, NULL, NULL, NULL, 'Conference', '2016-09-19 00:00:00', 'https://twitter.com/hashtag/LINCSDATA?src=hash', '#LINCSDATA', NULL, NULL),
-- 	(8, 'Mark your calendars for the upcoming session of the BD2K-LINCS Big Data Science MOOC on Coursera organized by the BD2K-LINCS DCIC', NULL, NULL, NULL, NULL, 1, NULL, NULL, '2016-10-03 00:00:00', 'https://www.coursera.org/learn/bd2k-lincs', 'Enroll Now', NULL, NULL),
-- 	(9, 'Unravelling Hairballs: Biological Pathways From Protein Modification Cluster Networks', NULL, 'Mark Grimes PhD, University of Montana', 1, NULL, NULL, NULL, NULL, '2016-10-04 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details', NULL, NULL),
-- 	(11, 'Docker Pipelines for RNASeq Alignment and Analyses', NULL, 'Ling-Hong Hung PhD, University of Washington', 1, 1, NULL, NULL, NULL, '2016-11-22 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details', NULL, NULL),
-- 	(12, 'Dynamic Logic-Based Models Integrating Cardiac Signaling Networks and Cellular Phenotypes', NULL, 'Jeff Saucerman PhD, University of Virginia', 1, 1, NULL, NULL, NULL, '2016-12-06 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details', NULL, NULL),
-- 	(14, 'Combining Forward and Reverse Engineering to Understand Complex Fractional Killing', NULL, 'Tongli Zhang PhD, University of Cincinnati', NULL, 1, NULL, NULL, NULL, '2017-04-25 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details', NULL, NULL),
-- 	(15, 'Big Data Science with the BD2K-LINCS Data Coordination and Integration Center', '', NULL, NULL, NULL, 1, NULL, NULL, '2017-01-23 00:00:00', 'http://www.coursera.org/learn/bd2k-lincs', 'Details', NULL, NULL),
-- 	(16, 'Big Data Science with the BD2K-LINCS Data Coordination and Integration Center', NULL, NULL, NULL, NULL, 1, NULL, NULL, '2017-02-20 00:00:00', 'http://www.coursera.org/learn/bd2k-lincs', 'Enroll Now', NULL, NULL),
-- 	(17, 'Identifying New Antiepileptic Drugs Through Genomics-Based Drug Repurposing', NULL, 'Nasir Mirza PhD, University of Liverpool', NULL, 1, NULL, NULL, NULL, '2017-02-28 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details', NULL, NULL),
-- 	(18, 'Applications due for BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science', NULL, NULL, NULL, NULL, NULL, 1, NULL, '2017-03-01 00:00:00', 'http://www.lincsproject.org/LINCS/community/overview', 'Details', NULL, NULL),
-- 	(19, 'Big Data Science with the BD2K-LINCS Data Coordination and Integration Center', NULL, NULL, NULL, NULL, 1, NULL, NULL, '2017-03-20 00:00:00', NULL, NULL, NULL, NULL),
-- 	(20, 'Session at AACR Annual Meeting', 'Advancing Cancer Therapy Using Data from the NIH LINCS Program', NULL, NULL, NULL, NULL, NULL, 'Conference', '2017-04-04 00:00:00', NULL, NULL, NULL, NULL),
-- 	(21, 'Big Data Science with the BD2K-LINCS Data Coordination and Integration Center', NULL, NULL, NULL, NULL, 1, NULL, NULL, '2017-04-17 00:00:00', NULL, NULL, NULL, NULL),
-- 	(23, 'Big Data Science with the BD2K-LINCS Data Coordination and Integration Center', NULL, NULL, NULL, NULL, 1, NULL, NULL, '2017-05-15 00:00:00', NULL, NULL, NULL, NULL),
-- 	(24, 'BD2K-LINCS Data Science Symposium 2017', 'Systems biology of cellular perturbations', NULL, NULL, NULL, NULL, NULL, 'BD2K-LINCS Symposium', '2017-05-16 00:00:00', NULL, NULL, NULL, NULL),
-- 	(25, 'BD2K-LINCS DCIC Summer Research Training Program in Biomedical Big Data Science', NULL, NULL, NULL, NULL, NULL, 1, NULL, '2017-06-05 00:00:00', NULL, NULL, NULL, NULL),
-- 	(26, 'Big Data Science with the BD2K-LINCS Data Coordination and Integration Center', NULL, NULL, NULL, NULL, 1, NULL, NULL, '2017-06-12 00:00:00', NULL, NULL, NULL, NULL),
-- 	(28, 'Editorial in Science Translational Medicine', 'Mohammed AlQuraishi and Peter Sorger from the HMS LINCS Center make the case for improving accessibility and usability of published experimental data of all types.', NULL, NULL, NULL, NULL, NULL, NULL, '2016-05-18 00:00:00', 'http://www.ncbi.nlm.nih.gov/pubmed/27194726', 'Read More', NULL, NULL),
-- 	(36, 'Cell Line Ontology-based Standardization, Integration and Analysis of LINCS Cell Lines', NULL, 'Yongqun \"Oliver\" He DVM, PhD, University of Michigan Medical School', 1, 1, NULL, NULL, NULL, '2016-11-15 00:00:00', 'http://lincsproject.org/LINCS/community/webinars', 'Details', NULL, NULL),
-- 	(39, 'Integration of Phosphorylation Knowledge Networks with LINCS Omics Data for Cancer Drug Analysis', NULL, 'Karen Ross PhD & Cathy Wu PhD, University of Delaware', 1, 1, NULL, NULL, NULL, NULL, 'http://lincsproject.org/LINCS/community/webinars', 'Details', NULL, NULL);