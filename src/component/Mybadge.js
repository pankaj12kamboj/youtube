import React from 'react'

import Button from 'react-bootstrap/Button';

import Badge from 'react-bootstrap/Badge';



export const Mybadge = () => {
    return (
        <div className='text-center width:50%'>
            <h3> <Badge bg="primary">
                Primary
            </Badge>{' '}
                <Badge bg="secondary">
                    Secondary
                </Badge>{' '}
                <Badge bg="success">
                    Success
                </Badge>{' '}
                <Badge bg="danger">
                    Danger
                </Badge>{' '}
                <Badge bg="warning" text="dark">
                    Warning
                </Badge>{' '}
                <Badge bg="info">
                    Info
                </Badge>{' '}
                <Badge bg="secondary">
                    Secondary
                </Badge>{' '}
                <Badge bg="success">
                    Success
                </Badge>{' '}
                <Badge bg="danger">
                    Danger
                </Badge>{' '}

                <Badge bg="warning" text="dark">
                    Warning
                </Badge>{' '}
                <Badge bg="info">
                    Info
                </Badge>{' '}
            </h3>
        </div >

    )
}
