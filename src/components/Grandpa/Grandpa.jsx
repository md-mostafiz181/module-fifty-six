import React from 'react';
import "./Grandpa.css"
import Father from './Father/Father';
import Uncle from './Uncle/Uncle';
import Aunty from './Aunty/Aunty';

const Grandpa = () => {

    const ring = 'diamond'
    return (
        <div className='grandpa-container'>
            <h2>Grandpa</h2>
            <section className='flex'>
                <Father ring = {ring}></Father>
                <Uncle></Uncle>
                <Aunty ring = {ring}></Aunty>
            </section>
 
        </div>
    );
};

export default Grandpa;