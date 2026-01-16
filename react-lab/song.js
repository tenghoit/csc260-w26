function Song(props){
    return(
        <>
            <p>Title: <a href={props.link}>{props.title}</a></p>
            <p>Artist: {props.artist}</p>
            <p>Length: {props.length}</p>
        </>
    );
}



return(
    <Song link="https://en.wikipedia.org/wiki/Africa_(Toto_song)" title="Africa" artist="Toto" length="4:55" />
)