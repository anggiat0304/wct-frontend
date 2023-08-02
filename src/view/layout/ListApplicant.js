import React, { Component } from "react";
import { connect } from "react-redux";
class ListApplicant extends Component {

    render() {
        const { application, onItemClick } = this.props;
        return (
            <div className="custom-scrollbare">
                <h2>Application</h2>
                <ul className="list-group mt-3">
                    {application.map((item) => (
                        <div
                            className="list-item"
                            key={item.id}
                            onClick={() => onItemClick(item)}>
                            <li className="list-group-item dropdown-item" key={item.id}>{item.nameApplicant}</li>
                        </div>
                    ))}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        application: state.application.data,
    };
};

export default connect(mapStateToProps)(ListApplicant)