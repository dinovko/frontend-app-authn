import React, { useState } from 'react';
import { connect } from 'react-redux';
import { sendTrackEvent } from '@edx/frontend-platform/analytics';
import PropTypes from 'prop-types';
import ModernBaseContainer from '../modern-base-container';
import { clearThirdPartyAuthContextErrorMessage } from '../common-components/data/actions';
import { ModernLoginPage } from '../modern-login';
import { backupLoginForm } from '../login/data/actions';
import './ModernLogistration.scss';

const ModernLogistration = (props) => {
    const [institutionLogin, setInstitutionLogin] = useState(false);

    const handleInstitutionLogin = (e) => {
        sendTrackEvent('edx.bi.institution_login_form.toggled', { category: 'user-engagement' });
        setInstitutionLogin(!institutionLogin);
    };

    return (
        <ModernBaseContainer>
            <ModernLoginPage institutionLogin={institutionLogin} handleInstitutionLogin={handleInstitutionLogin} />
            {/* <div>
                <div id="main-content" className="modern-main-content">
                </div>
            </div> */}
        </ModernBaseContainer>
    );
};

ModernLogistration.propTypes = {
    backupLoginForm: PropTypes.func.isRequired,
    clearThirdPartyAuthContextErrorMessage: PropTypes.func.isRequired,
};

export default connect(
    null,
    {
        backupLoginForm,
        clearThirdPartyAuthContextErrorMessage,
    },
)(ModernLogistration);
