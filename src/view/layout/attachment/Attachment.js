import React, { Component } from "react";
import { downloadFile, downloadBulkFile } from "../../../actions/fileActions";
import { connect } from "react-redux";
import '../../style/Attachment.css'
import { Accordion, Card, Button } from 'react-bootstrap';
import { attachmentColumn } from "../../column";
class Attachment extends Component {

    download = (fileName) => {
        this.props.downloadFile(fileName)
    }
    downloadBulkFile = (filename) => {
        const filenames = ['resume_satu.pdf', 'resume_dua.pdf'];
        this.props.downloadBulkFile(filenames);
    }



    render() {
        const { data, res, loading, error } = this.props
        const attachments = data.attachments;
        const pagar = "#";
        const getColumnByKey = (key) => {
            const attachment = attachmentColumn.find(item => item.key === key);
            return attachment ? attachment.column : null;
        }
        return (
            <div className="custom-scrollbar-attachment">
                <div className="accordion accordion-flush" id="accordionFlushExample">
                    {Object.keys(attachments).map((category) => (
                        <div className="accordion-item">
                            { }
                            <h2 className="accordion-header d-flex justify-content-between align-items-center p-3" id={category}>
                                <button class="accordion-button collapsed flex-grow-1" type="button" data-bs-toggle="collapse" data-bs-target={pagar.concat(category)} aria-expanded="false" aria-controls={category}>
                                    {getColumnByKey(category)}
                                </button>
                                <button type="button" class="btn btn-success" onClick={() => this.downloadBulkFile(attachments[category])}>Download as Zip</button>
                            </h2>
                            <div id={category} class="accordion-collapse collapse" aria-labelledby={category} data-bs-parent="#accordionFlushExample">
                                {attachments[category].map((attachment, index) => (
                                    <div class="accordion-body">
                                        <div class="d-flex flex-row">
                                            <div class="p-2 flex-grow-1"> <p>{attachment.nama}</p> </div>
                                            <div class="p-2 flex-grow-1"><button type="button" class="btn btn-primary" onClick={() => this.download(attachment.nama)}>Download</button></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Attachment);