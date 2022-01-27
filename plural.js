function Button(props) {

    const handleClick=()=>props.onClickFunction(props.increment)
    return (
        <button onClick={handleClick}>
            +{props.increment}
        </button>
    );
}

function Display(props){
    return (
        <div>{props.message}</div>)
}
function App(){
    const [counter, setCounter1] = useState(0);
    const IncrementCounter=(incrementValue) => setCounter1(counter+incrementValue)
    return(
        <div>
            <Button onClickFunction={IncrementCounter} increment={5} />
            <Button onClickFunction={IncrementCounter} increment={1} />
            <Button onClickFunction={IncrementCounter} increment={5} />
            <Button onClickFunction={IncrementCounter} increment={10} />
            <Button onClickFunction={IncrementCounter} increment={100} />
            <Display  message={counter}/>
        </div>);
}


ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);