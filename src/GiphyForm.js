import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'

class GiphyForm extends Component {
  constructor () {
    super()

    this.state = {}
  }

  render () {
    console.log('this.props', this.props)
    this.props.img.map(url => {
      console.log(url)
    })

    return (
      <Container fluid={true}>
        <Row>
          <Col sm style={{ backgroundImage: 'url(' + this.props.img[0] + ')', margin: '10px', height: '50vh', backgroundSize: 'cover' }}></Col>
          <Col sm style={{ backgroundImage: 'url(' + this.props.img[1] + ')', margin: '10px', height: '50vh', backgroundSize: 'cover' }}></Col>
          <Col sm style={{ backgroundImage: 'url(' + this.props.img[2] + ')', margin: '10px', height: '50vh', backgroundSize: 'cover' }}></Col>
        </Row>
        <Row>
          <Col sm style={{ backgroundImage: 'url(' + this.props.img[3] + ')', margin: '10px', height: '50vh', backgroundSize: 'cover' }}></Col>
          <Col sm style={{ backgroundImage: 'url(' + this.props.img[4] + ')', margin: '10px', height: '50vh', backgroundSize: 'cover' }}></Col>
          <Col sm style={{ backgroundImage: 'url(' + this.props.img[5] + ')', margin: '10px', height: '50vh', backgroundSize: 'cover' }}></Col>
        </Row>
      </Container>
    )
  }
}

export default GiphyForm
