type CallbackStatus = {
    /**
     * HTTP Request status code
     */
    status: number

    /**
     * HTTP Headers
     */
    headers: { [key: string]: string }
}

/**
 * Callback function
 */
type Callback = (error: null | any, response: CallbackStatus, data: string) => void


type RequestOptions = {
    /**
     * Request URL
     */
    url: string

    /**
     * Request header
     */
    headers?: {
        [key: string]: string
    }

    /**
     * Request body
     */
    body?: string
}


type HttpClient = {
    /**
     * Get http rescource
     *
     * @param url Url you want to get
     * @param callback Called when success
     */
    get(url: string, callback: Callback)
    /**
     * Get http rescource
     *
     * @param options Request details
     * @param callback Called when success
     */
    get(options: RequestOptions, callback: Callback)

    /**
     * Post http rescource
     *
     * @param url Url you want to post
     * @param callback Called when success
     */
    post(url: string, callback: Callback)
    /**
     * Post http rescource
     *
     * @param options Request details
     * @param callback Called when success
     */
    post(options: RequestOptions, callback: Callback)


    /**
     * Put http rescource
     *
     * @param url Url you want to put
     * @param callback Called when success
     */
    put(url: string, callback: Callback)
    /**
     * Put http rescource
     *
     * @param options Request details
     * @param callback Called when success
     */
    put(options: RequestOptions, callback: Callback)

    /**
     * Delete http rescource
     *
     * @param url Url you want to delete
     * @param callback Called when success
     */
    delete(url: string, callback: Callback)
    /**
     * Delete http rescource
     *
     * @param options Request details
     * @param callback Called when success
     */
    delete(options: RequestOptions, callback: Callback)

    /**
     * Head http rescource
     *
     * @param url Url you want to head
     * @param callback Called when success
     */
    head(url: string, callback: Callback)
    /**
     * Head http rescource
     *
     * @param options Request details
     * @param callback Called when success
     */
    head(options: RequestOptions, callback: Callback)

    /**
     * Options http rescource
     *
     * @param url Url you want to options
     * @param callback Called when success
     */
    options(url: string, callback: Callback)
    /**
     * Options http rescource
     *
     * @param options Request details
     * @param callback Called when success
     */
    options(options: RequestOptions, callback: Callback)

    /**
     * Patch http rescource
     *
     * @param url Url you want to patch
     * @param callback Called when success
     */
    patch(url: string, callback: Callback)
    /**
     * Patch http rescource
     *
     * @param options Request details
     * @param callback Called when success
     */
    patch(options: RequestOptions, callback: Callback)
}

declare const $httpClient: HttpClient
