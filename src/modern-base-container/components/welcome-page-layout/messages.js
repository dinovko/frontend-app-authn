import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'welcome.to.platform': {
    id: 'modern.welcome.to.platform',
    defaultMessage: 'Welcome to {siteName}, {fullName}!',
    description: 'Welcome message for authenticated users',
  },
  'complete.your.profile.1': {
    id: 'modern.complete.your.profile.1',
    defaultMessage: 'Complete your profile to get',
    description: 'First part of profile completion message',
  },
  'complete.your.profile.2': {
    id: 'modern.complete.your.profile.2',
    defaultMessage: 'personalized recommendations',
    description: 'Second part of profile completion message',
  },
});

export default messages;
