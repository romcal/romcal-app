import ContentLoader from 'react-content-loader';
import React, { FunctionComponent } from 'react';

export type CalendarLoaderProps = {
  readonly viewBox?: string;
  readonly height?: number;
  readonly width?: number;
  readonly speed?: number;
  readonly animate?: boolean;
  readonly title?: string;
  readonly interval?: number;
  readonly backgroundColor?: string;
  readonly foregroundColor?: string;
  readonly backgroundOpacity?: number;
  readonly foregroundOpacity?: number;
};

const CalendarLoader: FunctionComponent = props => (
  <ContentLoader {...props}>
    <rect x="30" y="20" rx="2" ry="2" width="100" height="100" />
    <rect x="150" y="20" rx="2" ry="2" width="100" height="100" />
    <rect x="270" y="20" rx="2" ry="2" width="100" height="100" />
    <rect x="390" y="20" rx="2" ry="2" width="100" height="100" />
    <rect x="510" y="20" rx="2" ry="2" width="100" height="100" />
    <rect x="30" y="140" rx="2" ry="2" width="100" height="100" />
    <rect x="150" y="140" rx="2" ry="2" width="100" height="100" />
    <rect x="270" y="140" rx="2" ry="2" width="100" height="100" />
    <rect x="390" y="140" rx="2" ry="2" width="100" height="100" />
    <rect x="510" y="140" rx="2" ry="2" width="100" height="100" />
    <rect x="30" y="260" rx="2" ry="2" width="100" height="100" />
    <rect x="150" y="260" rx="2" ry="2" width="100" height="100" />
    <rect x="270" y="260" rx="2" ry="2" width="100" height="100" />
    <rect x="390" y="260" rx="2" ry="2" width="100" height="100" />
    <rect x="510" y="260" rx="2" ry="2" width="100" height="100" />
    <rect x="30" y="380" rx="2" ry="2" width="100" height="100" />
    <rect x="150" y="380" rx="2" ry="2" width="100" height="100" />
    <rect x="270" y="380" rx="2" ry="2" width="100" height="100" />
    <rect x="390" y="380" rx="2" ry="2" width="100" height="100" />
    <rect x="510" y="380" rx="2" ry="2" width="100" height="100" />
  </ContentLoader>
);

CalendarLoader.defaultProps = {
  viewBox: `0 0 630 900`,
  height: 900,
  width: 630,
  speed: 2,
  title: '',
  backgroundColor: `#F5F6F7`,
};

export default CalendarLoader;
