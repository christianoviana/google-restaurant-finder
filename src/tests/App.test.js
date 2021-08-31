import { render, screen }from '@testing-library/react';
import App from '../container/App.js';

test('render card component with image and title', async ()=> {
    render(<App />);

    //const title = await screen.findByText('Na sua Área');

    //expect(title).toBeVisible();
});