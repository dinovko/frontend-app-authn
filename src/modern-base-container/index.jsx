import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import './ModernBaseContainer.scss';
import { breakpoints } from '@openedx/paragon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import { ModernLargeLayout, ModernMediumLayout, ModernSmallLayout } from './components/default-layout';
import {
  ModernImageExtraSmallLayout, ModernImageLargeLayout, ModernImageMediumLayout, ModernImageSmallLayout,
} from './components/image-layout';
import { ModernAuthLargeLayout, ModernAuthMediumLayout, ModernAuthSmallLayout } from './components/welcome-page-layout';

const ModernBaseContainer = ({ children, showWelcomeBanner, fullName }) => {
  const enableImageLayout = getConfig().ENABLE_IMAGE_LAYOUT;

  if (enableImageLayout) {
    return (
      <div className="modern-layout">
        <MediaQuery maxWidth={breakpoints.extraSmall.maxWidth - 1}>
          {showWelcomeBanner ? <ModernAuthSmallLayout fullName={fullName} /> : <ModernImageExtraSmallLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.small.minWidth} maxWidth={breakpoints.small.maxWidth - 1}>
          {showWelcomeBanner ? <ModernAuthSmallLayout fullName={fullName} /> : <ModernImageSmallLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
          {showWelcomeBanner ? <ModernAuthMediumLayout fullName={fullName} /> : <ModernImageMediumLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
          {showWelcomeBanner ? <ModernAuthLargeLayout fullName={fullName} /> : <ModernImageLargeLayout />}
        </MediaQuery>
        <div className={classNames('modern-content', { 'align-items-center mt-0': showWelcomeBanner })}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="col-md-12 modern-extra-large-screen-top-stripe" />
      <div className="modern-layout">
      <div className="modern-login-header">
        <div className="modern-logo">ORLEU</div>
        <div className="modern-header-right">
          <div className="modern-language-selector">
            <span className="modern-language-option">Каз</span>
            <span className="modern-language-option active">Рус</span>
            <span className="modern-language-option">Eng</span>
          </div>
          <button className="modern-login-button-header">Войти</button>
          <div className="modern-hamburger-menu">
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>
      </div>
        <MediaQuery maxWidth={breakpoints.small.maxWidth - 1}>
          {showWelcomeBanner ? <ModernAuthSmallLayout fullName={fullName} /> : <ModernSmallLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.medium.minWidth} maxWidth={breakpoints.large.maxWidth - 1}>
          {showWelcomeBanner ? <ModernAuthMediumLayout fullName={fullName} /> : <ModernMediumLayout />}
        </MediaQuery>
        <MediaQuery minWidth={breakpoints.extraLarge.minWidth}>
          {showWelcomeBanner ? <ModernAuthLargeLayout fullName={fullName} /> : <ModernLargeLayout />}
        </MediaQuery>
        <div className={classNames('modern-content', { 'align-items-center mt-0': showWelcomeBanner })}>
          {children}
        </div>
      </div>
    </>
  );
};

ModernBaseContainer.defaultProps = {
  showWelcomeBanner: false,
  fullName: null,
};

ModernBaseContainer.propTypes = {
  children: PropTypes.node.isRequired,
  showWelcomeBanner: PropTypes.bool,
  fullName: PropTypes.string,
};

export default ModernBaseContainer;
