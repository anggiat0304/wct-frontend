import React, { Component,useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Detail from "./detail/Detail";
class DescriptionApplication extends Component {
    constructor(props){
        super(props);
        this.state={
            activeTab: 'tab1'
        }
    }
    toggleTab = (tab) => {
        if (this.activeTab !== tab) {
          this.setState({activeTab:tab})
        }
      };
    render() {
        const { selectedItem } = this.props;
        
        const {activeTab} = this.state
 
        return (
            <div className="data-detail">

                {!selectedItem && <div>Select an item</div>}
                {selectedItem &&
                    <div>
                        <h2> {selectedItem.code} {selectedItem.nameApplicant}</h2>
                        <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={activeTab === 'tab1' ? 'active' : ''}
                                        onClick={() => this.toggleTab('tab1')}
                                    >
                                        Details
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={activeTab === 'tab2' ? 'active' : ''}
                                        onClick={() => this.toggleTab('tab2')}
                                    >
                                        Attachment
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={activeTab === 'tab3' ? 'active' : ''}
                                        onClick={() => this.toggleTab('tab3')}
                                    >
                                        Comments
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={activeTab === 'tab4' ? 'active' : ''}
                                        onClick={() => this.toggleTab('tab4')}
                                    >
                                        People
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="tab1">
                                   <Detail details={selectedItem}/>
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
                            </TabContent>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default DescriptionApplication;