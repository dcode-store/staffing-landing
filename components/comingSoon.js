import React from 'react';
import Container from './container';


export default function ComingSoon() {
    return (
        <Container className="flex flex-wrap justify-center items-center">
            <div className="text-left">
                <h1 className="text-xl font-bold text-indigo-400 mb-4">Coming Soon</h1>
                <p className="text-stone-800">Our Daily Staffing is under development.</p>
                <h1 className="text-5xl font-bold text-indigo-400 my-4">Stay Tuned!</h1>
            </div>
        </Container>
    );
};