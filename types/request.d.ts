type RewriteHttpRequest = {
    /**
     * Use the new URL to overwrite the old one. 
     * Please note that it won't update the 'Host' field in the header as URL Rewrite does.
     * You need to change it manually by returning a modified header object if necessary.
     */
    url?: string

    /**
     * Use the new headers to overwrite all the old headers. 
     * Please note that some fields may not be modified, such as 'Content-Length'.
     */
    headers?: {
        [key: string]: string
    }

    /**
     *  Use the new body to overwrite the old one. Only works when requires-body = true.
     */
    body?: string

    /**
     * If this object exists, Surge returns an HTTP response directly without a real network operation.
     */
    response?: {
        /**
         * Response HTTP status code. (Optional. Default: 200)
         */
        $status?: number

        /**
         * Response HTTP Headers. (Optional)
         */
        $headers?: {
            [key: string]: string
        }

        /**
         * Response HTTP Body. (Optional)
         */
        $body?: string
    }
}

/**
 * You may use $done(); to abort the request without returning anything. 
 * Or use $done({}); to keep the request untouched.
 * @param rewrite 
 */
declare function $done(rewrite?: RewriteHttpRequest): any

/**
 * Uses a script to modify the HTTP request. The value field is a regular expression to match the request URLs.
 */
type IncomingRequest = {
    /**
     * Request URL
     */
    url: string

    /**
     * Request HTTP method
     */
    method: string

    /**
     * Request HTTP Headers
     */
    headers: { [key: string]: string }
}
