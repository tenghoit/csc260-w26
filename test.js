function Weather(props){
   return(
       <BrowserRouter>
           <Routes> {/* <--- THIS WAS MISSING */}
               <Route path='/' element={<Full records={props.records} />} />
               <Route path='/:year' element={<Year records={props.records} />} />
               <Route path='/:year/:season' element={<Season records={props.records} />} />
           </Routes>
       </BrowserRouter>
   )
}


function Full(props){
   const records = props.records

   return(
       <table>
           <tr>
               <td>Year</td>
               <td>Season</td>
               <td>Temp</td>
           </tr>
           {records.map(record => (
               <tr>
                   <td>{record["year"]}</td>
                   <td>{record["season"]}</td>
                   <td>{record["temp"]}</td>
               </tr>
           ))}
       </table>
   )
}




function Year(props){
   const records = props.records
   const { year } = useParams()

   const yearRecords = records.filter(record => record.year === year)
   const totalTemp = yearRecords.reduce((sum, curr) => sum + curr.temp)
   const avg = totalTemp / yearRecords.length

   return(
        <p>Average temp in {year}: {avg}</p>
   )
}


function Season(props){
   const records = props.records
   const { year, season } = useParams()

   let seasonRecords = records.filter(record => (record.year === year) && (record.season === season))
   let totalTemp = seasonRecords.reduce((total, curr) => total + curr.temp)
   let avg = totalTemp / seasonRecords.length

   return(
       <p>{season} {year} {avg}</p>
   )


}
