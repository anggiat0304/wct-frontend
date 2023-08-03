import React, { Component } from "react";
import { connect } from "react-redux";
import '../style/ListApplicant.css';
class ListApplicant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
        }
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    };
    render() {
        const { application, onItemClick } = this.props;
        const {searchQuery} = this.state;
        const filteredItems = application.filter((item) =>
        item.nameApplicant.toLowerCase().includes(searchQuery.toLowerCase())
        );
        
        return (
            <div className="custom-scrollbar-applicant">
                <h2>Application</h2>
                <ul className="list-group mt-3">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={this.handleSearchChange}
                        placeholder="Search..."
                      />
                    {filteredItems.map((item) => (
                        <div
                            className="list-item"
                            key={item.id}
                            onClick={() => onItemClick(item)}>
                            <li className="list-group-item dropdown-item" key={item.id}>{item.code} {item.nameApplicant}</li>
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