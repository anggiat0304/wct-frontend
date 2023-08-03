import React, { Component } from "react";
import { Table } from 'reactstrap';
import '../../style/ClientInformation.css'
class CA extends Component {
    render() {
        const { information } = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.CA;
        console.log(moreDetails)
        return (
            <div className="custom-scrollbar">
                <Table>
                    <tbody>
                        <tr>
                            <td colSpan="4">CA1 Recomendation</td>
                            <td colSpan='6'>{moreDetails.CA1Recomendation}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">CA1 Recomendation Cash Loan Amount Existing</td>
                            <td colSpan='6'>{moreDetails.CA1RecomendationCashLoanAmountExisting}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">CA1 Recomendation Cash Loan Amount Limit</td>
                            <td colSpan='6'>{moreDetails.CA1RecomendationCashLoanAmountLimit}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">CA1 Recomendation Cash Loan Amount</td>
                            <td colSpan='6'>{moreDetails.CA1RecomendationCashLoanAmount}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default CA;