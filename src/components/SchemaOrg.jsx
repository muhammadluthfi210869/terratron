import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaOrg = ({ schema }) => {
    if (!schema) return null;

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(schema)}
            </script>
        </Helmet>
    );
};

export default SchemaOrg;
