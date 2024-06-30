import * as React from 'react';
import { expect } from 'chai';
import { ErrorBoundary, createRenderer } from '@mui/internal-test-utils';
import { useHighlighted } from './useHighlighted';
import { HighlightedProvider } from './HighlightedProvider';
import { SeriesContextProvider } from '../SeriesContextProvider';

function UseHighlighted() {
  const { highlightedItem } = useHighlighted();
  return <div>{highlightedItem?.seriesId}</div>;
}

describe('useHighlighted', () => {
  const { render } = createRenderer();

  it('should throw an error when parent context not present', function test() {
    if (!/jsdom/.test(window.navigator.userAgent)) {
      // can't catch render errors in the browser for unknown reason
      // tried try-catch + error boundary + window onError preventDefault
      this.skip();
    }

    const errorRef = React.createRef<any>();

    expect(() =>
      render(
        <ErrorBoundary ref={errorRef}>
          <UseHighlighted />
        </ErrorBoundary>,
      ),
    ).toErrorDev([
      'MUI X: Could not find the highlighted ref context.',
      'It looks like you rendered your component outside of a ChartsContainer parent component.',
      'The above error occurred in the <UseHighlighted> component:',
    ]);

    expect((errorRef.current as any).errors).to.have.length(1);
    expect((errorRef.current as any).errors[0].toString()).to.include(
      'MUI X: Could not find the highlighted ref context.',
    );
  });

  it('should not throw an error when parent context is present', () => {
    const { getByText } = render(
      <SeriesContextProvider series={[]} seriesFormatters={{}}>
        <HighlightedProvider highlightedItem={{ seriesId: 'test-id' }}>
          <UseHighlighted />
        </HighlightedProvider>
      </SeriesContextProvider>,
    );

    expect(getByText('test-id')).toBeVisible();
  });
});
