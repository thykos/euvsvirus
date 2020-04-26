import React from 'react';
// utils
import cn from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, } from '@fortawesome/free-solid-svg-icons'
// styles
import soundwaveBg from './soundwave.png';
import './AudioPreview.css';

class AudioPreview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      duration: this.getExpectedDuration(props),
      progress: 0,
    };
  }

  componentDidMount() {
    const { asset, blob } = this.props;
    const source = 'https://www.learnoutloud.com/samples/30785/A%20House%20Reunited%20-%2001.mp3';
    this.audio = new Audio(source);
    this.audio.addEventListener('ended', this.onEnded);
    this.audio.addEventListener('timeupdate', this.onTimeUpdate);
  }

  componentWillUnmount() {
    this.audio.src = '';
    this.audio.removeEventListener('ended', this.onEnded);
    this.audio.removeEventListener('timeupdate', this.onTimeUpdate);
  }

  onPlay = () => {
    this.audio.play();
    this.setState({ isPlaying: true });
  };

  onStop = () => {
    this.audio.pause();
    this.setState({ isPlaying: false });
  };

  onEnded = () => {
    setTimeout(() => {
      this.setState({
        isPlaying: false,
        progress: 0,
      });
    }, 750);
  };

  onTimeUpdate = () => {
    const duration = Number.isFinite(this.audio.duration)
      ? this.audio.duration
      : this.state.duration;
    const currentTime = this.audio.currentTime;
    const progress = Math.floor((currentTime * 100) / duration);
    this.setState({ progress });
  };

  getExpectedDuration = ({ asset, blob }) => {
    if (blob) return Math.round(blob.blob.size / 16488);
    if (asset) return Math.round(asset.media_size / 16488);

    return false;
  };

  render() {
    const { className, onDelete, controlSize, hideAction } = this.props;
    const { isPlaying, progress } = this.state;
    const controlStyle = { width: controlSize + 'px', height: controlSize + 'px', lineHeight: controlSize + 'px' };
    const controlHanler = isPlaying ? this.onStop : this.onPlay;

    return (
      <div className={cn(`AudioPreview ${className}`, { 'playing': isPlaying })}>
        <div className="control">
          <div
            className={`audio-control-button ${isPlaying ? 'stop' : 'play'}`}
            style={controlStyle}
            onClick={controlHanler}
          >
            <FontAwesomeIcon size="1x" icon={isPlaying ? faPause : faPlay} />
          </div>
        </div>
        <div className="soundwave" style={{ backgroundImage: `url(${soundwaveBg})` }}>
          <div
            className={cn('audio-progress', { 'visible': isPlaying, 'in-progress': !!progress })}
            style={{ width: progress + '%' }}
          />
        </div>
      </div>
    );
  }
}

AudioPreview.defaultProps = {
  className: '',
  controlSize: 45,
};

// AudioPreview.propTypes = {
//   className: T.string,
//   onDelete: T.func,
//   asset: T.object,
//   blob: T.object,
//   controlSize: T.oneOfType([T.string, T.number]),
//   hideAction: T.bool,
// };

export default AudioPreview;
