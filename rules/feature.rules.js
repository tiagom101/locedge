export default { "x-cached-since": [{ provider: "gcore" }], "server": [{ provider: "cachefly", regex: "^cfs.*$" }, { provider: "cdn77", regex: "^.*cdn77.*$" }, { provider: "fastly", regex: "^artisanal bits$" }, { provider: "keycdn", regex: "^.*keycdn.*$" }, { provider: "google", regex: "^(golfe2|gws|cafe|sffe|.*google.*|esf)$" }, { provider: "akamai", regex: ".*akam.*" }, { provider: "alibaba", regex: "tengine.*" }, { provider: "limelight", regex: "edgeprism.*" }], "akamai-grn": [{ provider: "akamai" }], "x-cdn": [{}], "x-msedge-ref": [{ provider: "azure" }] };