import { jsx as _jsx } from "react/jsx-runtime";
import { mount } from '@cypress/react';
import { TestComponent } from './Test.component';
describe('TestComponent', function () {
    it('renders the TestComponent', function () {
        mount(_jsx(TestComponent, {}, void 0));
        cy.get('[data-id=testComponent]').should('exist');
    });
});
