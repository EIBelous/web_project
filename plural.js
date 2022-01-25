function Button(props) {


    return (
        <button onClick={props.onClickFunction}>
            +1
        </button>
    );
}

function Display(props){
    return (
        <div>{props.message}</div>)
}
function App(){
    const [counter, setCounter1] = useState(421);
    const IncrementCounter=() => setCounter1(counter+2)
    return(
        <div>
            <Button onClickFunction={IncrementCounter}/>
            <Display  message={counter}/>
        </div>);
}


ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);