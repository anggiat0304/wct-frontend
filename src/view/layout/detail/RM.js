import React, { Component } from "react";
import { Table } from 'reactstrap';
import '../../style/ClientInformation.css'
class RM extends Component {
    render() {
        const { information } = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.RM;
        console.log(moreDetails)
        return (
            <div className="custom-scrollbar">
                <Table>
                    <tbody>
                        <tr>
                            <td colSpan="4">Rework From DUW To RM</td>
                        
                            <td colSpan='6'>{moreDetails.reworkFromDUWToRM}</td>
                        </tr>
                        <tr>
                        <td colSpan="4">Rework From LSS</td>
                        
                        <td colSpan='6'>{moreDetails.reworkFromLSS}</td>
                        </tr>
                        <tr>
                        <td colSpan="4">Rework Reason Individual And Information From DUW to RM</td>
                        
                        <td colSpan='6'>{moreDetails.reworkReasonIndividualAndInformationFromDUWtoRM}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default RM;