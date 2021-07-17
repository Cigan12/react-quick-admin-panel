import React, { useState } from 'react';
import { TestComponent } from './Test.component';

export default {
    title: 'TestComponent',
};

export const Primary: React.FC = () => {
    const [counter, setcounter] = useState(0);
    return (
        <div>
            <h3>{counter}</h3>
            <TestComponent />
        </div>
    );
};
