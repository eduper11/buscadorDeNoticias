import React, { Component } from 'react';

class Form extends Component {
    state = {
        category: 'general'
    };

    changeCategory = event => {
        this.setState(
            {
                category: event.target.value
            },
            () => {
                //pasar la category a la pagina principal

                this.props.consultNotices(this.state.category);
            }
        );
    };
    render() {
        return (
            <div className='buscador row'>
                <div className='col s12 m8 offset-m2'>
                    <form>
                        <h2>Encuentra tus noticias por categoría</h2>
                        <div className='input-field col s12 m8 offset-m2'>
                            <select onChange={this.changeCategory}>
                                <option value='general'>General</option>
                                <option value='business'>Negocios</option>
                                <option value='entertainment'>
                                    Entretenimiento
                                </option>
                                <option value='health'>Salud</option>
                                <option value='science'>Ciencia</option>
                                <option value='sports'>Deporte</option>
                                <option value='technology'>Tecnología</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Form;
