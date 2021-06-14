import { mount } from '@cypress/react';
import { TestComponent } from './Test.component';

describe('TestComponent', () => {
    it('renders the TestComponent', () => {
        mount(<TestComponent />);
        cy.get('[data-id=testComponent]').should('exist');
    });
});
