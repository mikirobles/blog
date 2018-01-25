import styled from 'styled-components'
import React from 'react'
import fetch from 'isomorphic-fetch'


const getRandomImage = async () => {
  const json = await (await fetch('https://archillect-api.now.sh/random')).json()
  return json.source.replace('http:', 'https:');
}

const HeaderImgContainer = styled.div`
  width: 100%;
  max-height: 300px;
  height: 30vh;
  background: black;
  border-radius: 5px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
`

export default class HeaderImg extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cover: this.props.src
    }
  }
  
  componentWillMount() {
    if (!this.props.src) {
      getRandomImage()
        .then(src => {
          this.setState({ cover: src })
        })
    }
  }

  render() {
    return (
      <HeaderImgContainer>
        <img src={this.state.cover} alt={this.props.label || ""} />
      </HeaderImgContainer>
    )
  }
} 