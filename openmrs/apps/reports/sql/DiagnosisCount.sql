select dcv.concept_full_name as 'Diagnosis',
(
	select count(dcvi.concept_full_name)
    from obs o
    inner join diagnosis_concept_view dcvi on o.value_coded=dcvi.concept_id
    inner join person per on per.person_id= o.person_id and per.gender='M'
    where  dcvi.concept_full_name =dcv.concept_full_name
) as 'Male',
(
	select count(dcvi.concept_full_name)
    from obs o
    inner join diagnosis_concept_view dcvi on o.value_coded=dcvi.concept_id
     inner join person per on per.person_id= o.person_id and per.gender='F'
    where  dcvi.concept_full_name =dcv.concept_full_name
) as 'Female',
(	select count(dcvi.concept_full_name)
    from obs o
    inner join diagnosis_concept_view dcvi on o.value_coded=dcvi.concept_id
     inner join person per on per.person_id= o.person_id and per.gender='O'
    where  dcvi.concept_full_name =dcv.concept_full_name
) as 'Other',
(	select count(dcvi.concept_full_name)
    from obs o
    inner join diagnosis_concept_view dcvi on o.value_coded=dcvi.concept_id
     inner join person per on per.person_id= o.person_id
    where  dcvi.concept_full_name =dcv.concept_full_name
) as 'Total'
 from obs o 
inner join diagnosis_concept_view dcv on o.value_coded=dcv.concept_id
inner join patient p on p.patient_id = o.person_id
inner join encounter e on e.encounter_id=o.encounter_id
inner join person_name pn on pn.person_id=p.patient_id
inner join person per on per.person_id=p.patient_id
inner join patient_identifier pi on pi.patient_id=p.patient_id and pi.identifier_type=3
WHERE o.date_created BETWEEN date('#startDate#') and date('#endDate#')
group by dcv.concept_full_name
