'use client';
import CountUP from 'react-countup';

const Badge = ({
    containerStyles,
    icon,
    endCountNum,
    endCountText,
    BadgeText
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div>
        
      </div>
      <div>
        <div>
            <CountUP end={endCountNum} />
        </div>
      </div>
    </div>
  )
}

export default Badge;
