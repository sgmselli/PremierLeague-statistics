import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.getID = this.getID.bind(this)
        this.getSurfix = this.getSurfix.bind(this)
    }

    getID(team) {
        let id = null;
        switch(team) {
            case 'manchester united':
                id=33;
                break;
            case 'newcastle':
                id=34;
                break;
            case 'bournemouth':
                id=35;
                break;
            case 'fulham':
                id=36;
                break;
            case 'huddersfield':
                id=37;
                break;
            case 'watford':
                id=38;
                break;
            case 'wolves':
                id=39;
                break;
            case 'liverpool':
                id=40;
                break;
            case 'southhampton':
                id=41;
                break;
            case 'arsenal':
                id=42;
                break;
            case 'burnley':
                id=44;
                break;
            case 'everton':
                id=45;
                break;
            case 'leicester':
                id=46;
                break;
            case 'tottenham':
                id=47;
                break;
            case 'westham':
                id=48;
                break;
            case 'chelsea':
                id=49;
                break;
            case 'manchester city':
                id=50;
                break;
            case 'brighton':
                id=51;
                break;
            case 'crystal palace':
                id=52;
                break;
            default:
                break;
        }
        return id;
    }

    getSurfix() {
        const t1 = document.getElementById('t1');
        const t2 = document.getElementById('t2');
        const id1 = this.getID(t1.value);
        const id2 = this.getID(t2.value);
        this.props.onClick(id1,id2)
    }

    render() {

        return (
            <div>
                <select id="t1">
                    <option value="manchester united">Manchester United</option>
                    <option value="newcastle">Newcastle</option>
                    <option value="bournemouth">Bournemouth</option>
                    <option value="fulham">Fulham</option>
                    <option value="huddersfield">Huddersfield</option>
                    <option value="watford">Watford</option>
                    <option value="wolves">Wolves</option>
                    <option value="liverpool">Liverpool</option>
                    <option value="southhampton">Southhampton</option>
                    <option value="arsenal">Arsenal</option>
                    <option value="burnley">Burnley</option>
                    <option value="everton">Everton</option>
                    <option value="leicester">Leicester</option>
                    <option value="tottenham">Tottenham</option>
                    <option value="westham">Westham</option>
                    <option value="chelsea">Chelsea</option>
                    <option value="manchester city">Manchester City</option>
                    <option value="brighton">Brighton</option>
                    <option value="crystal palace">Crystal Palace</option>
                </select>

                <select id="t2">
                <option value="liverpool">Liverpool</option>
                    <option value="manchester united">Manchester United</option>
                    <option value="newcastle">Newcastle</option>
                    <option value="bournemouth">Bournemouth</option>
                    <option value="fulham">Fulham</option>
                    <option value="huddersfield">Huddersfield</option>
                    <option value="watford">Watford</option>
                    <option value="wolves">Wolves</option>
                    <option value="southhampton">Southhampton</option>
                    <option value="arsenal">Arsenal</option>
                    <option value="burnley">Burnley</option>
                    <option value="everton">Everton</option>
                    <option value="leicester">Leicester</option>
                    <option value="tottenham">Tottenham</option>
                    <option value="westham">Westham</option>
                    <option value="chelsea">Chelsea</option>
                    <option value="manchester city">Manchester City</option>
                    <option value="brighton">Brighton</option>
                    <option value="crystal palace">Crystal Palace</option>
                </select>
                
                <button onClick={this.getSurfix}>search</button>
            </div>
        )
    }
}

export default Search;