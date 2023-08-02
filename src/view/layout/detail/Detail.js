import React, { Component } from "react";
import '../../style/Detail.css';
import { Table } from 'reactstrap';
import ClientInformation from "./ClientInformation";
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'tab1'
        }
    }
    toggleTab = (tab) => {
        if (this.activeTab !== tab) {
            this.setState({ activeTab: tab })
        }
    };
    render() {
        const { activeTab } = this.state;
        const {details} = this.props;
        return (
            <div className="detail">
                <div className="info">
                    <Table bordered={false}>
                        <tbody>
                            <tr>
                                <td>Type</td>
                                <td>:</td>
                                <td>{details.type}</td>
                            </tr>
                            <tr>
                                <td>Status</td>
                                <td>:</td>
                                <td>{details.status}</td>
                            </tr>
                            <tr>
                                <td>Resolution</td>
                                <td>:</td>
                                <td>{details.resolution}</td>
                            </tr>
                            <tr>
                                <td>Security Level</td>
                                <td>:</td>
                                <td>{details.securityLevel}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="tabs-detail">
                    <Nav tabs>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab1' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab1')}
                            >
                                Client Information
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab2' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab2')}
                            >
                                Document Checklist
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab3' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab3')}
                            >
                                Pre Screen
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab4' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab4')}
                            >
                                Appraisal
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab5' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab5')}
                            >
                                RM
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab6' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab6')}
                            >
                                DUW
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab7' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab7')}
                            >
                                CA
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab8' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab8')}
                            >
                                DA
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className={activeTab === 'tab9' ? 'active' : ''}
                                onClick={() => this.toggleTab('tab9')}
                            >
                                SUL Completion
                            </NavLink>
                        </NavItem>
                    </Nav>

                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="tab1">
                        <ClientInformation information={details} />
                        </TabPane>
                        <TabPane tabId="tab2">
                            <h4>Content for Tab 2</h4>
                            <p>This is the content of tab 2.</p>
                        </TabPane>
                        <TabPane tabId="tab3">
                            <h4>Content for Tab 3</h4>
                            <p>This is the content of tab 3.</p>
                        </TabPane>
                        <TabPane tabId="tab4">
                            <h4>Content for Tab 4</h4>
                            <p>This is the content of tab 4.</p>
                        </TabPane>
                        <TabPane tabId="tab5">
                            <h4>Content for Tab 5</h4>
                            <p>This is the content of tab 5.</p>
                        </TabPane>
                        <TabPane tabId="tab6">
                            <h4>Content for Tab 6</h4>
                            <p>This is the content of tab 6.</p>
                        </TabPane>
                        <TabPane tabId="tab7">
                            <h4>Content for Tab 7</h4>
                            <p>This is the content of tab 7.</p>
                        </TabPane>
                        <TabPane tabId="tab8">
                            <h4>Content for Tab 8</h4>
                            <p>This is the content of tab 8.</p>
                        </TabPane>
                        <TabPane tabId="tab9">
                            <h4>Content for Tab 9</h4>
                            <p>This is the content of tab 9.</p>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        )
    }
}
export default Detail;