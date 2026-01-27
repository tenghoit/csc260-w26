
function MedicalRecord(props){
    const medRecord = props.medRecord
    const setMedRecord = props.setMedRecord

    function updatePickedUp(index){
        let result = {...medRecord}
        result.prescriptions[index].pickedup = true
        setMedRecord(result)
    }

    return(
        <>
            <div>
                <p><strong>Patient:</strong> {medRecord.name}</p>
                <Diagnosis symptoms={medRecord.symptoms} />
            </div>
            <div>
                <h2>Prescriptions</h2>
                {medRecord.prescriptions.map((prescription, index) => (
                    <div>
                        <p>{prescription.medication}</p>
                        {prescription.pickedup ? 
                            <p>Retrieved</p>
                            :
                            <button onClick={() => updatePickedUp(index)}>Picked Up</button>
                        }
                    </div>
                ))}
            </div>
        </>
    )
}


function Prescription(props){
    const medication = props.prescription.medication
    const pickedup = props.prescription.pickedup
    const updatePickedUp = props.updatePickedUp

    return(
        <div>
            <p>{medication}</p>
            {pickedup ? 
                <p>Retrieved</p>
                :
                <button onClick={updatePickedUp}>Picked Up</button>
            }
        </div>
    )
}

//usage when calling from MedicalRecord
<Prescription prescription={prescription} updatePickedUp={() => updatePickedUp(index)} />