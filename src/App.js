import React from 'react';
import './styles.css'; 

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {
                fullName : "Arsalen Fattoum",
                bio: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
                imgSrc: "./arsa.jpg",
                profession: "Developer"
            },
            show: false,
            time: 0
        }
    }

    componentDidMount() {
        setInterval(() => {
          this.setState({ time: this.state.time + 1 });
        }, 1000);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({show: !this.state.show})}>Toggle Profile</button>
                {this.state.show && (
                    <div className='background'>
                        <img src={this.state.person.imgSrc} alt={this.state.person.fullName} className="image" />
                        <h1>{this.state.person.fullName}</h1>
                        <p className='parag'>{this.state.person.bio}</p>
                        <p className='para'>Profession: {this.state.person.profession}</p>
                    </div>
                )}
                <div>Time since last mount : {this.state.time}</div>
            </div>
        )
    }
}

export default App;
