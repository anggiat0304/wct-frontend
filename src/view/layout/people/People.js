import React, { Component } from "react";
import '../../style/People.css'
import { Table } from "reactstrap";

class People extends Component {
    render() {
        const {data} = this.props
        const poeple = data.people
        return (
            <div className="custom-scrollbar-people ">
                <Table>
                    <tbody>
                        <tr>
                            <td>Assignee</td>
                            <td>:</td>
                            <td>{poeple.assigne}</td>
                        </tr>
                        <tr>
                            <td>Reporter</td>
                            <td>:</td>
                            <td>{poeple.reporter}</td>
                        </tr>
                        <tr>
                            <td>Assign to BM</td>
                            <td>:</td>
                            <td>{poeple.assignToBM}</td>
                        </tr>
                        <tr>
                            <td>Assign to RM</td>
                            <td>:</td>
                            <td>{poeple.assignToRM}</td>
                        </tr>
                        <tr>
                            <td>Assign To LSS (Pre Screen)</td>
                            <td>:</td>
                            <td>{poeple.assignToLSSPreScreen}</td>
                        </tr>
                        <tr>
                            <td>Assign To TL DUW</td>
                            <td>:</td>
                            <td>{poeple.assigneToDLDUW}</td>
                        </tr>
                        <tr>
                            <td>Assign To DUW</td>
                            <td>:</td>
                            <td>{poeple.assignToDUW}</td>
                        </tr>
                        <tr>
                            <td>DUW Reviewer Name</td>
                            <td>:</td>
                            <td>{poeple.DUWReviewerName}</td>
                        </tr>
                        <tr>
                            <td>Assign to CL CA</td>
                            <td>:</td>
                            <td>{poeple.assignToTLCA}</td>
                        </tr>
                        <tr>
                            <td>Assign to CA 1</td>
                            <td>:</td>
                            <td>{poeple.assignToCA1}</td>
                        </tr>
                        <tr>
                            <td>Assign to CA 2</td>
                            <td>:</td>
                            <td>{poeple.assignToCA2}</td>
                        </tr>
                        <tr>
                            <td>Assign to BM or DA</td>
                            <td>:</td>
                            <td>{poeple.assignToBMorDA}</td>
                        </tr>
                        <tr>
                            <td>Assign to TL LSS</td>
                            <td>:</td>
                            <td>{poeple.assignToTLLSS}</td>
                        </tr>
                        <tr>
                            <td>Assignee</td>
                            <td>:</td>
                            <td>{poeple.assigne}</td>
                        </tr>
                        <tr>
                            <td>Reporter</td>
                            <td>:</td>
                            <td>{poeple.reporter}</td>
                        </tr>
                        <tr>
                            <td>Assign to BM</td>
                            <td>:</td>
                            <td>{poeple.assignToBM}</td>
                        </tr>
                        <tr>
                            <td>Assign to RM</td>
                            <td>:</td>
                            <td>{poeple.assignToRM}</td>
                        </tr>
                        <tr>
                            <td>Assign To LSS (Pre Screen)</td>
                            <td>:</td>
                            <td>{poeple.assignToLSSPreScreen}</td>
                        </tr>
                        <tr>
                            <td>Assign To TL DUW</td>
                            <td>:</td>
                            <td>{poeple.assigneToDLDUW}</td>
                        </tr>
                        <tr>
                            <td>Assign To DUW</td>
                            <td>:</td>
                            <td>{poeple.assignToDUW}</td>
                        </tr>
                        <tr>
                            <td>DUW Reviewer Name</td>
                            <td>:</td>
                            <td>{poeple.DUWReviewerName}</td>
                        </tr>
                        <tr>
                            <td>Assign to CL CA</td>
                            <td>:</td>
                            <td>{poeple.assignToTLCA}</td>
                        </tr>
                        <tr>
                            <td>Assign to CA 1</td>
                            <td>:</td>
                            <td>{poeple.assignToCA1}</td>
                        </tr>
                        <tr>
                            <td>Assign to CA 2</td>
                            <td>:</td>
                            <td>{poeple.assignToCA2}</td>
                        </tr>
                        <tr>
                            <td>Assign to BM or DA</td>
                            <td>:</td>
                            <td>{poeple.assignToBMorDA}</td>
                        </tr>
                        <tr>
                            <td>Assign to TL LSS</td>
                            <td>:</td>
                            <td>{poeple.assignToTLLSS}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default People;