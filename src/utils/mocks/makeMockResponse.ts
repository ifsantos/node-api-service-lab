import { Response } from 'express';

export type MockResponse<TResult> = Response & {
    state: {
        status? : number
        json? : TResult | unknown
    }
}

export function makeMockResponse<TReseult>(){
    const response = {
        state: {}

    } as MockResponse<TReseult>;

    response.status = (status : number) => {
        response.state.status = status;
        return response;
    }
    response.json = (json : TReseult) => {
        response.state.json = json;
        return response;
    }

    return response
}