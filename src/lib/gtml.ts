
export const pushToDataLayer = (event: DataLayerEvent) => {
  if (window && window.dataLayer) {
    window.dataLayer.push(event)
  }
}
