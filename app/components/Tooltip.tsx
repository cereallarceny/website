'use client';

import { useMemo } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

// Import the default styles for react-tooltip (these are overridden in globals.css)
import 'react-tooltip/dist/react-tooltip.css';

// Define the types for this component
type Props = {
  text: string;
  children: React.ReactNode;
  parentStyles: string;
  childStyles: string;
};

const Tooltip: React.FC<Props> = ({
  text,
  children,
  parentStyles,
  childStyles,
}) => {
  // Create a unique ID to reference this text from
  const id = useMemo(() => text.split(' ').join('-').toLowerCase(), [text]);

  return (
    <div style={{ display: 'inline' }}>
      <span className={parentStyles} id={id}>
        {text}
      </span>
      <ReactTooltip anchorSelect={`#${id}`} clickable className={childStyles}>
        {children}
      </ReactTooltip>
    </div>
  );
};

export default Tooltip;
