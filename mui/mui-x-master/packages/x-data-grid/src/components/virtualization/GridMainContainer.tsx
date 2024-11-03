import * as React from 'react';
import { styled } from '@mui/system';
import { DataGridProcessedProps } from '../../models/props/DataGridProps';
import { useGridRootProps } from '../../hooks/utils/useGridRootProps';
import { useGridAriaAttributes } from '../../hooks/utils/useGridAriaAttributes';

type OwnerState = DataGridProcessedProps;

const Element = styled('div', {
  name: 'MuiDataGrid',
  slot: 'Main',
  overridesResolver: (props, styles) => styles.main,
})<{ ownerState: OwnerState }>({
  flexGrow: 1,
  position: 'relative',
  overflow: 'hidden',
});

export const GridMainContainer = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<{
    className: string;
  }>
>((props, ref) => {
  const ariaAttributes = useGridAriaAttributes();
  const rootProps = useGridRootProps();

  return (
    <Element
      ref={ref}
      ownerState={rootProps}
      className={props.className}
      tabIndex={-1}
      {...ariaAttributes}
    >
      {props.children}
    </Element>
  );
});
