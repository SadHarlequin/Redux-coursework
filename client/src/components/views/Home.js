import {useSelector} from "react-redux";


export default function Home() {
    const user = useSelector(state => state.user)
    if (user?.username==null){
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to my shop. Please, look at the products or log in to make purchases. 
                </p>
            </header>
        </div>
        )
    }
    else
    {
    return(
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome, {user?.username}!
                </p>
            </header>
        </div>
        )
    }
}
