// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {movieItemDetails} = props
  const {thumbnailUrl, videoUrl} = movieItemDetails

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="button-video-container">
            <button
              className="close-button"
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size="30" color="#231f20" />
            </button>
            <div>
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
