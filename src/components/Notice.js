import React from 'react';

const Notice = ({ notice }) => {
    //extraer los datos de la noticia

    const {
        author,
        content,
        description,
        publishedAt,
        title,
        url,
        urlToImage,
        source
    } = notice;

    //carga la imagen si está disponible

    const image = urlToImage ? (
        <div className='card-image'>
            <img src={urlToImage} alt={title} />
            <span className='card-title'>{source.name}</span>
        </div>
    ) : (
        <div className='card-title dark center'>{source.name}</div>
    );

    return (
        <div className='col s12 m6 l4'>
            <div className='card'>
                {image}
                <div className='card-content'>
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className='card-action'>
                    <a
                        href={url}
                        target='blank'
                        className='waves-effect waves-light btn'
                    >
                        Ver noticia completa
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Notice;
