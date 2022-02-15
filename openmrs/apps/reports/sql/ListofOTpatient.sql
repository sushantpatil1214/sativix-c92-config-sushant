select pid.identifier AS 'Patient Identifier',
concat(pn.given_name,'  ',pn.family_name) AS 'Patient Name',per.gender AS 'Gender',
timestampdiff(year,per.birthdate,pa.date_created) As 'Age',
DATE_FORMAT(sb.start_datetime, "%d-%b-%Y")  AS 'Operations/surgeries Date',
time(sb.start_datetime) AS 'Operations/surgeries Time',
GROUP_CONCAT(distinct(case when st.name='procedure' then sat.value else null end),'') as 'Procedure(s)',
concat(pn1.given_name,'  ',pn1.family_name) as 'Surgeon',
GROUP_CONCAT(distinct(case when st1.name='otherSurgeon' then concat(pn2.given_name,'  ',pn2.family_name) else null end),'') as 'Other Surgeon',
GROUP_CONCAT(distinct(case when st.name='surgicalAssistant' then sat.value else null end),'') as 'Surgical Assistant',
GROUP_CONCAT(distinct(case when st.name='anaesthetist' then sat.value else null end),'') as 'Anesthetist',
GROUP_CONCAT(distinct(case when st.name='scrubNurse' then sat.value else null end),'') as 'Scrub Nurse',
GROUP_CONCAT(distinct(case when st.name='circulatingNurse' then sat.value else null end),'') as 'Circulating Nurse',
sa.status as 'Status'
from patient pa 
inner join person_name pn on pa.patient_id=pn.person_id
inner join person per on pa.patient_id=per.person_id 
inner join patient_identifier pid on pa.patient_id=pid.patient_id and pid.identifier_type=3
inner join surgical_appointment sa on pa.patient_id=sa.patient_id
inner join surgical_block sb on sa.surgical_block_id=sb.surgical_block_id and sb.start_datetime BETWEEN '#startDate#' and '#endDate#' 
inner join provider p on sb.primary_provider_id=p.provider_id  
inner join person_name pn1 on p.person_id=pn1.person_id
inner join surgical_appointment_attribute sat on sa.surgical_appointment_id=sat.surgical_appointment_id
inner join surgical_appointment_attribute_type st on sat.surgical_appointment_attribute_type_id=st.surgical_appointment_attribute_type_id
inner join surgical_appointment_attribute sat1 on sa.surgical_appointment_id=sat1.surgical_appointment_id
inner join surgical_appointment_attribute_type st1 on sat1.surgical_appointment_attribute_type_id=st1.surgical_appointment_attribute_type_id
inner join provider p1 on p1.provider_id=sat1.value
inner join person_name pn2 on pn2.person_id=p1.person_id
group by sa.surgical_appointment_id 
order by sb.start_datetime
;

