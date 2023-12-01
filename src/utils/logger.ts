/** @format */

import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info', // Change the log level as needed
  format: format.combine(
    format.colorize(),
    format.timestamp(),
    format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new transports.Console()
    // Add other transports here (e.g., file transport)
  ]
});

export default logger;
