/**
 * Surge utils class
 **/
type Util = {
    /**
     * Perform a GeoIP lookup. Results are in ISO 3166 code.
     *
     * @param ip the ip that you want to query
     */
    geoip(ip: string): string
}

declare const $util: Util


/**
 * Outbound Mode
 */
declare enum OutboundMode {
    Direct = 'direct',
    GlobalProxy = 'global-proxy',
    Rule = 'rule'
}

/**
 * Surge functional class
 */
type Surge = {
    /**
     * Set the outbound mode, the value should be 'direct', 'global-proxy', or 'rule'.Return true if successes
     *
     * @param mode outbound mode
     */
    setOutboundMode(mode: OutboundMode): boolean

    /**
     * Set http capture is enabled
     *
     * @param enabled Is enable http capture
     */
    setHTTPCaptureEnabled(enabled: boolean)

    /**
     * Set Cellular Mode status
     *
     * @param enabled Is enable CellularMode
     */
    setCellularModeEnabled(enabled: boolean)

    /**
     * Set Rewrite status
     * @param enabled Is enable Rewrite
     */
    setRewriteEnabled(enabled: boolean)

    /**
     * Set Enhanced Mode status, Surge Mac Only
     * @param enabled Is enable Enhanced Mode
     */
    setEnhancedModeEnabled(enabled: boolean)
}

declare const $surge: Surge

/**
 * Script in surge
 */
type Script = {
    /**
     * The script name which is being evaluating
     */
    name: string
    /**
     * The time when the current script starts.
     */
    startTime: Date
}

declare const $script: Script

/**
 * Surge notification
 */
type Notification = {
    /**
     * Post a notification.
     *
     * @param title Notification title
     * @param subtitle Notification subtitle
     * @param body Notification body
     */
    post(title: string, subtitle: string, body: string)
}

declare const $notification: Notification

declare const $request: IncomingRequest | OutcomingRequest
