import { createRoot } from "react-dom/client"

const App = () => {

    function handleSubmit(e) {
        e.preventDefault()
        let inputNum1 = document.getElementById("num_1").value 
        let inputNum2 = document.getElementById("num_2").value

        let divRenderBox = document.getElementById("render-box")
        divRenderBox.innerHTML = `<p>You have chosen to add together ${inputNum1} and ${inputNum2}</p>`

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="num_1" />
                <input id="num_2"/>
                <button id="submit-btn">SUBMIT</button>
            </form>
            <div id="render-box">

            </div>
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(<App />)

