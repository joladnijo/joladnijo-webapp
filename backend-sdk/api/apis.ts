// @ts-nocheck
export * from './aidCentersApi';
import { AidCentersApi } from './aidCentersApi';
export * from './apiApi';
import { ApiApi } from './apiApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AidCentersApi, ApiApi];
