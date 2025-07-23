// src/components/TimelineIcon.jsx


import IconStep1 from '../assets/icons/IconStep1';
import IconStep2 from '../assets/icons/IconStep2';
import IconStep3 from '../assets/icons/IconStep3';
import IconStep4 from '../assets/icons/IconStep4';

const icons = [
  IconStep1, 
  IconStep2, 
  IconStep3, 
  IconStep4
];

export default function TimelineIcon({ index, className }) {
  const IconComponent = icons[index] || icons[icons.length - 1];
  return <IconComponent className={className} />;
}