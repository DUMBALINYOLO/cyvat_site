import React, { Component, Fragment } from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Card} from 'primereact/card';
import './Carousel.scss';
import { connect } from 'react-redux';
import { getBoardMembers } from '../actions/web';
import './Team.css';


export class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            personels: null
        };

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 3,
                numScroll: 3
            },
            {
                breakpoint: '600px',
                numVisible: 2,
                numScroll: 2
            },
            {
                breakpoint: '480px',
                numVisible: 1,
                numScroll: 1
            }
        ];

        this.productTemplate = this.productTemplate.bind(this);
    }

    componentDidMount() {
        this.props.getBoardMembers();
    }

    productTemplate(member) {
        return (
            <div className="product-iem">
                <div className="product-tem-content">
                    <div className="p-mb-3">
                        <img src={member.image} alt={member.name} className="product-image" style={{width: '200px', height: '150px', boxShadow: 'tomato'}} />
                    </div>
                    <div>
                        <h4 className="p-mb-1">{member.name}</h4>
                        <h2 className="p-mt-0 p-mb-3">{member.position}</h2>
                        <div className="car-buttons p-mt-5">
                            <Button icon="pi pi-search" className="p-button p-button-rounded p-mr-2" />
                            <Button icon="pi pi-star" className="p-button-success p-button-rounded p-mr-2" />
                            <Button icon="pi pi-cog" className="p-button-help p-button-rounded" />
                        </div>
                    </div>
                </div>
            </div>
           
        );
    }


    render() {
        return (
            <Fragment>
                <li className='zards__item'>
                    <Carousel 
                        value={this.props.boardmembers} 
                        numVisible={1} 
                        numScroll={1} 
                        orientation="vertical" 
                        verticalViewPortHeight="352px"
                        itemTemplate={this.productTemplate} 
                        header={<h2>OUR BOARD </h2>} style={{maxWidth: '400px', marginTop: '2em', textAlign: 'center'}} 
                        autoplayInterval={3000}
                    />
                </li>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
   boardmembers : state.boardmembers.boardmembers
})

export default connect(mapStateToProps, {getBoardMembers} ) (Board);

