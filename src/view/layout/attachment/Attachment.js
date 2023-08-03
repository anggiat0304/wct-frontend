import React, { Component } from "react";
import axios from "axios";
class Attachment extends Component {

    download = (filename) => {
        axios({
            url: `http://localhost:3009/api/applicant/file/${filename}`,
            method: 'GET',
            responseType: 'blob', // Menetapkan tipe respons sebagai blob
        })
            .then((response) => {
                // Membuat URL objek untuk mengunduh file
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const a = document.createElement('a');
                a.href = url;
                a.download = filename;
                a.click();
                URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error('Error while downloading file:', error);
            });
    }
    render() {
        const { data, res, loading, error } = this.props
        const attachments = data.attachments
        console.log(attachments)
        return (
            <div className="custom-scrollbar-attachment">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                Indentitas Debitur dan Penjamin
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {
                                    attachments.identitasDebitur.map((item) => (
                                        <div class="d-flex flex-row">
                                        <div class="p-2 flex-grow-1"> <p>{item.nama}</p> </div>
                                        <div class="p-2 flex-grow-1"><button type="button" class="btn btn-primary" onClick={() => this.download(item.nama)}>Download</button></div>
                                      </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Identitas Usaha
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {
                                    attachments.identitasUsaha.map((item) => (
                                        <div class="d-flex flex-row">
                                        <div class="p-2 flex-grow-1"> <p>{item.nama}</p> </div>
                                        <div class="p-2 flex-grow-1"><button type="button" class="btn btn-primary" onClick={() => this.download(item.nama)}>Download</button></div>
                                      </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Loan Report
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                {
                                    attachments.loanReport.map((item) => (
                
                                        <div class="d-flex flex-row">
                                        <div class="p-2 flex-grow-1"> <p>{item.nama}</p> </div>
                                        <div class="p-2 flex-grow-1"><button type="button" class="btn btn-primary" onClick={() => this.download(item.nama)}>Download</button></div>
                                      </div>
                                      
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Attachment;