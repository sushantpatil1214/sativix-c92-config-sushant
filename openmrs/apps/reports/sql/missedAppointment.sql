select pid1.identifier AS 'Patient ID', concat(per.given_name,'  ',per.family_name) AS 'Patient Name',
timestampdiff(year,p.birthdate,pa.date_created) As 'Age',p.gender AS 'Gender',
DATE_FORMAT(pap.start_date_time, "%d-%b-%Y")  AS 'Missed Appointment Date',
aps.name as 'Missed Appointment Service',
GROUP_CONCAT(case when pt.name='phoneNumber' then pat.value else null end) as 'Phone Number',
GROUP_CONCAT(case when pt.name='emergencyContactNo' then pat.value else null end) as 'Emergency Contact Number'
from patient pa 
inner join person_name per on pa.patient_id=per.person_id
inner join person p on pa.patient_id=p.person_id 
inner join patient_identifier pid1 on pa.patient_id=pid1.patient_id and pid1.identifier_type=3
inner join patient_appointment pap on pa.patient_id=pap.patient_id and status= 'Missed' and pap.patient_id NOT IN (select v.patient_id from visit v where pap.start_date_time <= v.date_started)and pap.start_date_time BETWEEN '#startDate#' and '#endDate#' 
inner join appointment_service aps on aps.appointment_service_id=pap.appointment_service_id
left outer join person_attribute pat on pa.patient_id=pat.person_id
inner join person_attribute_type pt on pat.person_attribute_type_id=pt.person_attribute_type_id
group by pap.start_date_time
;