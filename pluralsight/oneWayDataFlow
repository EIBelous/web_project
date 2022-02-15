function Button(props) {
    // const handleClick = () => setCounter(counter+1);
    return (
        <button onClick={props.onClickFunction}>
            +{props.increment}
        </button>
    );
}

function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

function App() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => setCounter(counter+1);
    return (
        <div>
            <Button onClickFunction={incrementCounter} increment={1} />
            <Button onClickFunction={incrementCounter} increment={5} />
            <Button onClickFunction={incrementCounter} increment={10} />
            <Button onClickFunction={incrementCounter} increment={100} />
            <Display message={counter}/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('mountNode'),
);