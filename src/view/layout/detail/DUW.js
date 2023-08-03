import React, { Component } from "react";
import { Table } from 'reactstrap';
import '../../style/ClientInformation.css'
class DUW extends Component{
    render() {
        const { information } = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.DUW;
        console.log(moreDetails)
        return (
            <div className="custom-scrollbar">
                <Table>
                    <tbody>
                    
                        <tr>
                            <td colSpan="4">CODE ID</td>
                            <td colSpan='6'>{moreDetails.codeId}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">System Decision</td>
                            <td colSpan='6'>{moreDetails.systemDecision}</td>
                        </tr>
                            <td colSpan="4">DUW Worksheet</td>
                            <td colSpan='6'>{moreDetails.DUWWorksheet.map((item) => (
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
export default DUW