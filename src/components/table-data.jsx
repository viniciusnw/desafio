import React from 'react';

const TableData = ({
    renderItem
}) => {
    return (
        <div className='table-data'>
            <div className='container-fluid'>
                <div className='row table-data-row table-data-head'>
                    <div className='col-md-12 column-center'>
                        <p className='table-data-head-title'>
                            Mensagens
                        </p>
                    </div>
                </div>
                {renderItem}
            </div>
        </div>
    );
};

export default TableData;
