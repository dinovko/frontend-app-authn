import React from 'react';

import { getConfig } from '@edx/frontend-platform';
import { useIntl } from '@edx/frontend-platform/i18n';
import { Hyperlink, Image } from '@openedx/paragon';
import classNames from 'classnames';

import messages from './messages';

const ModernSmallLayout = () => {
  const { formatMessage } = useIntl();

  return (
    <div className="modern-w-100 modern-min-vh-100 modern-background-image" />
  );
};

export default ModernSmallLayout;
