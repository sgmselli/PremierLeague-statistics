import React from 'react';
import Teams from '../Teams/Teams';

class TeamsList extends React.Component {

    render() {
        return (
            <div>
                {(this.props.info).map((data, uuid) => {
                    return <Teams info={data} key={uuid} />
                })}
            </div>
        )
    }
}

export default TeamsList;