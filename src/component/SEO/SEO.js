import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';


const SEO = ({postData = {}}) => (
    <StaticQuery 
        query={graphql`
            {
                site{
                    siteMetadata{
                        title
                        description
                        siteUrl
                        image
                    }
                }
            }
        `}
        render={({ site: { siteMetadata: seo } }) => {
            const title = postData.title || seo.title;
            const description = postData.description || seo.description;
            const url = postData.siteUrl || seo.siteUrl;
            const image = postData.image || seo.image;

            return (
                <Helmet>
                    <meta charset="utf-8"></meta>
                    <title>{title}</title>
                    <meta name="description" content={description} />
                    <meta name="image" content={image} />
                    <link rel="shortcut icon" type="image/png" href="/favicon.png"/>

                    {/* OpenGraph tags */}
                    <meta property="og:url" content={url} />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:image" content={image} />

                    {/* Twitter Card tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={title} />
                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:image" content={image} />
                </Helmet>
            )
        }}

    />
)

export default SEO