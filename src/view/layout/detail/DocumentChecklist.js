import React, { Component } from "react";
import { Table } from 'reactstrap';
import '../../style/ClientInformation.css'
class DocumentChecklist extends Component {
    render() {
        const { information } = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.documentList;
        console.log(moreDetails)
        return (
            <div className="custom-scrollbar">
                <Table>
                    <tbody>
                        <tr>
                            <td colSpan="4">Data Debitur Perorangan</td>
                        
                            <td colSpan='6'>{moreDetails.dataDebiturPerorangan.map((item) => (
                                <div>
                                    {item.check ?
                                        <div>
                                            <input type="checkbox" value={item.nama} checked disabled />
                                            <label for="vehicle1"> {item.nama} </label>
                                        </div>
                                        :
                                        <div>
                                            <input type="checkbox" value={item.nama} disabled />
                                            <label for="vehicle1"> {item.nama} </label>
                                        </div>
                                    }
                                </div>
                            ))}</td>
                        </tr>
                        <tr>
                            <td colSpan="4">Data Debitur Perusahaan</td>
                           
                            <td colSpan='6'>{moreDetails.dataDebiturPerushaan.map((item) => (
                                <div>
                                    {item.check ?
                                        <div>
                                            <input type="checkbox" value={item.nama} checked disabled />
                                            <label for="vehicle1"> {item.nama} </label>
                                        </div>
                                        :
                                        <div>
                                            <input type="checkbox" value={item.nama} disabled />
                                            <label for="vehicle1"> {item.nama} </label>
                                        </div>
                                    }
                                </div>
                            ))}</td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        )
    }
}

export default DocumentChecklist;