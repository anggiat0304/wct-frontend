import React, { Component } from "react";
import axios from "axios";
import { downloadFile ,downloadBulkFile } from "../../../actions/fileActions";
import { connect } from "react-redux";
class Attachment extends Component {

    download = (fileName) => {
        this.props.downloadFile(fileName)
    }
    downloadBulkFile = (filename) =>{
        const data = ['resume_satu.pdf','resume_dua.pdf'];
        this.props.downloadBulkFile(data);
    }
    
    render() {
        const { data, res, loading, error } = this.props
        const attachments = data.attachments;
        
        Object.entries(attachments).forEach(([key, value]) => {
            console.log(`Data ${key}:`);
            value.forEach((item) => {
              console.log(item.nama);
            });
          });
        return (
            <div className="custom-scrollbar-attachment">
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <div class="d-flex flex-row">
                                        <div class="p-2 flex-grow-1"> <p>Identitas Debitur dan Peminjam</p> </div>
                                        <div class="p-2 flex-grow-1"><button type="button" class="btn btn-success" onClick={() => this.downloadBulkFile('hai')}>Download as Zip</button></div>
                             </div>
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
const mapStateToProps = (state) => {
    return {
      res: state.application.data,
      loading: state.loading,
      error: state.error,
    };
  };
const mapDispatchToProps = {
    downloadFile,
    downloadBulkFile
  };

export default connect(mapStateToProps, mapDispatchToProps) (Attachment);