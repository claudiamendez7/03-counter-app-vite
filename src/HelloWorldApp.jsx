// import {fragment} from 'react'; antigua importacion

// const getResult = () => {
//     return 5*8;
// }

// const newMessage = {
//     message: 'Batman',
//     title: 'Claudia'
// };

import PropTypes from 'prop-types';

export const HelloWorldApp = ({title, subTitle, name}) => {    
    // console.log(props);
    // if ({title}) {
    //     throw new Error('El tile no existe');
    // }
    return (
        <>
            <h1>{title}</h1>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{subTitle}</p>
            <p>{name}</p>
        </>
    )
}

HelloWorldApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

HelloWorldApp.defaultProps = {
    title :'No hay titulo',
    subTitle : 'No hay subtitulo',
    name: 'Claudia Mendez'
}
