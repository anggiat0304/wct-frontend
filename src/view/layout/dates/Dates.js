import React, { Component } from "react";
import '../../style/People.css'
import { Table } from "reactstrap";
class Dates extends Component{
    render(){
        const {data} = this.props
        const dates = data.dates;
        return(
            <div className="custom-scrollbar-people ">
                <Table>
                    <tbody>
                        <tr>
                            <td>Created</td>
                            <td>:</td>
                            <td>{dates.created}</td>
                        </tr>
                        <tr>
                            <td>Update</td>
                            <td>:</td>
                            <td>{dates.updated}</td>
                        </tr>
                        <tr>
                            <td>Signin Date</td>
                            <td>:</td>
                            <td>{dates.singInDate}</td>
                        </tr>
                        <tr>
                            <td>Disbursement Date</td>
                            <td>:</td>
                            <td>{dates.disbursementDate}</td>
                        </tr>
                        <tr>
                            <td>Due Date Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.dueDateCovernoteDate}</td>
                        </tr>
                        <tr>
                            <td>LSS Receive Date For Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.LSSReceiveDateForCovernoteNotaris}</td>
                        </tr>
                        <tr>
                            <td>CDU Receive Date for Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.CDUReceiveDateForCovernoteNotaris}</td>
                        </tr>
                        <tr>
                            <td>Created</td>
                            <td>:</td>
                            <td>{dates.created}</td>
                        </tr>
                        <tr>
                            <td>Update</td>
                            <td>:</td>
                            <td>{dates.updated}</td>
                        </tr>
                        <tr>
                            <td>Signin Date</td>
                            <td>:</td>
                            <td>{dates.singInDate}</td>
                        </tr>
                        <tr>
                            <td>Disbursement Date</td>
                            <td>:</td>
                            <td>{dates.disbursementDate}</td>
                        </tr>
                        <tr>
                            <td>Due Date Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.dueDateCovernoteDate}</td>
                        </tr>
                        <tr>
                            <td>LSS Receive Date For Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.LSSReceiveDateForCovernoteNotaris}</td>
                        </tr>
                        <tr>
                            <td>CDU Receive Date for Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.CDUReceiveDateForCovernoteNotaris}</td>
                        </tr>
                        <tr>
                            <td>Created</td>
                            <td>:</td>
                            <td>{dates.created}</td>
                        </tr>
                        <tr>
                            <td>Update</td>
                            <td>:</td>
                            <td>{dates.updated}</td>
                        </tr>
                        <tr>
                            <td>Signin Date</td>
                            <td>:</td>
                            <td>{dates.singInDate}</td>
                        </tr>
                        <tr>
                            <td>Disbursement Date</td>
                            <td>:</td>
                            <td>{dates.disbursementDate}</td>
                        </tr>
                        <tr>
                            <td>Due Date Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.dueDateCovernoteDate}</td>
                        </tr>
                        <tr>
                            <td>LSS Receive Date For Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.LSSReceiveDateForCovernoteNotaris}</td>
                        </tr>
                        <tr>
                            <td>CDU Receive Date for Covernote Notaris</td>
                            <td>:</td>
                            <td>{dates.CDUReceiveDateForCovernoteNotaris}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}
export default Dates;