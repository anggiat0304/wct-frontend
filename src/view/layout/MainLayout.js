import React, { Component } from "react";
import { connect } from 'react-redux';
import '../style/MainLayout.css'
import DescriptionApplication from "./DescriptionApplication";
import ListApplicant from "./ListApplicant";
import { fetchApplicantList } from "../../actions/applicantActions";
class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        }
    }
    componentDidMount() {
        this.props.fetchApplicantList();
    }
    handleItemClick = (item) => {
        this.setState({ selectedItem: item });
    };
    render() {
        const { data, loading, error } = this.props
        const { selectedItem  } = this.state


        return (
            <div className="layout">
                {/* Navbar */}
                <nav className="navbar header navbar-expand-lg navbar-light">
                    {/* Bagian kiri */}
                    <div className="navbar-nav mr-auto col-lg-6">
                        <a className="nav-item nav-link active col-lg-1" href="#"><b>WCT</b></a>
                    </div>
                    <div className='col-lg-3'></div>
                    {/* Bagian kanan */}
                    <div className="navbar-nav ml-auto col-lg-3">
                        <div className='nav-item nav-link'>
                            <form className="d-flex">
                            </form>
                        </div>
                        <a className="nav-item nav-link" href="#">Help</a>
                        <a className="nav-item nav-link" href="#">Profile</a>
                    </div>
                </nav>
                <div>
                    <div className="row">
                        <div className="col-lg-12 ">
                            <div className="d-flex">
                                <div className="p-2 col-lg-4 sc-content ">
                    
                                        <ListApplicant application={data} onItemClick={this.handleItemClick} className="left-text" />
                               
                                </div>
                                <div className="p-2 col-lg-8 sc-content">
                                    <DescriptionApplication selectedItem={selectedItem} />
                                </div>
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
        data: state.application.data,
        loading: state.loading,
        error: state.error,
    };
};

const mapDispatchToProps = {
    fetchApplicantList
};

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);