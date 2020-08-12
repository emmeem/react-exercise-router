import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class AboutUs extends Component {
    render() {
        return (
            <section>
                <div>
                    <p>Company:ThoughtWorks Local</p>
                    <p>Location:ShenZhen</p>
                </div>
                <div>
                    <p>For more information,please</p>
                    <p>view our:<Link to="/" className="web">website</Link></p>
                </div>
            </section>
        );
    }
}

export default AboutUs;