import React, { Component } from "react";
import { Table } from 'reactstrap';
import '../../style/ClientInformation.css'
class SULCompletion extends Component{
    render() {
        const { information } = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.SULCompletion;
        console.log(moreDetails)
        return (
            <div className="custom-scrollbar">
                <Table>
                    <tbody>
                    
                        <tr>
                            <td colSpan="4">SignIn Cash Loan Amount</td>
                            <td colSpan='6'>{moreDetails.signInCashLoanAmount}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">SignIn Non Cash Loan Amount</td>
                            <td colSpan='6'>{moreDetails.signInNonCashLoanAmount}</td>
                        </tr>
                            <td colSpan="4">Document Post</td>
                            <td colSpan='6'>{moreDetails.documentPost.map((item) => (
                                <div>
                                    {item.check ?
                                        <div>
                                            <input type="checkbox" value={item.name} checked disabled />
                                            <label for="vehicle1"> {item.name} </label>
                                        </div>
                                        :
                                        <div>
                                            <input type="checkbox" value={item.name} disabled />
                                            <label for="vehicle1"> {item.name} </label>
                                        </div>
                                    }
                                </div>
                            ))}</td>
                        

                    </tbody>
                </Table>
            </div>
        )
    }
}
export default SULCompletion