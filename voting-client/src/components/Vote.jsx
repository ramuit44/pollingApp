import React, {Component} from 'react';

class Vote extends Component
{

  constructor(props) {
     super(props);
  }


  getPair() {
    if(this.props) return this.props.pair;
    else return [];
   
  }

  isDisabled() {
    return !!this.props.hasVoted;
  }

  hasVotedFor(entry) {
    return this.props.hasVoted === entry;
  }

  render() {
      return(
        <div className="voting">
        {this.getPair(this.props).map(entry =>
          <button key={entry}
                   disabled={this.isDisabled()}
                   onClick={() => this.props.vote(entry)}>
            
            <h1>{entry}</h1>

            { this.hasVotedFor(entry) ?   <div className="label">Voted</div> : null}

          </button>
        )}
      </div>
    );
  }

}

export default Vote;  
