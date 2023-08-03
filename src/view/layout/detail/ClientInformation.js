import React, { Component } from "react";
import '../../style/ClientInformation.css'
import { Table } from 'reactstrap';
class ClientInformation extends Component{
    render(){
        const {information} = this.props
        const clientInformation = information.details;
        const moreDetails = clientInformation.clientInformation;
        
        return(
            <div className="custom-scrollbar">
            <Table>
        <tbody>
            <tr>
                <td>Customer/Company Name</td>
                <td>{moreDetails.customer}</td>
            </tr>
            <tr>
                <td>Customer Type</td>
                <td>{moreDetails.customerType}</td>
            </tr>
            <tr>
                <td>PIC Name</td>
                <td>{moreDetails.PICName}</td>
            </tr>
            <tr>
                <td>PIC Phone Number</td>
                <td>{moreDetails.PICPhoneNumber}</td>
            </tr>
            <tr>
                <td>CIF Customer</td>
                <td>{moreDetails.CIFCustomer}</td>
            </tr>
            <tr>
                <td>Counter Interest Rate</td>
                <td>{moreDetails.counterInterestRate}%</td>
            </tr>
            <tr>
                <td>SME Region</td>
                <td>{moreDetails.SMERegion}</td>
            </tr>
             <tr>
                <td>Area</td>
                <td>{moreDetails.area}</td>
            </tr>
            <tr>
                <td>SME RM Branch</td>
                <td>{moreDetails.SMERMBranch}</td>
            </tr>
            <tr>
                <td>RM BI Code</td>
                <td>{moreDetails.RMBICode}</td>
            </tr>
            <tr>
                <td>Sales Program Code</td>
                <td>{moreDetails.salesProgramCode}</td>
            </tr>
            <tr>
                <td>Dijamin Penuh Agunan Tunai</td>
                <td>{moreDetails.dijaminPenuhAgunanTunai}</td>
            </tr>
            <tr>
                <td>Sector Industry</td>
                <td>{moreDetails.sectorIndustry}</td>
            </tr>
            <tr>
                <td>Customer Type</td>
                <td>{moreDetails.customerType}</td>
            </tr>
            <tr>
                <td>Facility 1 type</td>
                <td>{moreDetails.facility1Type}</td>
            </tr>
            <tr>
                <td>Facility 1 Existing Cash Loan Limit</td>
                <td>{moreDetails.facility1ExistingCashLoanLimit}</td>
            </tr>
            <tr>
                <td>Facility 1 Existing Non Cash Loan Limit</td>
                <td>{moreDetails.facilty1ExistingNonCashLoanLimit}</td>
            </tr>
            <tr>
                <td>Facility 1 Currency</td>
                <td>{moreDetails.facility1Currency}</td>
            </tr>
            <tr>
                <td>Facility 1 Conversion Rate</td>
                <td>{moreDetails.facility1ConversionRate}</td>
            </tr>
            <tr>
                <td>Total Facility 1 Existing Cash Loan Amount (Converted to IDR)</td>
                <td>{moreDetails.totalFacility1ExistingCashLoanAmount}</td>
            </tr>
            <tr>
                <td>Total Facility 1 Existing Non Cash Loan Amount (Converted to IDR)</td>
                <td>{moreDetails.totalFacility1ExistingNonCashLoanAmount}</td>
            </tr>
            <tr>
                <td>Total Facility 1 Increase/Decrease Cash Loan Limit</td>
                <td>{moreDetails.facility1IncreaseOrDecreaseCashLoanLimit}</td>
            </tr>
            <tr>
                <td>Total Facility 1 Increase/Decrease Non Cash Loan Limit</td>
                <td>{moreDetails.facility1IncreaseOrDecreaseNonCashLoanLimit}</td>
            </tr>
            <tr>
                <td>Facility 2 Conversion Rate</td>
                <td>{moreDetails.facility2ConversionRate}</td>
            </tr>
            <tr>
                <td>Total Facility 2 Existing Cash Loan Amount (Converted to IDR)</td>
                <td>{moreDetails.totalFacility2ExistingCashLoanAmount}</td>
            </tr>
            <tr>
                <td>Total Facility 2 Existing Non Cash Loan Amount (Converted to IDR)</td>
                <td>{moreDetails.totalFacility2ExistingNonCashLoanAmount}</td>
            </tr>
            <tr>
                <td>Facility 4 Conversion Rate</td>
                <td>{moreDetails.facility4ConversionRate}</td>
            </tr>
            <tr>
                <td>Total Facility 4 Existing Cash Loan Amount (Converted to IDR)</td>
                <td>{moreDetails.totalFacility4ExistingCashLoanAmount}</td>
            </tr>
            <tr>
                <td>Total Facility 4 Existing Non Cash Loan Amount (Converted to IDR)</td>
                <td>{moreDetails.totalFacility4ExistingNonCashLoanAmount}</td>
            </tr>
        </tbody>
    </Table>
        </div>
        )
    }
}
export default ClientInformation