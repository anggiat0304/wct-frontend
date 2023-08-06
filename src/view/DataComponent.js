import React from 'react';
import { connect } from 'react-redux';
import { fetchApplicantList } from '../actions/applicantActions';
import ListApplicant from './layout/ListApplicant';
class DataComponent extends React.Component {
componentDidMount() {
    this.props.fetchApplicantList();
  }

  render() {
    const { data, loading, error } = this.props;

    
    if (loading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        <h2>Data from API:</h2>
        {/* <ul>
          {data.map((item) => (
            <li key={item.id}>{item.nameApplicant}</li>
          ))}
        </ul> */}
        <ListApplicant application={data} onItemClick={this.onItemClick}/>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(DataComponent);
