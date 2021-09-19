import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import { Cardlist } from './components/card-list/card-list.component'
import { CardlistV2 } from './components/card-list-v2/card-list-v2.component'
import { SearchBox} from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Albert',
      monsters: [
        { name: 'A', id: '1111' },
        { name: 'B', id: '2222' },
        { name: 'C', id: '3333' }
      ],
      searchField:''
    }
    // this.handleChange=this.handleChange.bind(this)
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))

  }

  // handleChange(e){
  //   this.setState({searchField:e.target.value})
  // }
  // need to use this to bind it
  handleChange=(e)=>{
    this.setState({searchField:e.target.value})
  }
  render() {
    const {monsters,searchField}=this.state
    // equivalent to
    // const monsters=this.state.monsters
    const filteredMonsters=monsters.filter(monster=>monster.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase()))
    return (<div className="App">
      {/* <input type='search' placeholder='search monster' onChange={e=>{this.setState({searchField:e.target.value},()=>  console.log('async after call back',this.state.searchField)  )
    console.log('wont display the result right away',this.state.searchField)  }}></input> */}
    {/* onChange is an event and jsx */}
   {/* <input type='search' placeholder='search monster' onChange={e=>this.setState({searchField:e.target.value})}></input> */}
   {/* <SearchBox placeholder='search monster' handleChange={e=>this.setState({searchField:e.target.value})}/> */}
   <SearchBox placeholder='search monster' handleChange={this.handleChange}/>

        {/* (1) */}
        {/* <Cardlist>Chilren</Cardlist> */}
        {/* (2) */}
        {/* <Cardlist>{this.state.monsters.map(monster=>
  (<h1 key={monster.id}>{monster.name}</h1>)
  )}</Cardlist> */}
        {/* (3) */}
        <CardlistV2 monsters={filteredMonsters}></CardlistV2>
        <p>{this.state.name} </p>
        <button onClick={() => this.setState({ name: 'Lee' })}>Change Text</button>
        {/* when click it, change the state, rerender the page */}
        {/* onClick is JSX, HTLM is onclick but not onClick */}
        {/* between curly brace, render any js */}
        {/* {this.state.monsters.map(monster=>
  (<h1 key={monster.id}>{monster.name}</h1>)
  )} */}
    </div>
    )

  }
}

export default App;
