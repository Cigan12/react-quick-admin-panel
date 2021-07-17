import React from 'react';
import STYLE from './Test.module.scss';

export const TestComponent: React.FC = () => {
    return (
        <div className={STYLE.Test} data-id="testComponent">
            hello Im test
        </div>
    );
};
