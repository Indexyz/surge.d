
type RewriteHttpResponse = {
    /**
     * Use the new body to overwrite the old one. Only works when requires-body = true.
     */
    body?: string

    /**
     * Use the new headers to overwrite all the old headers. 
     * Please note that some fields may not be modified, such as 'Content-Length'.
     */
    headers?: {[key: string]: string}

    /**
     * Use the new status code to overwrite the old one.
     */
    status?: number
}

/**
 * You may use $done(); to abort the request without returning anything. 
 * Or use $done({}); to keep the response untouched.
 * @param rewrite 
 */
declare function $done(rewrite?: RewriteHttpResponse): any

/**
 * Uses a script to modify the HTTP request. The value field is a regular expression to match the request URLs.
 */
type OutcomingRequest = {
    /**
     * Request URL
     */
    url: string

    /**
     * Request HTTP method
     */
    method: string

    /**
     * Response HTTP status code
     */
    status: number

    /**
     * Request HTTP Headers
     */
    headers: { [key: string]: string }

    /**
     * Response HTTP Body, decoded to string with UTF-8. 
     * Only exists when requires-body = true.
     */
    body?: string
}
