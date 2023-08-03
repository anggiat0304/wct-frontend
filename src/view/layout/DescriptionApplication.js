import React, { Component,useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Detail from "./detail/Detail";
import Attachment from "./attachment/Attachment";
import Comments from "./comment/Comments";
import People from "./people/People";
import Dates from "./dates/Dates";
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
                                <NavItem>
                                    <NavLink
                                        className={activeTab === 'tab5' ? 'active' : ''}
                                        onClick={() => this.toggleTab('tab5')}
                                    >
                                        Dates
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="tab1">
                                   <Detail details={selectedItem}/>
                                </TabPane>
                                <TabPane tabId="tab2">
                                    <Attachment data={selectedItem}/>
                                </TabPane>
                                <TabPane tabId="tab3">
                                    <Comments data={selectedItem}/>
                                </TabPane>
                                <TabPane tabId="tab4">
                                    <People data={selectedItem}/>
                                </TabPane>
                                <TabPane tabId="tab5">
                                    <Dates data={selectedItem}/>
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