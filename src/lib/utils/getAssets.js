export default function getAssets(path) {
  const assets = import.meta.glob('$lib/images/**', { eager: true });
  const getAssetUrl = () => {
    let images = {};
    for (let [key, value] of Object.entries(assets)) {

      if (key.includes(path)) {
        let name = key.split('/')[5];
        images[name] = value.default;
      }
    }
    return images;
  }

  return getAssetUrl()
}