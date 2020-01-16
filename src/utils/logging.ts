/*
    The logging solution is not yet in place. Currently the logs
    are all written to console and only appended with one of the following
    prefixes/severities:

    - [SILLY]
    - [DEBUG]
    - [VERBOSE]
    - [HTTP]
    - [INFO]
    - [WARN]
    - [ERROR]
*/
export const silly = (...params: any[]) => console.log('[SILLY]', ...params);
export const debug = (...params: any[]) => console.log('[DEBUG]', ...params);
export const verbose = (...params: any[]) => console.log('[VERBOSE]', ...params);
export const http = (...params: any[]) => console.log('[HTTP]', ...params);
export const info = (...params: any[]) => console.log('[INFO]', ...params);
export const warn = (...params: any[]) => console.log('[WARN]', ...params);
export const error = (...params: any[]) => console.log('[ERROR]', ...params);
