SELECT DISTINCT
  pi.identifier                                                 AS "MRN",
  concat(pn.given_name, " ", ifnull(pn.middle_name, " "), " ", ifnull(pn.family_name, " "))       AS "Patient Name",
  GROUP_CONCAT(vt.name)                                         AS "Visit Type",
  u.username                                                    AS "MRU Officer"

FROM visit v
  JOIN visit_type vt ON v.visit_type_id = vt.visit_type_id
  JOIN person p ON p.person_id = v.patient_id
  JOIN users u ON u.user_id = v.creator
  JOIN patient_identifier pi ON p.person_id = pi.patient_id AND pi.identifier REGEXP ('^[0-9]+$')
  JOIN person_name pn ON pn.person_id = p.person_id

WHERE
    cast(v.date_created as date) BETWEEN '#startDate#' and '#endDate#'
GROUP BY
  pi.identifier