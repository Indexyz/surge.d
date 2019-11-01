/**
 * Surge utils class
 **/
declare class $utils {
    /**
     * Perform a GeoIP lookup. Results are in ISO 3166 code.
     * 
     * @param ip the ip that you want to query
     */
    static geoip(ip: string): string
}

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
declare class $surge {
    /**
     * Set the outbound mode, the value should be 'direct', 'global-proxy', or 'rule'.Return true if successes
     * 
     * @param mode outbound mode
     */
    static setOutboundMode(mode: OutboundMode): boolean

    /**
     * Set http capture is enabled
     * 
     * @param enabled Is enable http capture
     */
    static setHTTPCaptureEnabled(enabled: boolean)

    /**
     * Set Cellular Mode status
     * 
     * @param enabled Is enable CellularMode
     */
    static setCellularModeEnabled(enabled: boolean)

    /**
     * Set Rewrite status
     * @param enabled Is enable Rewrite
     */
    static setRewriteEnabled(enabled: boolean)

    /**
     * Set Enhanced Mode status, Surge Mac Only
     * @param enabled Is enable Enhanced Mode
     */
    static setEnhancedModeEnabled(enabled: boolean)
}

/**
 * Script in surge
 */
declare class $script {
    /**
     * The script name which is being evaluating
     */
    static name: string
    /**
     * The time when the current script starts.
     */
    static startTime: Date
}

/**
 * Surge notification
 */
declare class $notification {
    /**
     * Post a notification.
     * 
     * @param title Notification title
     * @param subtitle Notification subtitle
     * @param body Notification body
     */
    static post(title: string, subtitle: string, body: string)
}

declare const $request: IncomingRequest | OutcomingRequest
