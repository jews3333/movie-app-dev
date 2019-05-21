import React from 'react';
import Slider from "react-slick";
import './Stlls.css';

class Stlls extends React.Component {

    static defaultProps = {
        stlls : '-'
    }

    renderStlls = () => {
        const stllsArray = this.props.stlls.split("|");
        const stlls = stllsArray.map((stll, index) => {
            return <div key={index} className="stll"><img src={stll} alt=''/></div>
        })
        return stlls
    }

    resetToShow = () => {
        if(this.props.stlls.split("|").length < 4){
            return 1;
        } else {
            return 3;
        }
    }
    
    render(){
        const settings = {
            centerMode: true,
            centerPadding: '60px',
            padding: '10px',
            arrow: true,
            slidesToShow: this.props.stlls ? this.resetToShow() : null
        }

        return (
            <div className="slider">
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
                <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
                <Slider {...settings}>
                    {this.renderStlls()}
                </Slider>
            </div>
        );
    }
}

export default Stlls;