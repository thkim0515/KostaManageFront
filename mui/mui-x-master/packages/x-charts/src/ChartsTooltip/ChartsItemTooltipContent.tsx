import * as React from 'react';
import PropTypes from 'prop-types';
import { SxProps, Theme } from '@mui/material/styles';
import { useSlotProps } from '@mui/base/utils';
import { ItemInteractionData } from '../context/InteractionProvider';
import { ChartSeriesDefaultized, ChartSeriesType } from '../models/seriesType/config';
import { ChartsTooltipClasses } from './chartsTooltipClasses';
import { DefaultChartsItemTooltipContent } from './DefaultChartsItemTooltipContent';
import { useCartesianContext } from '../context/CartesianProvider';
import { ZAxisContext } from '../context/ZAxisContextProvider';
import { useColorProcessor } from '../hooks/useColor';
import { useSeries } from '../hooks/useSeries';

export type ChartsItemContentProps<T extends ChartSeriesType = ChartSeriesType> = {
  /**
   * The data used to identify the triggered item.
   */
  itemData: ItemInteractionData<T>;
  /**
   * The series linked to the triggered axis.
   */
  series: ChartSeriesDefaultized<T>;
  /**
   * Override or extend the styles applied to the component.
   */
  classes: ChartsTooltipClasses;
  /**
   * Get the color of the item with index `dataIndex`.
   * @param {number} dataIndex The data index of the item.
   * @returns {string} The color to display.
   */
  getColor: (dataIndex: number) => string;
  sx?: SxProps<Theme>;
};

function ChartsItemTooltipContent<T extends ChartSeriesType>(props: {
  itemData: ItemInteractionData<T>;
  content?: React.ElementType<ChartsItemContentProps<T>>;
  contentProps?: Partial<ChartsItemContentProps<T>>;
  sx?: SxProps<Theme>;
  classes: ChartsItemContentProps<T>['classes'];
}) {
  const { content, itemData, sx, classes, contentProps } = props;

  const series = useSeries()[itemData.type]!.series[itemData.seriesId] as ChartSeriesDefaultized<T>;

  const { xAxis, yAxis, xAxisIds, yAxisIds } = useCartesianContext();
  const { zAxis, zAxisIds } = React.useContext(ZAxisContext);
  const colorProcessors = useColorProcessor();

  const xAxisKey = (series as any).xAxisKey ?? xAxisIds[0];
  const yAxisKey = (series as any).yAxisKey ?? yAxisIds[0];
  const zAxisKey = (series as any).zAxisKey ?? zAxisIds[0];

  const getColor =
    colorProcessors[series.type]?.(
      series as any,
      xAxisKey && xAxis[xAxisKey],
      yAxisKey && yAxis[yAxisKey],
      zAxisKey && zAxis[zAxisKey],
    ) ?? (() => '');

  const Content = content ?? DefaultChartsItemTooltipContent;
  const chartTooltipContentProps = useSlotProps({
    elementType: Content,
    externalSlotProps: contentProps,
    additionalProps: {
      itemData,
      series,
      sx,
      classes,
      getColor,
    },
    ownerState: {},
  });
  return <Content {...chartTooltipContentProps} />;
}

ChartsItemTooltipContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  classes: PropTypes.object.isRequired,
  content: PropTypes.elementType,
  contentProps: PropTypes.shape({
    classes: PropTypes.object,
    getColor: PropTypes.func,
    itemData: PropTypes.shape({
      dataIndex: PropTypes.number,
      seriesId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      type: PropTypes.oneOf(['bar', 'line', 'pie', 'scatter']).isRequired,
    }),
    series: PropTypes.object,
    sx: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
      PropTypes.func,
      PropTypes.object,
    ]),
  }),
  itemData: PropTypes.shape({
    dataIndex: PropTypes.number,
    seriesId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    type: PropTypes.oneOf(['bar', 'line', 'pie', 'scatter']).isRequired,
  }).isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object,
  ]),
} as any;

export { ChartsItemTooltipContent };
