import React, { Component } from 'react'
import $axios from 'axios'
import './styles.scss'

class SearchDog extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showImage: true,
      dogName: '',
      dogImage: 'https://s3.amazonaws.com/nd.images/uploads/paw_gplus.png',
      dogList: [],
      dogListFiltered: []
    }
  }

  render () {
    
    let dogList = this.state.dogListFiltered.map((dog, index) => {
      return(
        <li key={'dog_' + index} onClick={this.loadDogImage.bind(this, dog)}> {dog} </li>
      )
    })

    return (
      <div id="SearchDog">
        <div id='search-panel'>
          <h3 id='title-search'>Search a dog by breed</h3>
          <input className='search-input' type='text' placeholder='Enter breed to search' onChange={ this.filterDogList.bind(this) } />
          <br /><br />
          <span className={ this.state.dogList.length ? 'hide' : ''}>Loading List</span>
          <ul id='result-list'>
            { dogList }
          </ul>
        </div>
        <div id='photo-panel'>
          <h3 className='dog-name'>{this.state.dogName}</h3>
          <img src={this.state.dogImage} />
          <h5 className={ this.state.showImage ? 'hide' : ''}>Loading Image...</h5>
        </div>
      </div>
    )
  }

  loadDogList() {
    $axios.get('https://dog.ceo/api/breeds/list')
    .then((res) => {
      this.setState({
        dogList: res.data.message
      })
      this.filterDogList()
    })
    .catch((err) => {
      console.log(err)
    })
  }

  filterDogList(event) {
    let dogListFiltered = []
    if (event && event.target.value.length > 0) {
      dogListFiltered = this.state.dogList.filter((dog) => {
        return dog.toLowerCase().search(event.target.value.toLowerCase()) != -1
      })
    } else {
      dogListFiltered = this.state.dogList
    }
    this.setState({
        dogListFiltered: dogListFiltered
    })
  }

  loadDogImage(breed) {
    if (!this.state.showImage) return
    this.setState({
      showImage: false,
      dogImage: null,
      dogName: breed
    })
    $axios.get('https://dog.ceo/api/breed/' + breed + '/images/random')
    .then((res) => {
      this.setState({
        showImage: true,
        dogImage: res.data.message
      })
    })
    .catch((err) => {
      console.log(err)
    })
  }

  componentDidMount() {
    this.loadDogList()
  }
}

export default SearchDog