import React from 'react';

// components
import NavBar from './../components/navbar.jsx';
import MsgBox from './../components/msg-box.jsx';
import TableData from './../components/table-data.jsx';

const AppContent = ({
    sendMsg,
    handleChange,
    renderItem
}) => {
    return (
        <div>
            <NavBar />
            <MsgBox
                sendMsg={sendMsg}
                handleChange={handleChange}
            />

            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-12'>
                        <TableData renderItem={renderItem} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppContent;
