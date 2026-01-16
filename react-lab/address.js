

function Address(props){
    return(
        <address>
            {props.street}<br/>
            {props.city}, {props.state} {props.zip}
        </address>
    )
}


function Profile(props){
    return(
        <>
            <p>Name: {props.name}</p>
            <p>Home Address:</p>
            <Address street={props.homeAddress.street} city={props.homeAddress.city} state={props.homeAddress.state} zip={props.homeAddress.zip} />
            <p>Work Address:</p>
            <Address street={props.workAddress.street} city={props.workAddress.city} state={props.workAddress.state} zip={props.workAddress.zip} />
        </>
    )
}


function App() {
    let homeAddress = {
        street: "101 Main",
        city: "Denver",
        state: "CO", 
        zip: "80014"
    }
    let workAddress = {
        street: "2000 Central",
        city: "Aurora",
        state: "CO",
        zip: "80010"
    }


   return ( 
        <Profile name="Li Chen" homeAddress={homeAddress} workAddress={workAddress}/>
   )    
}