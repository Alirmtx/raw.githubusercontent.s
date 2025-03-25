function FindProxyForURL(url, host) {
  if (/^127.0.0.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) {
    return 'DIRECT';
  }
  return 'PROXY 127.0.0.1:12335';
}
