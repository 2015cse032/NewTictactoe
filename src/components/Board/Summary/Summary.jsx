import React from 'react'
import { connect } from 'react-redux'

import { checkResult } from '../../../actions/resultsAction.js';
import {Input,Button} from "antd";
function Summary(props) {

  const { board, players, result, checkResult } = props;

  if (!(result.tie || result.win)) {
    checkResult(board)
  }

  if (result.tie) {
    return <div className="alert alert-info mt-2">It's a Draw :(</div>
  } else if (result.win === 'X') {
    const player = players.p1 === 'X' ? 'Player 1' : 'Player 2'
    return <div className="alert alert-success mt-2">{player} Wins!</div>
  } else if (result.win === 'O') {
    const player = players.p1 === 'O' ? 'Player 1' : 'Player 2'
    return <div className="alert alert-success mt-2">{player} Wins!</div>
  }

  return (
    <div className="mt-2">
      <div>
        <div style={{flexDirection:"row",display:"flex"}}>
        <p style={{paddingLeft:"-150px"}}>Player 1:  <Input defaultValue={ players.p1}></Input></p>
        <Button style={{width:100,height:35,marginTop:20,backgroundColor:"green",color:"white",marginLeft:30}}>Start </Button>
        <Button style={{width:100,height:35,marginTop:20,marginLeft:30}}>Reset </Button>
        <p style={{paddingLeft:30}}>Player 2:  <Input placeholder={players.p2}></Input></p>
        </div>
      </div>
      <div style={{flexDirection:"row",display:"flex"}}>
        <p>
          <strong>Current Turn</strong>:
          {players.turn === 'p1' ? <span className="badge badge-pill badge-danger">Player 1</span> : <span className="badge badge-pill badge-success">Player 2</span>}
        </p>
      </div>
    </div>
  )
}

export default connect(
  ({ board, players, result }) => ({ board, players, result }),
  dispatch => ({ checkResult: (board) => dispatch(checkResult(board)) })
)(Summary)