import React from 'react';
import './CircularProgressBar.css'; // Import CSS for styling

const CircularProgressBar = ({ progress }) => {
    // Determine the color based on the progress value
    const color = progress < 0 ? 'red' : 'green';

    // Calculate the dash offset based on the absolute progress value
    const absProgress = Math.abs(progress);
    const dashOffset = 283 - (283 * absProgress) / 100; // 283 is the circumference of a circle with a radius of 45

    // Determine the transformation based on the progress value
    const transformation = progress < 0 ? 'rotate(-90 60 60)' : 'rotate(270 60 60)'; // Rotate 270 degrees to start from the right

    return (
        <div className="progress-container">
            <svg className="progress-ring" width="120" height="120">
                <circle
                    className="progress-ring-circle"
                    strokeWidth="10"
                    fill="transparent"
                    r="45"
                    cx="60"
                    cy="60"
                />
                <circle
                    className="progress-ring-circle"
                    strokeWidth="10"
                    fill="transparent"
                    r="45"
                    cx="60"
                    cy="60"
                    style={{
                        stroke: color,
                        strokeDasharray: 283,
                        strokeDashoffset: dashOffset,
                        transform: transformation,
                        transition: 'stroke-dashoffset 0.35s',
                    }}
                />
            </svg>
        </div>
    );
};

export default CircularProgressBar;
