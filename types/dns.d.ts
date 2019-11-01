type DnsRewriteResponse = {
    /**
     * Use this IP address as a result.
     * It must be a valid IPv4/IPv6 address in string.
     */
    address?: string
    /**
     * Use multiple IP addresses as a result.
     */
    addresses?: string[]
    /**
     * Ask Surge to lookup the domain via a specified upstream DNS server.
     * It must be a valid IPv4/IPv6 address in string.
     */
    servers?: string[]

    /**
     * DNS Resule Time-To-Live.
     * Add the result to cache and avoid repeated lookup
     */
    ttl?: number
}

/**
 * The Dns Rewrite response
 * @param rewrite resute, if empty will Fallback to standard DND query
 */
declare function $done(response: DnsRewriteResponse): any
