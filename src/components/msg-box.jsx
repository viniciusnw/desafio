import React from 'react';

const MsgBox = ({
    sendMsg,
    handleChange
}) => {
    return (
        <section className='search-bar'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>

                        <div className='search-bar-form'>
                            <div className='form-item'>

                                <form action='' className='search-bar-form' onSubmit={sendMsg}>
                                    <div className='form-item form-item--submit'>
                                        <div className='vertical-align'>

                                            <div className='vertical-align-item'>
                                                <input placeholder="Digite sua mensagem" className="input-text" onChange={handleChange} type="text" />
                                            </div>

                                            <div className='vertical-align-item'>
                                                <button className='btn btn--primary'>Enviar</button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MsgBox;
