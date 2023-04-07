//use props to set heading and slogan.



const Header = (props) => {
    return(
        <div>
        <h1>{props.heading}</h1>
        <h3>{props.slogan}</h3>
    </div>

    );
}

const Exercise2 = ()=> {
    return(
        <Header heading="Welcome to Baham!" slogan="Reducing your carbon footprint."/>

    );

}
export default Exercise2;