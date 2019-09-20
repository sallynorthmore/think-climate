import * as React from 'react';
import * as S from './styles';
import ArrowCta from '../ArrowCta';
import MovingShapes from '../MovingShapes';
import Observer from '@researchgate/react-intersection-observer';

export interface IProps {
  body: string;
  ctaText?: string;
  isVideoRight?: boolean;
  title: string;
  url?: string;
  video: string;
  videoFileType: string;
}

class Video extends React.Component<IProps, any> {
  private video: React.RefObject<HTMLVideoElement> = React.createRef();

  public render() {
    const {
      body,
      ctaText,
      isVideoRight,
      title,
      url,
      video,
      videoFileType
    } = this.props;

    const options = {
      onChange: this.handleIntersection,
      rootMargin: '-20% 0% -40%',
      threshold: [0, 1]
    };

    return (
      <S.Video isVideoRight={isVideoRight}>
        <S.Media>
          <MovingShapes isLarge={true}>
            <Observer {...options}>
              <video
                className="video"
                ref={this.video}
                loop={true}
                height="100%"
                width="100%"
                muted={true}
              >
                <source src={video} type={`video/${videoFileType}`} />
              </video>
            </Observer>
          </MovingShapes>
        </S.Media>
        <S.Content>
          <h2 className="title">{title}</h2>
          <div className="body">{body}</div>
          {url && (
            <div className="link">
              <ArrowCta url={url} text={ctaText} />
            </div>
          )}
        </S.Content>
      </S.Video>
    );
  }

  private handleIntersection = event => {
    if (event.isIntersecting) {
      const playPromise = this.video.current!.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.log('error', error);
        });
      }
    } else {
      this.video.current!.pause();
    }
  };
}

export default Video;
