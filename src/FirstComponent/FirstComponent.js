import React from 'react';
import'../FirstComponent/FirstComponent.css';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import BodyComponent from '../BodyComponent/BodyComponent';
import FooterComponent from '../FooterComponent/FooterComponent';

const FirstComponent = () => {
    return (
    <div>
        <HeaderComponent />
        <BodyComponent />   
        <FooterComponent />  
    </div>
            
       
    )
}
export default FirstComponent;