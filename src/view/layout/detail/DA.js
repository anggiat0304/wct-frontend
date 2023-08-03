import React, { Component } from "react";
import { Table } from 'reactstrap';
import '../../style/ClientInformation.css'
class DA extends Component {
    render() {
        const { information } = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.DA;
        console.log(moreDetails)
        return (
            <div className="custom-scrollbar">
                <Table>
                    <tbody>
                        <tr>
                            <td colSpan="4">DA Decision</td>
                            <td colSpan='6'>{moreDetails.DADecision}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">DA Approved Cash Loan Amount Existing</td>
                            <td colSpan='6'>{moreDetails.DAApprovedCashLoanAmountExisting}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">DA Approved Cash Loan Amount Limit</td>
                            <td colSpan='6'>{moreDetails.DAApprovedCashLoanAmountLimit}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">DA Approved Cash Loan Amount</td>
                            <td colSpan='6'>{moreDetails.DAApprovedCashLoanAmount}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DA;