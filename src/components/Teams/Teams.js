import React from 'react';
import './Teams.css';

class Teams extends React.Component {

    render() {

        const day = (this.props.info.date).substring(8,10);

        const year = (this.props.info.date).substring(2,4);

        let month = (this.props.info.date).substring(5,7)
        switch(month) {
            case '01':
                month = 'January'
                break;
            case '02':
                month = 'February'
                break;
            case '03':
                month = 'March'
                break;
            case '04':
                month = 'April'
                break;
            case '05':
                month = 'May'
                break;
            case '06':
                month = 'June'
                break;
            case '07':
                month = 'July'
                break;
            case '08':
                month = 'August'
                break;
            case '09':
                month = 'September'
                break;
            case '10':
                month = 'October'
                break;
            case '11':
                month = 'November'
                break;
            case '12':
                month = 'December'
                break;
            default:
                break;
        }

        const date = `${day} ${month} 20${year}`

        let scores = (
            <div>
                <h1>{this.props.info.homeScore}  |  {this.props.info.awayScore}</h1>
            </div>
        )
        if (this.props.info.homeScore === null) {
            scores = (
                <h1>--  |  --</h1>
            )
        }

        return (
            <div className="Teams">

                <div className="headers">
             
                <div className='middle'>{date}</div>
                
                </div>

                <div className="mainInfo">

                    <div className="teams">
                        <div className="logo">
                            <img src={this.props.info.homeImg} alt="" />
                        </div>
                        
                        {this.props.info.home}
                    </div>

                    <div className="scores">
                        {scores}
                    </div>
                    
                    
                    <div className="teams">
                        <div className="logo">
                            <img src={this.props.info.awayImg} alt="" />
                        </div>
                        {this.props.info.away}
                    </div>

                </div>
            </div>
        )
    }
}

export default Teams;