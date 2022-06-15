import { render } from '@testing-library/react';

import LibsSampleNextjsLib from './LibsSampleNextjsLib';

describe('LibsSampleNextjsLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibsSampleNextjsLib />);
    expect(baseElement).toBeTruthy();
  });
});
