import { Helmet, HelmetProvider } from 'react-helmet-async';
import PropTypes from 'prop-types';

const PageTitle = ({ title }) => {
    return (
        <div>
            <HelmetProvider>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
            </HelmetProvider>
        </div>
    );
};

PageTitle.propTypes = {
    title: PropTypes.string.isRequired
}

export default PageTitle;