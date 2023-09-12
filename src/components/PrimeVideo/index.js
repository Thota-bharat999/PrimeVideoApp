// Write your code here
import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionsMovieList = moviesList.filter(
    each => each.categoryId === 'ACTION',
  )

  const comedyMovieList = moviesList.filter(
    each => each.categoryId === 'COMEDY',
  )

  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
        className="prime-video"
      />
      <div className="video-container">
        <h1 className="title-movie">Action Movies</h1>
        <MoviesSlider moviesList={actionsMovieList} />
        <h1 className="title-movie">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo
