import React from 'react';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';
import Header from "./Header";
import Products from "./Products"

function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <Header />
                    <ContentRowTop />
                    <Products />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;