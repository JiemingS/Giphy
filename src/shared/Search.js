import React, { Component } from 'react'
import '../css/index.scss'
import axios from 'axios'
import GiphyForm from '../GiphyForm'

class Search extends Component {
  constructor () {
    super()

    this.state = {
      text: '',
      img: [],
      isLoading: true
    }
  }

  handleChange = (event) => {
    console.log('event', event.target)
    const searchField = {
      [event.target.name]: event.target.value
    }
    console.log('searchField', searchField)
    const editedSearch = Object.assign(this.state.text, searchField)
    console.log('editedSearch', editedSearch)
    this.setState({ text: editedSearch.search })
    console.log('this.state', this.state)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ img: [] })
    // another way to do
    // axios.delete(`${apiUrl}/movies/${this.props.match.params.id}`)
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${this.state.text}&api_key=RISJ6Rj5wVErhwbO3VVrGpidOUZWBnQ3&limit=6`)
      .then(res => {
        // console.log('res', res)
        // console.log('res.data', res.data)
        // console.log('res.data.data', res.data.data)
        res.data.data.map(img => {
          // console.log('img', img)
          // console.log('img.images', img.images)
          // console.log('img.images.downsized_large', img.images.downsized_large)
          // console.log('img.images.downsized_large.url', img.images.downsized_large.url)
          this.state.img.push(img.images.downsized_large.url)
        })
        // console.log('this.state.img', this.state.img)
        this.setState({ isLoading: false })
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  render () {
    let imgInfo
    if (this.state.isLoading) {
      imgInfo = []
    } else {
      imgInfo = <GiphyForm
        img={this.state.img}
      />
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            className='searchField'
            placeholder="Search..."
            name="search"
            onChange={this.handleChange}
            value={this.state.text}
            style={{
              backgroundColor: 'red',
              color: 'white'
            }}
            required
          />
          <button type="submit" className="myButton">Submit</button>
        </form>
        {imgInfo}
      </div>
    )
  }
}

export default Search
