const Hello = () => {
    return <h1>Hello</h1>
}

const Goodbye = () => {
    return <h2>Goodbye</h2>
}

const App = () => {
    return (
        <div>
            <Hello/>
            <RandomNum/><RandomNum/>
            <Goodbye/>
            <Hello/>
            <Hello/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'));