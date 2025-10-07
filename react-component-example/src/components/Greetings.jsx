import './Greetings.css'
export default function Greetings({userName,age}) {
    return (
        <div className="greetings">
            <h2>Hello, I am {userName}.I am {age} years old.</h2>
            
        </div>
    );
}