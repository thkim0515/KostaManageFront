import * as React from 'react';
import { expect } from 'chai';
import { ErrorBoundary, createRenderer } from '@mui/internal-test-utils';
import { useSeries } from './useSeries';
import barFormatter from '../BarChart/formatter';
import { SeriesContextProvider } from '../context/SeriesContextProvider';

function UseSeries() {
  const { bar } = useSeries();
  return <div>{bar?.series['test-id']?.id}</div>;
}

describe('useSeries', () => {
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
          <UseSeries />
        </ErrorBoundary>,
      ),
    ).toErrorDev([
      'MUI X: Could not find the series ref context.',
      'It looks like you rendered your component outside of a ChartsContainer parent component.',
      'The above error occurred in the <UseSeries> component:',
    ]);

    expect((errorRef.current as any).errors).to.have.length(1);
    expect((errorRef.current as any).errors[0].toString()).to.include(
      'MUI X: Could not find the series ref context.',
    );
  });

  it('should not throw an error when parent context is present', () => {
    const { getByText } = render(
      <SeriesContextProvider
        series={[{ type: 'bar', id: 'test-id', data: [1, 2] }]}
        seriesFormatters={{ bar: barFormatter }}
      >
        <UseSeries />
      </SeriesContextProvider>,
    );

    expect(getByText('test-id')).toBeVisible();
  });
});
