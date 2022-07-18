import { render, cleanup, fireEvent } from '@testing-library/react';
import RomanConverter from './RomanConverter';
describe('<RomanCoverter/>', () => {
    afterEach(cleanup);
    it('should render input', () => {
        const { getByLabelText } = render(<RomanConverter/>);
        expect(() => {
            getByLabelText('Arabic');
        }).not.toThrow();
    });
    it('should render none value', () => {
        const { getByText } = render(<RomanConverter/>);
        expect(() => {
            getByText(/Roman:\s+none/);
        }).not.toThrow();
    });
    it('should display none for empty value', () => {
        const { getByText, container } = render(<RomanConverter/>);
        const node = container.querySelector('#input');
        if (node) {
            fireEvent.change(node, { currentTarget: { value: "" } });
        }
        expect(() => {
            getByText(/Roman:\s+none/i);
        }).not.toThrow();
    });
});
