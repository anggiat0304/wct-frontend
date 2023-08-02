import React, { Component } from "react";
import '../../style/ClientInformation.css'
import { Table } from 'reactstrap';
class ClientInformation extends Component{
    render(){
        const {information} = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.clientInformation;
        
        return(
            <div className="custom-scrollbar ">
            <Table>
        <tbody>
            <tr>
                <td>Customer/Company Name</td>
                <td>:</td>
                <td>{moreDetails.customer}</td>
            </tr>
            <tr>
                <td>PIC Name</td>
                <td>:</td>
                <td>{moreDetails.PICName}</td>
            </tr>
            <tr>
                <td>PIC Phone Number</td>
                <td>:</td>
                <td>{moreDetails.PICPhoneNumber}</td>
            </tr>
            <tr>
                <td>CIF Customer</td>
                <td>:</td>
                <td>00095095</td>
            </tr>
            <tr>
                <td>Counter Interest Rate</td>
                <td>:</td>
                <td>10.49</td>
            </tr>
            <tr>
                <td>SME Region</td>
                <td>:</td>
                <td>SME Region 2</td>
            </tr>
             <tr>
                <td>Area</td>
                <td>:</td>
                <td>South JKT 1 </td>
            </tr>
            <tr>
                <td>SME RM Branch</td>
                <td>:</td>
                <td>104 - Pondok Indah</td>
            </tr>
            <tr>
                <td>RM BI Code</td>
                <td>:</td>
                <td>00327510</td>
            </tr>
            <tr>
                <td>Sales Program Code</td>
                <td>:</td>
                <td>Non Program</td>
            </tr>
            <tr>
                <td>Dijamin Penuh Agunan Tunai</td>
                <td>:</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Sector Industry</td>
                <td>:</td>
                <td>Wholesale and Retail Trade</td>
            </tr>
            <tr>
                <td>Customer Type</td>
                <td>:</td>
                <td>PT</td>
            </tr>
            <tr>
                <td>Facility 1 Existing Cash Loan Limit</td>
                <td>:</td>
                <td>2.500.000.000</td>
            </tr>
            <tr>
                <td>Facility 1 Existing Non Cash Loan Limit</td>
                <td>:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Facility 1 Currency</td>
                <td>:</td>
                <td>IDR</td>
            </tr>
            <tr>
                <td>Facility 1 Conversion Rate</td>
                <td>:</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Total Facility 1 Existing Cash Loan Amount (Converted to IDR)</td>
                <td>:</td>
                <td>2.500.000.000</td>
            </tr>
            <tr>
                <td>Total Facility 1 Existing Non Cash Loan Amount (Converted to IDR)</td>
                <td>:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Facility 2 Conversion Rate</td>
                <td>:</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Total Facility 2 Existing Cash Loan Amount (Converted to IDR)</td>
                <td>:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Total Facility 2 Existing Non Cash Loan Amount (Converted to IDR)</td>
                <td>:</td>
                <td>0</td>
            </tr>
             <tr>
                <td>Amount (Converted to IDR)</td>
                <td>:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Facility 4 Conversion Rate</td>
                <td>:</td>
                <td>1</td>
            </tr>
            <tr>
                <td>Total Facility 4 Existing Cash Loan Amount (Converted to IDR)</td>
                <td>:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Total Facility 4 Existing Non Cash Loan Amount (Converted to IDR)</td>
                <td>:</td>
                <td>0</td>
            </tr>
            <tr>
                <td>Dijamin Penuh Agunan Tunai</td>
                <td>:</td>
                <td>No</td>
            </tr>
            <tr>
                <td>Sector Industry</td>
                <td>:</td>
                <td>Wholesale and Retail Trade</td>
            </tr>
            <tr>
                <td>Customer Type</td>
                <td>:</td>
                <td>PT</td>
            </tr>
            <tr>
                <td>Facility 1 Existing Cash Loan Limit</td>
                <td>:</td>
                <td>2.500.000.000</td>
            </tr>
        </tbody>
    </Table>
        </div>
        )
    }
}
export default ClientInformation