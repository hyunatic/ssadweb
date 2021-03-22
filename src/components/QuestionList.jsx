import React from 'react'
import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn } from 'mdbreact';
import SolutionModal from './SolutionModal'


export default function QuestionList({ questions, removeQuestion }) {
  let onDelete = (questid) => {
    removeQuestion(questid)
  }
  return (
    <div>
      <MDBTable striped>
        <MDBTableHead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Solution</th>
            <th>Remove</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {questions && questions.map((x, index) => {
            return (
              <tr key={x.questid}>
                <td>{index + 1}</td>
                <td>{x.question}</td>
                <td><SolutionModal question={x} ind={index + 1} /></td>
                <td><MDBBtn size="sm" color="red" onClick={() => onDelete(x.questid)}>Remove</MDBBtn></td>              
              </tr>
            )
          })}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}
