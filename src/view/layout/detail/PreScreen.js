import React, { Component } from "react";
import { Table } from 'reactstrap';
import '../../style/ClientInformation.css'
class PreScreen extends Component{
    
    render(){
        const { information } = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.preScreen;
        return(
            <div className="custom-scrollbar">
                <Table>
                    <tbody>
                        <tr>
                            <td colSpan="4">Data Debitur Perorangan</td>
                        
                            <td colSpan='6'>{moreDetails.apprasialRequestChecklist.map((item) => (
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
export default PreScreen