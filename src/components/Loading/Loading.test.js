import { render, screen} from '@testing-library/react';
import Loading from './Loading';

// test('render and check the <Loading /> component', () => {
//     render(<Loading/>);
//     const msg = screen.getByText('Loading...');
//     expect(msg).toBeInTheDocument();
// });

test('check and markup in <Loading /> component', () => {
    const {container} = render(<Loading/>);
    const div = container.querySelector('div');
    const h1 = container.querySelector("h1");

    expect(div).toBeTruthy();
    expect(h1).toBeTruthy();
});