import React from 'react';
import PropTypes from 'prop-types';
// import ReactTooltip from 'react-tooltip';

import styles from './Pipeline.scss';

import DocImage from 'static/files/docker_logo.png';
import GitImage from 'static/files/Octocat.png';

export default function PipelineCard(props) {
  let center = props.center;
  let assayType = props.assayType;
  let title = props.title;
  let description = props.description;
  let centerUrl = props.centerUrl;
  let gitHubUrl = props.githubUrl;
  let dockerHubUrl = props.dockerHubUrl;
  let assayUrl = props.assayUrl;
  // let toolTipItems = props.toolTipItems;

  return (
    <div className={styles.tool}>
      <div className={styles['tool-inner']}>

        <div className={styles.cover}>
        {
          <div className={styles['cover-Top']}>
            <div className={styles['tool-img-wrap']}>
              <div className={styles['tool-img-inner']}>
                <img src={DocImage} height="50" width="50" alt={name} />
              </div>
            </div>
            <a
              href={dockerHubUrl}
              className={styles['tool-click-target']}
              target="_blank"
            >
              <span className={styles.overlay} />
            </a>
          </div>
        }
        {
          <div className={styles['cover-Bottom']}>
            <div className={styles['tool-img-wrap']}>
              <div className={styles['tool-img-inner']}>
                <img src={GitImage} height="50" width="50" alt={name} />
              </div>
            </div>
            <a
              href={gitHubUrl}
              className={styles['tool-click-target']}
              target="_blank"
            >
              <span className={styles.overlay} />
            </a>
          </div>
        }
        </div>

        <div className={styles['tool-details']}>
        {/*  <i
            className={`fa fa-info-circle ${styles.tooltip}`}
            aria-hidden="true"
            data-tip="Information is not available at this time."
            data-for={name}
          />
          <ReactTooltip
            id={name}
            place="right"
            type="dark"
            effect="float"
          >
            {toolTipItems}
          </ReactTooltip>
          */}
          <a
            href={assayUrl}
            className={styles['tool-title']}
            target="_blank"
            style={{ fontSize: '20px' }}
          >
            {assayType}
          </a>
          <br />
          <div className={styles['tool-creator']} style={{ fontSize: '13px' }}>
            <a href={centerUrl} target="_blank">{center}</a>
          </div>
          <div className={styles['tool-creator']} style={{ fontSize: '13px' }}>
            <a href={dockerHubUrl} target="_blank">{title}</a>
          </div>
          <div>
            <div className={styles['tool-description']}>
              {description}
            </div>
          </div>
        </div>
        <div className={styles['tool-ranking']}></div>
      </div>
    </div>
  );
}

PipelineCard.propTypes = {
  center: PropTypes.string,
  assayType: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  githubUrl: PropTypes.string,
  dockerHubUrl: PropTypes.string,
  toolTipItems: PropTypes.string,
  centerUrl: PropTypes.string,
  assayUrl: PropTypes.string,
};
